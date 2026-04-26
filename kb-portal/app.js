(function () {
  const data = window.KB_DATA;
  const content = window.KB_CONTENT;

  if (!data || !content) {
    document.body.innerHTML =
      "<main style='padding:24px;font-family:sans-serif'>Missing portal data. Run node kb-tools/build-kb-portal-data.mjs first.</main>";
    return;
  }

  const itemMap = new Map((data.items ?? []).map((item) => [item.key, item]));
  const phaseOrder = new Map((data.taxonomy?.phase_groups ?? []).map((phase, index) => [phase.id, index]));
  const packTypeLabels = {
    prompt_pack: "Prompt Pack",
    checklist_pack: "Checklist Pack",
    use_case_pack: "Use Case Pack"
  };
  const starterKeyOrder = new Map(
    (data.packs ?? [])
      .filter((pack) => pack.type === "use_case_pack")
      .map((pack, index) => [pack.key, index])
  );
  const promptInputStorageKey = "fotn.kb.prompt-inputs.v1";
  const projectProfileStorageKey = "fotn.kb.project-profile.v1";
  const bundleScopeStorageKey = "fotn.kb.bundle-scope.v1";
  const bundleCheckedStorageKey = "fotn.kb.bundle-checked-packs.v1";

  const state = {
    search: "",
    mode: data.defaults?.mode ?? "all",
    phaseGroup: "",
    deliverable: "",
    resourceKind: "",
    cardKind: "",
    packType: "",
    availability: "",
    sourceId: "",
    localOnly: false,
    pendingOnly: false,
    sort: "phase",
    selectedKey: decodeURIComponent(window.location.hash.replace(/^#/, "")),
    pendingComposerFocus: null,
    composerFieldFilterByKey: Object.create(null),
    promptInputs: loadStoredPromptInputs(),
    projectProfile: loadStoredProjectProfile(),
    bundleScope: loadStoredBundleScope(),
    bundleCheckedKeys: loadStoredBundleCheckedKeys()
  };

  const els = {
    searchInput: document.getElementById("search-input"),
    statsGrid: document.getElementById("stats-grid"),
    modeButtons: document.getElementById("mode-buttons"),
    quickPackList: document.getElementById("quick-pack-list"),
    contextWorkspaceSummary: document.getElementById("context-workspace-summary"),
    contextWorkspaceList: document.getElementById("context-workspace-list"),
    bundleScope: document.getElementById("bundle-scope"),
    checkStartedPacks: document.getElementById("check-started-packs"),
    checkReadyPacks: document.getElementById("check-ready-packs"),
    checkAutoFillablePacks: document.getElementById("check-auto-fillable-packs"),
    checkManualGapPacks: document.getElementById("check-manual-gap-packs"),
    checkAllPacks: document.getElementById("check-all-packs"),
    clearCheckedPacks: document.getElementById("clear-checked-packs"),
    openPreviousBlocker: document.getElementById("open-previous-blocker"),
    openNextBlocker: document.getElementById("open-next-blocker"),
    applyProfileScope: document.getElementById("apply-profile-scope"),
    resolveScopeBlockers: document.getElementById("resolve-scope-blockers"),
    exportAllContext: document.getElementById("export-all-context"),
    importAllContext: document.getElementById("import-all-context"),
    copyPromptBundle: document.getElementById("copy-prompt-bundle"),
    exportPromptBundle: document.getElementById("export-prompt-bundle"),
    copyWorkspaceBrief: document.getElementById("copy-workspace-brief"),
    exportWorkspaceBrief: document.getElementById("export-workspace-brief"),
    copyBlockerQueueBrief: document.getElementById("copy-blocker-queue-brief"),
    exportBlockerQueueBrief: document.getElementById("export-blocker-queue-brief"),
    copyCoverageReport: document.getElementById("copy-coverage-report"),
    exportCoverageReport: document.getElementById("export-coverage-report"),
    clearAllContext: document.getElementById("clear-all-context"),
    projectProfileSummary: document.getElementById("project-profile-summary"),
    applyProfileAll: document.getElementById("apply-profile-all"),
    clearProjectProfile: document.getElementById("clear-project-profile"),
    profileProjectName: document.getElementById("profile-project-name"),
    profileCorePitch: document.getElementById("profile-core-pitch"),
    profileTargetPlatforms: document.getElementById("profile-target-platforms"),
    profileTargetPlayers: document.getElementById("profile-target-players"),
    profileCurrentStatus: document.getElementById("profile-current-status"),
    resetFilters: document.getElementById("reset-filters"),
    featuredPhases: document.getElementById("featured-phases"),
    extraPhases: document.getElementById("extra-phases"),
    toggleExtraPhases: document.getElementById("toggle-extra-phases"),
    deliverableFilter: document.getElementById("deliverable-filter"),
    resourceFilter: document.getElementById("resource-filter"),
    cardKindFilter: document.getElementById("card-kind-filter"),
    packTypeFilter: document.getElementById("pack-type-filter"),
    availabilityFilter: document.getElementById("availability-filter"),
    sourceFilter: document.getElementById("source-filter"),
    localOnly: document.getElementById("local-only"),
    pendingOnly: document.getElementById("pending-only"),
    sortSelect: document.getElementById("sort-select"),
    resultTitle: document.getElementById("result-title"),
    resultMeta: document.getElementById("result-meta"),
    starterView: document.getElementById("starter-view"),
    itemList: document.getElementById("item-list"),
    detailEmpty: document.getElementById("detail-empty"),
    detailView: document.getElementById("detail-view"),
    detailType: document.getElementById("detail-type"),
    detailTitle: document.getElementById("detail-title"),
    detailSummary: document.getElementById("detail-summary"),
    detailBadges: document.getElementById("detail-badges"),
    detailActions: document.getElementById("detail-actions"),
    detailPreview: document.getElementById("detail-preview"),
    detailContent: document.getElementById("detail-content"),
    detailMetadata: document.getElementById("detail-metadata"),
    detailLocalLinks: document.getElementById("detail-local-links"),
    detailOfficialLinks: document.getElementById("detail-official-links"),
    detailRelated: document.getElementById("detail-related"),
    copyFeedback: document.getElementById("copy-feedback")
  };

  const modeDefinitions = [
    { id: "all", label: "All Items" },
    { id: "downloaded_open", label: "Open Local" },
    { id: "commercial_metadata", label: "Commercial Meta" },
    { id: "user_pending", label: "Pending Files" },
    { id: "promptish_cards", label: "Cards Only" },
    { id: "pack_bundles", label: "Packs Only" },
    { id: "start_here", label: "Start Here" }
  ];

  function createOption(select, value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.append(option);
  }

  function itemPhaseIds(item) {
    return [...new Set([...(item.phase_groups ?? []), ...(item.phase_group ? [item.phase_group] : [])].filter(Boolean))];
  }

  function primaryPhaseId(item) {
    return item.phase_group || itemPhaseIds(item)[0] || "";
  }

  function selectedPhaseLabel() {
    const phase = (data.taxonomy?.phase_groups ?? []).find((candidate) => candidate.id === state.phaseGroup);
    return phase?.label ?? state.phaseGroup;
  }

  function modeLabel(modeId) {
    return modeDefinitions.find((mode) => mode.id === modeId)?.label ?? "All Items";
  }

  function packTypeLabel(typeId) {
    return packTypeLabels[typeId] || typeId;
  }

  function isUseCasePack(item) {
    return item?.entity_type === "pack" && item.pack_type === "use_case_pack";
  }

  function badge(label) {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = label;
    return span;
  }

  function toPortalHref(relativePath) {
    return encodeURI(`../${relativePath}`);
  }

  function getContentBlock(item) {
    return content[item?.key] ?? null;
  }

  function normalizeText(value) {
    return String(value ?? "").replace(/\r\n/g, "\n").trim();
  }

  function emptyProjectProfile() {
    return {
      project_name: "",
      core_pitch: "",
      target_platforms: "",
      target_players: "",
      current_status: ""
    };
  }

  function projectProfileFields() {
    return [
      { key: "project_name", label: "Project name" },
      { key: "core_pitch", label: "Core pitch" },
      { key: "target_platforms", label: "Target platforms" },
      { key: "target_players", label: "Target players" },
      { key: "current_status", label: "Current status" }
    ];
  }

  function loadStoredProjectProfile() {
    try {
      const raw = window.localStorage?.getItem(projectProfileStorageKey);
      const base = emptyProjectProfile();
      if (!raw) {
        return base;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return base;
      }
      for (const field of projectProfileFields()) {
        base[field.key] = typeof parsed[field.key] === "string" ? parsed[field.key] : "";
      }
      return base;
    } catch {
      return emptyProjectProfile();
    }
  }

  function loadStoredBundleScope() {
    try {
      const raw = window.localStorage?.getItem(bundleScopeStorageKey);
      return ["started", "ready", "all", "checked", "selected"].includes(raw) ? raw : "started";
    } catch {
      return "started";
    }
  }

  function loadStoredBundleCheckedKeys() {
    try {
      const raw = window.localStorage?.getItem(bundleCheckedStorageKey);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return [...new Set(parsed.map((value) => String(value ?? "")).filter(Boolean))];
    } catch {
      return [];
    }
  }

  function loadStoredPromptInputs() {
    try {
      const raw = window.localStorage?.getItem(promptInputStorageKey);
      if (!raw) {
        return Object.create(null);
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return Object.create(null);
      }

      const normalized = Object.create(null);
      for (const [itemKey, values] of Object.entries(parsed)) {
        if (!values || typeof values !== "object" || Array.isArray(values)) {
          continue;
        }
        const cleanValues = Object.create(null);
        for (const [fieldKey, fieldValue] of Object.entries(values)) {
          const text = normalizeText(fieldValue);
          if (text) {
            cleanValues[fieldKey] = fieldValue;
          }
        }
        if (Object.keys(cleanValues).length > 0) {
          normalized[itemKey] = cleanValues;
        }
      }
      return normalized;
    } catch {
      return Object.create(null);
    }
  }

  function buildLocalLink(label, relativePath, className = "link-chip") {
    const anchor = document.createElement("a");
    anchor.className = className;
    anchor.href = toPortalHref(relativePath);
    anchor.textContent = label;
    return anchor;
  }

  let copyFeedbackTimer = 0;

  function showCopyFeedback(message, isError = false) {
    if (!els.copyFeedback) {
      return;
    }
    window.clearTimeout(copyFeedbackTimer);
    els.copyFeedback.textContent = message;
    els.copyFeedback.className = `copy-feedback${isError ? " is-error" : ""}`;
    copyFeedbackTimer = window.setTimeout(() => {
      els.copyFeedback.className = "copy-feedback hidden";
      els.copyFeedback.textContent = "";
    }, 2200);
  }

  async function copyText(value, label = "Text") {
    const normalized = normalizeText(value);
    if (!normalized) {
      showCopyFeedback(`${label} is empty.`, true);
      return false;
    }

    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(normalized);
        showCopyFeedback(`${label} copied.`);
        return true;
      }
    } catch {
      // Fall through to the textarea-based copy path.
    }

    const textarea = document.createElement("textarea");
    textarea.value = normalized;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.append(textarea);
    textarea.focus();
    textarea.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    textarea.remove();

    if (copied) {
      showCopyFeedback(`${label} copied.`);
      return true;
    }

    showCopyFeedback(`Could not copy ${label.toLowerCase()}.`, true);
    return false;
  }

  function buildCopyButton(label, value, className = "link-chip") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = label;
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      await copyText(value, label);
    });
    return button;
  }

  function buildActionButton(label, handler, className = "action-button") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = label;
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      await handler(event);
    });
    return button;
  }

  function persistPromptInputs() {
    try {
      if (!window.localStorage) {
        return;
      }
      const serializable = {};
      for (const [itemKey, values] of Object.entries(state.promptInputs ?? {})) {
        const cleanValues = {};
        for (const [fieldKey, fieldValue] of Object.entries(values ?? {})) {
          const text = normalizeText(fieldValue);
          if (text) {
            cleanValues[fieldKey] = fieldValue;
          }
        }
        if (Object.keys(cleanValues).length > 0) {
          serializable[itemKey] = cleanValues;
        }
      }
      window.localStorage.setItem(promptInputStorageKey, JSON.stringify(serializable));
    } catch {
      // Ignore storage failures and keep the session usable.
    }
  }

  function persistProjectProfile() {
    try {
      if (!window.localStorage) {
        return;
      }
      const cleanProfile = {};
      for (const field of projectProfileFields()) {
        cleanProfile[field.key] = state.projectProfile[field.key] ?? "";
      }
      window.localStorage.setItem(projectProfileStorageKey, JSON.stringify(cleanProfile));
    } catch {
      // Ignore storage failures and keep the session usable.
    }
  }

  function persistBundleScope() {
    try {
      if (!window.localStorage) {
        return;
      }
      window.localStorage.setItem(bundleScopeStorageKey, state.bundleScope);
    } catch {
      // Ignore storage failures and keep the session usable.
    }
  }

  function persistBundleCheckedKeys() {
    try {
      if (!window.localStorage) {
        return;
      }
      window.localStorage.setItem(bundleCheckedStorageKey, JSON.stringify(state.bundleCheckedKeys));
    } catch {
      // Ignore storage failures and keep the session usable.
    }
  }

  function promptFieldKey(label, index) {
    const slug = String(label ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    return slug || `input_${index + 1}`;
  }

  function promptFieldSpecs(item) {
    return (item.required_inputs ?? []).map((label, index) => ({
      label,
      key: promptFieldKey(label, index)
    }));
  }

  function promptInputStore(item) {
    if (!item?.key) {
      return {};
    }
    if (!state.promptInputs[item.key]) {
      state.promptInputs[item.key] = Object.create(null);
    }
    return state.promptInputs[item.key];
  }

  function savePromptInputValue(item, key, value) {
    if (!item?.key) {
      return;
    }
    const values = promptInputStore(item);
    if (normalizeText(value)) {
      values[key] = value;
    } else {
      delete values[key];
      if (Object.keys(values).length === 0) {
        delete state.promptInputs[item.key];
      }
    }
    persistPromptInputs();
  }

  function clearPromptInputs(item) {
    if (!item?.key) {
      return;
    }
    delete state.promptInputs[item.key];
    persistPromptInputs();
  }

  function promptFieldCounts(item) {
    const specs = promptFieldSpecs(item);
    const values = promptInputStore(item);
    const filled = specs.filter((spec) => normalizeText(values[spec.key] ?? "")).length;
    return {
      filled,
      total: specs.length
    };
  }

  function missingPromptFieldSpecs(item) {
    const values = promptInputStore(item);
    return promptFieldSpecs(item).filter((spec) => !normalizeText(values[spec.key] ?? ""));
  }

  function promptIsReady(item) {
    const counts = promptFieldCounts(item);
    return counts.total > 0 && counts.filled === counts.total;
  }

  function promptProgressText(item) {
    const counts = promptFieldCounts(item);
    if (counts.total === 0) {
      return "No context fields";
    }
    return `${counts.filled} / ${counts.total} context fields filled`;
  }

  function composerFieldFilterMode(item) {
    const mode = state.composerFieldFilterByKey[item?.key];
    return ["all", "remaining", "autofill", "manual"].includes(mode) ? mode : "all";
  }

  function setComposerFieldFilterMode(item, mode) {
    if (!item?.key) {
      return;
    }
    if (!["all", "remaining", "autofill", "manual"].includes(mode) || mode === "all") {
      delete state.composerFieldFilterByKey[item.key];
      return;
    }
    state.composerFieldFilterByKey[item.key] = mode;
  }

  function projectProfileHasContent() {
    return projectProfileFields().some((field) => normalizeText(state.projectProfile[field.key] ?? ""));
  }

  function projectProfileSummaryText() {
    const name = normalizeText(state.projectProfile.project_name);
    const status = normalizeText(state.projectProfile.current_status);
    const platforms = normalizeText(state.projectProfile.target_platforms);
    const pitch = normalizeText(state.projectProfile.core_pitch);

    if (!name && !status && !platforms && !pitch) {
      return "No project profile saved yet.";
    }

    const parts = [];
    if (name) {
      parts.push(name);
    }
    if (status) {
      parts.push(status);
    }
    if (platforms) {
      parts.push(platforms);
    }
    return `${parts.join(" | ")}${pitch ? ` | ${pitch}` : ""}`;
  }

  function missingProjectProfileFields() {
    return projectProfileFields().filter((field) => !normalizeText(state.projectProfile[field.key] ?? ""));
  }

  function projectProfileValues() {
    return {
      project_name: normalizeText(state.projectProfile.project_name),
      core_pitch: normalizeText(state.projectProfile.core_pitch),
      target_platforms: normalizeText(state.projectProfile.target_platforms),
      target_players: normalizeText(state.projectProfile.target_players),
      current_status: normalizeText(state.projectProfile.current_status)
    };
  }

  function joinSuggestionParts(parts, separator = " ") {
    return [...new Set(parts.map((part) => normalizeText(part)).filter(Boolean))].join(separator).trim();
  }

  function projectProfileSuggestionForSpec(spec) {
    const label = String(spec?.label ?? "").toLowerCase();
    const profile = projectProfileValues();
    const namePitch = joinSuggestionParts(
      [profile.project_name && `${profile.project_name}`, profile.core_pitch && `${profile.core_pitch}`],
      ": "
    );

    if (!label) {
      return "";
    }
    if (label.includes("one-sentence pitch") || label.includes("project identity")) {
      return namePitch || profile.core_pitch || profile.project_name;
    }
    if (label.includes("core fantasy") || label.includes("hook") || label.includes("world premise")) {
      return joinSuggestionParts([namePitch, profile.target_players && `Target players: ${profile.target_players}`], " | ");
    }
    if (label.includes("target players") || label.includes("audience") || label.includes("market")) {
      return joinSuggestionParts(
        [
          profile.target_players && `Target players: ${profile.target_players}`,
          profile.target_platforms && `Platforms: ${profile.target_platforms}`
        ],
        " | "
      );
    }
    if (label.includes("player")) {
      return joinSuggestionParts(
        [profile.target_players && `Target players: ${profile.target_players}`, namePitch],
        " | "
      );
    }
    if (label.includes("platform") || label.includes("release window")) {
      return joinSuggestionParts(
        [
          profile.target_platforms && `Platforms: ${profile.target_platforms}`,
          profile.current_status && `Current status: ${profile.current_status}`
        ],
        " | "
      );
    }
    if (label.includes("status") || label.includes("build") || label.includes("branch") || label.includes("quality")) {
      return profile.current_status;
    }
    if (label.includes("fantasy") || label.includes("identity")) {
      return namePitch;
    }
    return "";
  }

  function projectProfileSuggestionCounts(item, onlyEmpty = false) {
    const values = promptInputStore(item);
    const specs = promptFieldSpecs(item);
    let matched = 0;
    for (const spec of specs) {
      if (!projectProfileSuggestionForSpec(spec)) {
        continue;
      }
      if (onlyEmpty && normalizeText(values[spec.key] ?? "")) {
        continue;
      }
      matched += 1;
    }
    return matched;
  }

  function coverageDetail(item) {
    const missing = [];
    const autoFillable = [];
    const manual = [];

    for (const spec of missingPromptFieldSpecs(item)) {
      const suggestion = projectProfileSuggestionForSpec(spec);
      const entry = {
        ...spec,
        suggestion
      };
      missing.push(entry);
      if (suggestion) {
        autoFillable.push(entry);
      } else {
        manual.push(entry);
      }
    }

    return {
      missing,
      autoFillable,
      manual
    };
  }

  function exportedProjectProfile() {
    const entries = projectProfileFields()
      .map((field) => ({
        key: field.key,
        label: field.label,
        value: normalizeText(state.projectProfile[field.key] ?? "")
      }))
      .filter((entry) => entry.value);

    return {
      has_content: entries.length > 0,
      values: Object.fromEntries(entries.map((entry) => [entry.key, entry.value])),
      entries
    };
  }

  function importProjectProfilePayload(payload) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return 0;
    }
    const touchedKeys = new Set();
    const nextProfile = emptyProjectProfile();
    for (const field of projectProfileFields()) {
      nextProfile[field.key] = state.projectProfile[field.key] ?? "";
    }

    const assignValue = (rawKey, rawValue) => {
      const value = normalizeText(rawValue);
      if (!value) {
        return;
      }
      const keyText = String(rawKey ?? "");
      const field = projectProfileFields().find(
        (candidate) => candidate.key === keyText || candidate.label.toLowerCase() === keyText.toLowerCase()
      );
      if (!field) {
        return;
      }
      nextProfile[field.key] = value;
      touchedKeys.add(field.key);
    };

    for (const [key, value] of Object.entries(payload.values ?? {})) {
      assignValue(key, value);
    }
    for (const entry of payload.entries ?? []) {
      if (!entry || typeof entry !== "object") {
        continue;
      }
      assignValue(entry.key ?? entry.label, entry.value);
    }

    if (touchedKeys.size > 0) {
      state.projectProfile = nextProfile;
      persistProjectProfile();
    }
    return touchedKeys.size;
  }

  function saveProjectProfileValue(key, value) {
    state.projectProfile[key] = value;
    persistProjectProfile();
    refreshProjectProfileDependents();
  }

  function clearProjectProfile() {
    if (!window.confirm("Clear the saved project profile in this browser?")) {
      return;
    }
    state.projectProfile = emptyProjectProfile();
    persistProjectProfile();
    refreshProjectProfileDependents();
    showCopyFeedback("Project profile cleared.");
  }

  function applyProjectProfileToItem(item, overwrite = false) {
    if (!projectProfileHasContent()) {
      return 0;
    }
    let applied = 0;
    for (const spec of promptFieldSpecs(item)) {
      const suggestion = projectProfileSuggestionForSpec(spec);
      if (!suggestion) {
        continue;
      }
      const existing = normalizeText(promptInputStore(item)[spec.key] ?? "");
      if (existing && !overwrite) {
        continue;
      }
      savePromptInputValue(item, spec.key, suggestion);
      applied += 1;
    }
    return applied;
  }

  function projectProfileAutoFillStats() {
    return useCaseItems().reduce(
      (summary, item) => {
        const count = projectProfileSuggestionCounts(item, true);
        summary.totalMatches += count;
        if (count > 0) {
          summary.packsWithMatches += 1;
        }
        return summary;
      },
      { totalMatches: 0, packsWithMatches: 0 }
    );
  }

  function applyProjectProfileToAllItems(overwrite = false) {
    return applyProjectProfileToItems(useCaseItems(), overwrite);
  }

  function applyProjectProfileToItems(items, overwrite = false) {
    let appliedFields = 0;
    let changedPacks = 0;
    for (const item of items) {
      const applied = applyProjectProfileToItem(item, overwrite);
      if (applied > 0) {
        appliedFields += applied;
        changedPacks += 1;
      }
    }
    return {
      appliedFields,
      changedPacks
    };
  }

  function fileSlug(value, fallback = "context") {
    const slug = String(value ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug || fallback;
  }

  function exportedPromptContext(item) {
    const values = promptInputStore(item);
    const entries = promptFieldSpecs(item)
      .map((spec) => ({
        key: spec.key,
        label: spec.label,
        value: normalizeText(values[spec.key] ?? "")
      }))
      .filter((entry) => entry.value);

    return {
      schema_version: 1,
      exported_at: new Date().toISOString(),
      pack_key: item.key,
      pack_id: item.id,
      pack_title: item.title,
      values: Object.fromEntries(entries.map((entry) => [entry.key, entry.value])),
      entries
    };
  }

  function downloadJsonFile(filename, data) {
    const blob = new Blob([`${JSON.stringify(data, null, 2)}\n`], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => window.URL.revokeObjectURL(url), 0);
  }

  function downloadTextFile(filename, data, contentType = "text/plain") {
    const blob = new Blob([data], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => window.URL.revokeObjectURL(url), 0);
  }

  async function pickJsonFile() {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "application/json,.json";
      input.style.position = "fixed";
      input.style.left = "-9999px";
      input.addEventListener(
        "change",
        () => {
          const file = input.files?.[0] ?? null;
          input.remove();
          resolve(file);
        },
        { once: true }
      );
      document.body.append(input);
      input.click();
    });
  }

  function importPromptContextPayload(item, payload) {
    const parsed = JSON.parse(payload);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Invalid JSON structure.");
    }

    const specs = promptFieldSpecs(item);
    const allowedKeys = new Set(specs.map((spec) => spec.key));
    const labelToKey = new Map(specs.map((spec) => [spec.label.toLowerCase(), spec.key]));
    const imported = Object.create(null);

    const assignValue = (rawKey, rawValue) => {
      const value = normalizeText(rawValue);
      if (!value) {
        return;
      }
      const keyText = String(rawKey ?? "");
      const directKey = allowedKeys.has(keyText) ? keyText : "";
      const labeledKey = labelToKey.get(keyText.toLowerCase()) ?? "";
      const resolvedKey = directKey || labeledKey;
      if (resolvedKey) {
        imported[resolvedKey] = value;
      }
    };

    for (const [rawKey, rawValue] of Object.entries(parsed.values ?? {})) {
      assignValue(rawKey, rawValue);
    }

    for (const entry of parsed.entries ?? []) {
      if (!entry || typeof entry !== "object") {
        continue;
      }
      assignValue(entry.key ?? entry.label, entry.value);
    }

    if (Object.keys(imported).length === 0) {
      throw new Error("No matching context fields were found in this file.");
    }

    state.promptInputs[item.key] = imported;
    persistPromptInputs();
    return Object.keys(imported).length;
  }

  async function exportPromptContext(item) {
    const data = exportedPromptContext(item);
    downloadJsonFile(`${fileSlug(item.title, item.id || "pack")}-context.json`, data);
    showCopyFeedback("Context JSON exported.");
  }

  async function importPromptContext(item) {
    try {
      const file = await pickJsonFile();
      if (!file) {
        return;
      }
      const payload = await file.text();
      const importedCount = importPromptContextPayload(item, payload);
      showCopyFeedback(`Imported ${importedCount} context field${importedCount === 1 ? "" : "s"}.`);
      render();
    } catch (error) {
      showCopyFeedback(error?.message || "Could not import context JSON.", true);
    }
  }

  function useCaseItems() {
    return (data.packs ?? [])
      .filter((pack) => pack.type === "use_case_pack")
      .map((pack) => itemMap.get(pack.key))
      .filter(Boolean);
  }

  function contextWorkspaceStats() {
    const packs = useCaseItems();
    return packs.reduce(
      (summary, item) => {
        const counts = promptFieldCounts(item);
        summary.totalPacks += 1;
        summary.totalFields += counts.total;
        summary.filledFields += counts.filled;
        if (counts.filled > 0) {
          summary.startedPacks += 1;
        }
        if (counts.total > 0 && counts.filled === counts.total) {
          summary.readyPacks += 1;
        }
        return summary;
      },
      { totalPacks: 0, startedPacks: 0, readyPacks: 0, totalFields: 0, filledFields: 0 }
    );
  }

  function startedUseCaseItems() {
    return useCaseItems().filter((item) => promptFieldCounts(item).filled > 0);
  }

  function readyUseCaseItems() {
    return useCaseItems().filter((item) => promptIsReady(item));
  }

  function autoFillableScopeItems(items = selectedBundleItems()) {
    return items.filter((item) => coverageDetail(item).autoFillable.length > 0);
  }

  function manualGapScopeItems(items = selectedBundleItems()) {
    return items.filter((item) => coverageDetail(item).manual.length > 0);
  }

  function blockerQueueItems() {
    const checkedManualItems = checkedBundleItems().filter((item) => coverageDetail(item).manual.length > 0);
    if (checkedManualItems.length > 0) {
      return checkedManualItems;
    }
    return manualGapScopeItems(selectedBundleItems());
  }

  function blockerQueuePosition(items = blockerQueueItems()) {
    const index = items.findIndex((item) => item.key === state.selectedKey);
    return {
      index,
      total: items.length
    };
  }

  function blockerQueueContextForItem(item, items = blockerQueueItems()) {
    const detail = coverageDetail(item);
    const index = items.findIndex((candidate) => candidate.key === item?.key);
    return {
      items,
      index,
      total: items.length,
      manualGapCount: detail.manual.length,
      isInQueue: index >= 0
    };
  }

  function firstManualGapSpec(item) {
    return coverageDetail(item).manual[0] ?? null;
  }

  function nextManualGapSpec(item, currentFieldKey = "") {
    const manualSpecs = coverageDetail(item).manual;
    if (manualSpecs.length === 0) {
      return null;
    }
    const index = manualSpecs.findIndex((spec) => spec.key === currentFieldKey);
    if (index < 0) {
      return manualSpecs[0];
    }
    return manualSpecs[(index + 1) % manualSpecs.length];
  }

  function previousManualGapSpec(item, currentFieldKey = "") {
    const manualSpecs = coverageDetail(item).manual;
    if (manualSpecs.length === 0) {
      return null;
    }
    const index = manualSpecs.findIndex((spec) => spec.key === currentFieldKey);
    if (index < 0) {
      return manualSpecs[manualSpecs.length - 1];
    }
    return manualSpecs[(index - 1 + manualSpecs.length) % manualSpecs.length];
  }

  function manualGapSpecForField(item, fieldKey = "") {
    if (!fieldKey) {
      return null;
    }
    return coverageDetail(item).manual.find((spec) => spec.key === fieldKey) ?? null;
  }

  function checkedBundleItems() {
    const checked = new Set(state.bundleCheckedKeys);
    return useCaseItems().filter((item) => checked.has(item.key));
  }

  function setBundleCheckedKeysFromItems(items) {
    state.bundleCheckedKeys = [...new Set(items.map((item) => item?.key).filter(Boolean))];
    persistBundleCheckedKeys();
  }

  function clearBundleCheckedKeys() {
    state.bundleCheckedKeys = [];
    persistBundleCheckedKeys();
  }

  function isBundleChecked(item) {
    return state.bundleCheckedKeys.includes(item?.key);
  }

  function toggleBundleChecked(item) {
    if (!item?.key) {
      return;
    }
    if (isBundleChecked(item)) {
      state.bundleCheckedKeys = state.bundleCheckedKeys.filter((key) => key !== item.key);
    } else {
      state.bundleCheckedKeys = [...state.bundleCheckedKeys, item.key];
    }
    persistBundleCheckedKeys();
  }

  function bundleScopeLabel(scope = state.bundleScope) {
    const labels = {
      started: "Started packs",
      ready: "Ready packs only",
      all: "All use-case packs",
      checked: "Checked packs",
      selected: "Selected pack only"
    };
    return labels[scope] ?? labels.started;
  }

  function clearPackVisibilityFilters() {
    state.search = "";
    state.phaseGroup = "";
    state.deliverable = "";
    state.resourceKind = "";
    state.cardKind = "";
    state.availability = "";
    state.sourceId = "";
    state.localOnly = false;
    state.pendingOnly = false;
  }

  function queueComposerFocus(itemKey, fieldKey = "") {
    if (!itemKey) {
      state.pendingComposerFocus = null;
      return;
    }
    state.pendingComposerFocus = {
      itemKey,
      fieldKey: fieldKey || ""
    };
  }

  function openUseCasePackDirect(itemKey, options = {}) {
    clearPackVisibilityFilters();
    if (options.focusFirstManualGap) {
      const targetItem = itemMap.get(itemKey);
      queueComposerFocus(itemKey, firstManualGapSpec(targetItem)?.key || "");
    } else {
      queueComposerFocus("", "");
    }
    activateStartHereMode(itemKey);
  }

  function navigateBlocker(direction = 1) {
    const queue = blockerQueueItems();
    if (queue.length === 0) {
      showCopyFeedback("No blocker pack is available in the current workflow.", true);
      return;
    }
    const { index } = blockerQueuePosition(queue);
    let nextIndex = 0;
    if (index >= 0) {
      nextIndex = (index + direction + queue.length) % queue.length;
    } else if (direction < 0) {
      nextIndex = queue.length - 1;
    }
    const target = queue[nextIndex];
    openUseCasePackDirect(target.key, { focusFirstManualGap: true });
    showCopyFeedback(`Opened blocker ${nextIndex + 1} / ${queue.length}: ${target.title}.`);
    render();
  }

  function blockerQueueStatusText(item, context = blockerQueueContextForItem(item)) {
    if (!isUseCasePack(item)) {
      return "";
    }
    if (context.total === 0) {
      if (context.manualGapCount > 0) {
        return `This pack still has ${context.manualGapCount} manual gap${context.manualGapCount === 1 ? "" : "s"}, but no blocker queue is active.`;
      }
      return "No blocker queue is active for the current workflow.";
    }
    if (context.isInQueue) {
      return `Blocker queue ${context.index + 1} / ${context.total}. This pack still has ${context.manualGapCount} manual gap${context.manualGapCount === 1 ? "" : "s"}.`;
    }
    if (context.manualGapCount > 0) {
      return `This pack still has ${context.manualGapCount} manual gap${context.manualGapCount === 1 ? "" : "s"}, but it is outside the active blocker queue.`;
    }
    return `This pack is clear. ${context.total} blocker pack${context.total === 1 ? "" : "s"} remain in the active queue.`;
  }

  function resolveCurrentBlockerAndOpenNext(item) {
    if (!isUseCasePack(item)) {
      showCopyFeedback("Current item is not a use-case pack.", true);
      return;
    }

    const currentQueue = blockerQueueItems();
    const currentContext = blockerQueueContextForItem(item, currentQueue);
    if (!currentContext.isInQueue) {
      showCopyFeedback("Current pack is not part of the active blocker queue.", true);
      return;
    }
    if (currentContext.manualGapCount > 0) {
      showCopyFeedback(
        `Current pack still has ${currentContext.manualGapCount} manual gap${currentContext.manualGapCount === 1 ? "" : "s"}.`,
        true
      );
      return;
    }

    if (isBundleChecked(item)) {
      state.bundleCheckedKeys = state.bundleCheckedKeys.filter((key) => key !== item.key);
      persistBundleCheckedKeys();
    }

    const nextQueue = blockerQueueItems();
    if (nextQueue.length === 0) {
      showCopyFeedback("Current blocker resolved. No remaining blocker pack in queue.");
      render();
      return;
    }

    const nextIndex = Math.min(currentContext.index, nextQueue.length - 1);
    const target = nextQueue[nextIndex];
    openUseCasePackDirect(target.key, { focusFirstManualGap: true });
    showCopyFeedback(`Current blocker resolved. Opened next blocker ${nextIndex + 1} / ${nextQueue.length}: ${target.title}.`);
    render();
  }

  function selectedBundleItems() {
    if (state.bundleScope === "all") {
      return useCaseItems();
    }
    if (state.bundleScope === "ready") {
      return readyUseCaseItems();
    }
    if (state.bundleScope === "checked") {
      return checkedBundleItems();
    }
    if (state.bundleScope === "selected") {
      const selectedItem = itemMap.get(state.selectedKey);
      if (selectedItem?.entity_type === "pack" && selectedItem.pack_type === "use_case_pack") {
        return [selectedItem];
      }
      return [];
    }
    return startedUseCaseItems();
  }

  function exportedPromptWorkspace() {
    const packs = useCaseItems().map(exportedPromptContext).filter((pack) => Object.keys(pack.values ?? {}).length > 0);
    return {
      schema_version: 1,
      exported_at: new Date().toISOString(),
      type: "prompt_context_workspace",
      stats: contextWorkspaceStats(),
      project_profile: exportedProjectProfile(),
      packs
    };
  }

  function importPromptWorkspacePayload(payload) {
    const parsed = JSON.parse(payload);
    const workspaceItems = useCaseItems();
    const packByKey = new Map(workspaceItems.map((item) => [item.key, item]));
    const packById = new Map(workspaceItems.map((item) => [item.id, item]));

    const packPayloads = [];
    let importedProfileFields = 0;
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      importedProfileFields = importProjectProfilePayload(parsed.project_profile ?? {});
      if (Array.isArray(parsed.packs)) {
        packPayloads.push(...parsed.packs);
      } else if (parsed.pack_key || parsed.pack_id || parsed.values || parsed.entries) {
        packPayloads.push(parsed);
      }
    }

    if (packPayloads.length === 0) {
      if (importedProfileFields > 0) {
        return {
          matchedPacks: 0,
          importedFields: 0,
          importedProfileFields
        };
      }
      throw new Error("No importable pack contexts were found in this JSON file.");
    }

    let matchedPacks = 0;
    let importedFields = 0;

    for (const packPayload of packPayloads) {
      if (!packPayload || typeof packPayload !== "object" || Array.isArray(packPayload)) {
        continue;
      }
      const target =
        packByKey.get(String(packPayload.pack_key ?? "")) ??
        packById.get(String(packPayload.pack_id ?? ""));
      if (!target) {
        continue;
      }
      importedFields += importPromptContextPayload(target, JSON.stringify(packPayload));
      matchedPacks += 1;
    }

    if (matchedPacks === 0) {
      throw new Error("The JSON file did not match any use-case packs in this portal.");
    }

    return {
      matchedPacks,
      importedFields,
      importedProfileFields
    };
  }

  async function exportAllPromptContexts() {
    const data = exportedPromptWorkspace();
    downloadJsonFile("game-design-kb-context-workspace.json", data);
    showCopyFeedback("Workspace context JSON exported.");
  }

  async function importAllPromptContexts() {
    try {
      const file = await pickJsonFile();
      if (!file) {
        return;
      }
      const payload = await file.text();
      const result = importPromptWorkspacePayload(payload);
      const parts = [];
      if (result.importedProfileFields > 0) {
        parts.push(
          `project profile (${result.importedProfileFields} field${result.importedProfileFields === 1 ? "" : "s"})`
        );
      }
      if (result.matchedPacks > 0) {
        parts.push(
          `${result.importedFields} pack field${result.importedFields === 1 ? "" : "s"} across ${result.matchedPacks} pack${result.matchedPacks === 1 ? "" : "s"}`
        );
      }
      showCopyFeedback(`Imported ${parts.join(" and ")}.`);
      render();
    } catch (error) {
      showCopyFeedback(error?.message || "Could not import workspace context JSON.", true);
    }
  }

  function clearAllPromptContexts() {
    if (!window.confirm("Clear all saved prompt context for every use-case pack in this browser?")) {
      return;
    }
    state.promptInputs = Object.create(null);
    persistPromptInputs();
    showCopyFeedback("All saved prompt context cleared.");
    render();
  }

  function packReadinessLabel(item) {
    const counts = promptFieldCounts(item);
    if (counts.total === 0) {
      return "No fields";
    }
    if (counts.filled === 0) {
      return "Not started";
    }
    if (counts.filled === counts.total) {
      return "Ready";
    }
    return "In progress";
  }

  function coverageStats(items = selectedBundleItems()) {
    return items.reduce(
      (summary, item) => {
        const counts = promptFieldCounts(item);
        const detail = coverageDetail(item);
        summary.totalPacks += 1;
        summary.totalFields += counts.total;
        summary.filledFields += counts.filled;
        summary.missingFields += detail.missing.length;
        summary.autoFillableFields += detail.autoFillable.length;
        summary.manualFields += detail.manual.length;
        if (counts.filled > 0) {
          summary.startedPacks += 1;
        }
        if (promptIsReady(item)) {
          summary.readyPacks += 1;
        }
        return summary;
      },
      {
        totalPacks: 0,
        startedPacks: 0,
        readyPacks: 0,
        totalFields: 0,
        filledFields: 0,
        missingFields: 0,
        autoFillableFields: 0,
        manualFields: 0
      }
    );
  }

  function workspaceBriefMarkdown() {
    const stats = contextWorkspaceStats();
    const lines = [
      "# Game Design Context Workspace Brief",
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "## Summary",
      "",
      `- Packs started: ${stats.startedPacks} / ${stats.totalPacks}`,
      `- Packs ready: ${stats.readyPacks}`,
      `- Context fields saved: ${stats.filledFields} / ${stats.totalFields}`,
      ""
    ];

    lines.push("## Project Profile");
    lines.push("");
    if (!projectProfileHasContent()) {
      lines.push("_No global project profile saved._");
      lines.push("");
    } else {
      for (const field of projectProfileFields()) {
        const value = normalizeText(state.projectProfile[field.key] ?? "");
        if (!value) {
          continue;
        }
        lines.push(`- ${field.label}: ${value}`);
      }
      lines.push("");
    }

    for (const item of useCaseItems()) {
      const specs = promptFieldSpecs(item);
      const values = promptInputStore(item);
      const filledSpecs = specs.filter((spec) => normalizeText(values[spec.key] ?? ""));

      lines.push(`## ${item.title}`);
      lines.push("");
      lines.push(`- Status: ${packReadinessLabel(item)}`);
      lines.push(`- Progress: ${promptProgressText(item)}`);
      lines.push(`- When to use: ${item.when_to_use || item.summary || "N/A"}`);
      lines.push("");

      if (filledSpecs.length === 0) {
        lines.push("_No saved context yet._");
        lines.push("");
        continue;
      }

      for (const spec of filledSpecs) {
        lines.push(`- ${spec.label}: ${normalizeText(values[spec.key])}`);
      }
      lines.push("");
    }

    return `${lines.join("\n").trim()}\n`;
  }

  function workspaceCoverageReportMarkdown() {
    const bundleItems = selectedBundleItems();
    const stats = coverageStats(bundleItems);
    const missingProfile = missingProjectProfileFields();
    const lines = [
      "# Game Design Workspace Coverage Report",
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "## Scope",
      "",
      `- Bundle scope: ${bundleScopeLabel()}`,
      `- Included packs: ${bundleItems.length}`,
      `- Started packs in scope: ${stats.startedPacks} / ${stats.totalPacks}`,
      `- Ready packs in scope: ${stats.readyPacks} / ${stats.totalPacks}`,
      `- Context coverage: ${stats.filledFields} / ${stats.totalFields} fields filled`,
      `- Missing fields: ${stats.missingFields}`,
      `- Auto-fillable from Project Profile: ${stats.autoFillableFields}`,
      `- Manual input required: ${stats.manualFields}`,
      ""
    ];

    lines.push("## Project Profile");
    lines.push("");
    if (!projectProfileHasContent()) {
      lines.push("_No global project profile saved._");
      lines.push("");
    } else {
      for (const field of projectProfileFields()) {
        const value = normalizeText(state.projectProfile[field.key] ?? "");
        if (!value) {
          continue;
        }
        lines.push(`- ${field.label}: ${value}`);
      }
      lines.push("");
    }

    lines.push("### Missing Project Profile Fields");
    lines.push("");
    if (missingProfile.length === 0) {
      lines.push("_None._");
    } else {
      for (const field of missingProfile) {
        lines.push(`- ${field.label}`);
      }
    }
    lines.push("");

    if (bundleItems.length === 0) {
      lines.push("## Included Packs");
      lines.push("");
      lines.push("_No pack matches the current bundle scope._");
      lines.push("");
      return `${lines.join("\n").trim()}\n`;
    }

    for (const item of bundleItems) {
      const detail = coverageDetail(item);
      lines.push(`## ${item.title}`);
      lines.push("");
      lines.push(`- Status: ${packReadinessLabel(item)}`);
      lines.push(`- Progress: ${promptProgressText(item)}`);
      lines.push(`- Missing fields: ${detail.missing.length}`);
      lines.push(`- Auto-fillable: ${detail.autoFillable.length}`);
      lines.push(`- Manual input required: ${detail.manual.length}`);
      lines.push("");

      if (detail.missing.length === 0) {
        lines.push("_Coverage complete for this pack._");
        lines.push("");
        continue;
      }

      if (detail.autoFillable.length > 0) {
        lines.push("### Auto-fillable from Project Profile");
        lines.push("");
        for (const spec of detail.autoFillable) {
          lines.push(`- ${spec.label}: ${spec.suggestion}`);
        }
        lines.push("");
      }

      if (detail.manual.length > 0) {
        lines.push("### Manual Input Still Required");
        lines.push("");
        for (const spec of detail.manual) {
          lines.push(`- ${spec.label}`);
        }
        lines.push("");
      }
    }

    return `${lines.join("\n").trim()}\n`;
  }

  function workspacePromptBundleMarkdown() {
    const stats = contextWorkspaceStats();
    const bundleItems = selectedBundleItems();
    const lines = [
      "# Game Design Workspace Prompt Bundle",
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "## Summary",
      "",
      `- Bundle scope: ${bundleScopeLabel()}`,
      `- Started packs: ${stats.startedPacks} / ${stats.totalPacks}`,
      `- Ready packs: ${stats.readyPacks}`,
      `- Context fields saved: ${stats.filledFields} / ${stats.totalFields}`,
      ""
    ];

    lines.push("## Project Profile");
    lines.push("");
    if (!projectProfileHasContent()) {
      lines.push("_No global project profile saved._");
      lines.push("");
    } else {
      for (const field of projectProfileFields()) {
        const value = normalizeText(state.projectProfile[field.key] ?? "");
        if (!value) {
          continue;
        }
        lines.push(`- ${field.label}: ${value}`);
      }
      lines.push("");
    }

    lines.push("## Included Packs");
    lines.push("");
    if (bundleItems.length === 0) {
      lines.push("_No pack matches the current bundle scope._");
      lines.push("");
      return `${lines.join("\n").trim()}\n`;
    }

    for (const item of bundleItems) {
      lines.push(`- ${item.title} (${promptProgressText(item)})`);
    }
    lines.push("");

    for (const item of bundleItems) {
      const block = getContentBlock(item);
      lines.push(`## ${item.title}`);
      lines.push("");
      lines.push(`- Status: ${packReadinessLabel(item)}`);
      lines.push(`- Progress: ${promptProgressText(item)}`);
      lines.push(`- When to use: ${item.when_to_use || item.summary || "N/A"}`);
      lines.push("");
      lines.push("```text");
      lines.push(composeStarterPrompt(item, block) || "");
      lines.push("```");
      lines.push("");
    }

    return `${lines.join("\n").trim()}\n`;
  }

  async function copyWorkspacePromptBundle() {
    await copyText(workspacePromptBundleMarkdown(), "Workspace prompt bundle");
  }

  async function exportWorkspacePromptBundle() {
    downloadTextFile("game-design-kb-workspace-prompt-bundle.md", workspacePromptBundleMarkdown(), "text/markdown");
    showCopyFeedback("Workspace prompt bundle exported.");
  }

  async function copyWorkspaceBrief() {
    await copyText(workspaceBriefMarkdown(), "Workspace brief");
  }

  async function exportWorkspaceBrief() {
    downloadTextFile("game-design-kb-context-workspace.md", workspaceBriefMarkdown(), "text/markdown");
    showCopyFeedback("Workspace brief exported.");
  }

  function blockerQueueBriefText() {
    const queue = blockerQueueItems();
    const lines = [
      "# Game Design Blocker Queue Brief",
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "## Queue Summary",
      "",
      `- Source: ${checkedBundleItems().filter((item) => coverageDetail(item).manual.length > 0).length > 0 ? "Checked packs with manual gaps" : `${bundleScopeLabel()} with manual gaps`}`,
      `- Blocker packs: ${queue.length}`,
      `- Current selection: ${itemMap.get(state.selectedKey)?.title || "None"}`,
      ""
    ];

    lines.push("## Project Profile");
    lines.push("");
    if (!projectProfileHasContent()) {
      lines.push("_No project profile saved._");
    } else {
      for (const field of projectProfileFields()) {
        const value = normalizeText(state.projectProfile[field.key] ?? "");
        if (!value) {
          continue;
        }
        lines.push(`- ${field.label}: ${value}`);
      }
    }
    lines.push("");

    if (queue.length === 0) {
      lines.push("## Blockers");
      lines.push("");
      lines.push("_No blocker pack is active in the current workflow._");
      lines.push("");
      return `${lines.join("\n").trim()}\n`;
    }

    lines.push("## Queue Order");
    lines.push("");
    for (const [index, item] of queue.entries()) {
      const detail = coverageDetail(item);
      lines.push(`- ${index + 1}. ${item.title} (${detail.manual.length} manual gap${detail.manual.length === 1 ? "" : "s"})`);
    }
    lines.push("");

    for (const [index, item] of queue.entries()) {
      const detail = coverageDetail(item);
      const values = promptInputStore(item);
      const filledSpecs = promptFieldSpecs(item).filter((spec) => normalizeText(values[spec.key] ?? ""));

      lines.push(`## ${index + 1}. ${item.title}`);
      lines.push("");
      lines.push(`- Status: ${packReadinessLabel(item)}`);
      lines.push(`- Progress: ${promptProgressText(item)}`);
      lines.push(`- Blocker status: ${blockerQueueStatusText(item, blockerQueueContextForItem(item, queue))}`);
      lines.push(`- When to use: ${item.when_to_use || item.summary || "N/A"}`);
      lines.push("");

      lines.push("### Known Context");
      lines.push("");
      if (filledSpecs.length === 0) {
        lines.push("_No pack-specific context saved yet._");
      } else {
        for (const spec of filledSpecs) {
          lines.push(`- ${spec.label}: ${normalizeText(values[spec.key])}`);
        }
      }
      lines.push("");

      lines.push("### Auto-fill Available");
      lines.push("");
      if (detail.autoFillable.length === 0) {
        lines.push("_No remaining auto-fill suggestions._");
      } else {
        for (const spec of detail.autoFillable) {
          lines.push(`- ${spec.label}: ${normalizeText(spec.suggestion)}`);
        }
      }
      lines.push("");

      lines.push("### Manual Gaps");
      lines.push("");
      if (detail.manual.length === 0) {
        lines.push("_No manual gaps remain for this pack._");
      } else {
        for (const spec of detail.manual) {
          lines.push(`- ${spec.label}: {{${spec.key}}}`);
        }
      }
      lines.push("");
    }

    return `${lines.join("\n").trim()}\n`;
  }

  async function copyBlockerQueueBrief() {
    await copyText(blockerQueueBriefText(), "Blocker queue brief");
  }

  async function exportBlockerQueueBrief() {
    downloadTextFile("game-design-kb-blocker-queue-brief.md", blockerQueueBriefText(), "text/markdown");
    showCopyFeedback("Blocker queue brief exported.");
  }

  async function copyCoverageReport() {
    await copyText(workspaceCoverageReportMarkdown(), "Coverage report");
  }

  async function exportCoverageReport() {
    downloadTextFile("game-design-kb-coverage-report.md", workspaceCoverageReportMarkdown(), "text/markdown");
    showCopyFeedback("Coverage report exported.");
  }

  function manualGapBriefText(item) {
    const detail = coverageDetail(item);
    const values = promptInputStore(item);
    const filledSpecs = promptFieldSpecs(item).filter((spec) => normalizeText(values[spec.key] ?? ""));
    const lines = [
      `# ${item.title} Manual Gap Brief`,
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      `- Status: ${packReadinessLabel(item)}`,
      `- Progress: ${promptProgressText(item)}`,
      `- Blocker status: ${blockerQueueStatusText(item)}`,
      `- When to use: ${item.when_to_use || item.summary || "N/A"}`,
      ""
    ];

    lines.push("## Project Profile");
    lines.push("");
    if (!projectProfileHasContent()) {
      lines.push("_No project profile saved._");
    } else {
      for (const field of projectProfileFields()) {
        const value = normalizeText(state.projectProfile[field.key] ?? "");
        if (!value) {
          continue;
        }
        lines.push(`- ${field.label}: ${value}`);
      }
    }
    lines.push("");

    lines.push("## Known Context");
    lines.push("");
    if (filledSpecs.length === 0) {
      lines.push("_No pack-specific context saved yet._");
    } else {
      for (const spec of filledSpecs) {
        lines.push(`- ${spec.label}: ${normalizeText(values[spec.key])}`);
      }
    }
    lines.push("");

    lines.push("## Auto-fill Available");
    lines.push("");
    if (detail.autoFillable.length === 0) {
      lines.push("_No remaining auto-fill suggestions._");
    } else {
      for (const spec of detail.autoFillable) {
        lines.push(`- ${spec.label}: ${normalizeText(spec.suggestion)}`);
      }
    }
    lines.push("");

    lines.push("## Manual Gaps");
    lines.push("");
    if (detail.manual.length === 0) {
      lines.push("_No manual gaps remain for this pack._");
    } else {
      for (const spec of detail.manual) {
        lines.push(`- ${spec.label}: {{${spec.key}}}`);
      }
    }
    lines.push("");

    return `${lines.join("\n").trim()}\n`;
  }

  function resolveCurrentScopeBlockers() {
    const scopeItems = selectedBundleItems();
    if (scopeItems.length === 0) {
      showCopyFeedback("No pack matches the current bundle scope.", true);
      return;
    }

    const before = coverageStats(scopeItems);
    const applyResult = projectProfileHasContent()
      ? applyProjectProfileToItems(scopeItems, false)
      : { appliedFields: 0, changedPacks: 0 };
    const remainingManualItems = manualGapScopeItems(scopeItems);

    if (remainingManualItems.length > 0) {
      setBundleCheckedKeysFromItems(remainingManualItems);
      state.bundleScope = "checked";
      persistBundleScope();
    }

    const parts = [];
    if (applyResult.appliedFields > 0) {
      parts.push(
        `Applied project profile to ${applyResult.appliedFields} field${applyResult.appliedFields === 1 ? "" : "s"} across ${applyResult.changedPacks} pack${applyResult.changedPacks === 1 ? "" : "s"}`
      );
    }

    if (remainingManualItems.length > 0) {
      parts.push(
        `focused ${remainingManualItems.length} remaining blocker pack${remainingManualItems.length === 1 ? "" : "s"} in checked packs`
      );
    } else if (before.missingFields === 0) {
      parts.push("current scope already had no coverage blockers");
    } else {
      parts.push("current scope has no remaining manual blockers");
    }

    showCopyFeedback(`${parts.join("; ")}.`);
    render();
  }

  function composeStarterPrompt(item, block) {
    const template = normalizeText(block?.starter_prompt_text);
    if (!template) {
      return "";
    }
    const values = promptInputStore(item);
    let output = template;
    for (const spec of promptFieldSpecs(item)) {
      const rawValue = normalizeText(values[spec.key] ?? "");
      if (!rawValue) {
        continue;
      }
      output = output.split(`{{${spec.key}}}`).join(rawValue);
    }
    return output;
  }

  function inputScaffoldText(item) {
    const values = promptInputStore(item);
    const lines = ["Project context:"];
    const specs = promptFieldSpecs(item);
    if (specs.length === 0) {
      lines.push("- Project context: {{project_context}}");
      return lines.join("\n");
    }
    for (const spec of specs) {
      const value = normalizeText(values[spec.key] ?? "") || `{{${spec.key}}}`;
      lines.push(`- ${spec.label}: ${value}`);
    }
    return lines.join("\n");
  }

  function refreshPromptProgressViews() {
    renderContextWorkspace();
    renderQuickPacks();
    if (state.mode === "start_here") {
      const filtered = sortItems((data.items ?? []).filter(matches));
      renderStarterView(filtered);
    }
  }

  function writeHash() {
    const nextHash = state.selectedKey ? `#${encodeURIComponent(state.selectedKey)}` : "";
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  }

  function syncControls() {
    els.searchInput.value = state.search;
    els.deliverableFilter.value = state.deliverable;
    els.resourceFilter.value = state.resourceKind;
    els.cardKindFilter.value = state.cardKind;
    els.packTypeFilter.value = state.packType;
    els.availabilityFilter.value = state.availability;
    els.sourceFilter.value = state.sourceId;
    els.localOnly.checked = state.localOnly;
    els.pendingOnly.checked = state.pendingOnly;
    els.sortSelect.value = state.sort;
  }

  function activateStartHereMode(selectedKey = "") {
    state.mode = "start_here";
    state.packType = "use_case_pack";
    if (selectedKey) {
      state.selectedKey = selectedKey;
    }
    syncControls();
  }

  function resetFilters() {
    state.search = "";
    state.mode = data.defaults?.mode ?? "all";
    state.phaseGroup = "";
    state.deliverable = "";
    state.resourceKind = "";
    state.cardKind = "";
    state.packType = "";
    state.availability = "";
    state.sourceId = "";
    state.localOnly = false;
    state.pendingOnly = false;
    state.sort = "phase";
    syncControls();
  }

  function populateFilters() {
    createOption(els.deliverableFilter, "", "All deliverables");
    for (const deliverable of data.taxonomy?.deliverable_types ?? []) {
      createOption(els.deliverableFilter, deliverable.id, deliverable.label);
    }

    createOption(els.resourceFilter, "", "All resource kinds");
    const resourceKinds = [...new Set((data.items ?? []).map((item) => item.resource_kind).filter(Boolean))];
    for (const resourceKind of resourceKinds) {
      const label =
        (data.taxonomy?.resource_kinds ?? []).find((item) => item.id === resourceKind)?.label ?? resourceKind;
      createOption(els.resourceFilter, resourceKind, label);
    }

    createOption(els.cardKindFilter, "", "All card kinds");
    for (const cardKind of data.taxonomy?.card_kinds ?? []) {
      createOption(els.cardKindFilter, cardKind.id, cardKind.label);
    }

    createOption(els.packTypeFilter, "", "All pack types");
    const packTypes = [...new Set((data.packs ?? []).map((pack) => pack.type).filter(Boolean))];
    for (const packType of packTypes) {
      createOption(els.packTypeFilter, packType, packTypeLabel(packType));
    }

    createOption(els.availabilityFilter, "", "All availability");
    for (const availability of data.taxonomy?.availability ?? []) {
      createOption(els.availabilityFilter, availability.id, availability.label);
    }

    createOption(els.sourceFilter, "", "All sources");
    for (const source of data.taxonomy?.sources ?? []) {
      createOption(els.sourceFilter, source.id, source.name);
    }
  }

  function renderStats() {
    const stats = [
      { label: "works", value: data.stats?.work_count ?? 0 },
      { label: "cards", value: data.stats?.card_count ?? 0 },
      { label: "packs", value: data.stats?.pack_count ?? 0 },
      { label: "use cases", value: data.stats?.use_case_pack_count ?? 0 }
    ];
    els.statsGrid.innerHTML = "";
    for (const stat of stats) {
      const card = document.createElement("div");
      card.className = "stat-card";
      const value = document.createElement("span");
      value.className = "stat-value";
      value.textContent = String(stat.value);
      const label = document.createElement("span");
      label.className = "stat-label";
      label.textContent = stat.label;
      card.append(value, label);
      els.statsGrid.append(card);
    }
  }

  function renderModes() {
    els.modeButtons.innerHTML = "";
    for (const mode of modeDefinitions) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `pill${state.mode === mode.id ? " is-active" : ""}`;
      button.textContent = mode.label;
      button.addEventListener("click", () => {
        if (mode.id === "start_here") {
          activateStartHereMode();
        } else {
          state.mode = mode.id;
        }
        render();
      });
      els.modeButtons.append(button);
    }
  }

  function renderContextWorkspace() {
    const stats = contextWorkspaceStats();
    const bundleItems = selectedBundleItems();
    const bundleCoverage = coverageStats(bundleItems);
    const checkedCount = checkedBundleItems().length;
    const blockerQueue = blockerQueueItems();
    const blockerPosition = blockerQueuePosition(blockerQueue);
    if (els.contextWorkspaceSummary) {
      const summaryParts = [
        `${stats.startedPacks} / ${stats.totalPacks} packs started`,
        `${stats.readyPacks} ready`,
        `${stats.filledFields} / ${stats.totalFields} context fields saved`,
        `checked ${checkedCount}`,
        `${bundleScopeLabel()} (${bundleItems.length})`,
        `${bundleCoverage.autoFillableFields} auto-fillable`,
        `${bundleCoverage.manualFields} manual gaps`
      ];
      if (blockerQueue.length > 0) {
        summaryParts.push(
          blockerPosition.index >= 0
            ? `blocker queue ${blockerPosition.index + 1} / ${blockerPosition.total}`
            : `blocker queue ${blockerPosition.total}`
        );
      }
      els.contextWorkspaceSummary.textContent = summaryParts.join(" | ");
    }
    if (els.bundleScope) {
      els.bundleScope.value = state.bundleScope;
    }
    if (els.checkStartedPacks) {
      els.checkStartedPacks.disabled = startedUseCaseItems().length === 0;
    }
    if (els.checkReadyPacks) {
      els.checkReadyPacks.disabled = readyUseCaseItems().length === 0;
    }
    if (els.checkAutoFillablePacks) {
      els.checkAutoFillablePacks.disabled = autoFillableScopeItems(bundleItems).length === 0;
    }
    if (els.checkManualGapPacks) {
      els.checkManualGapPacks.disabled = manualGapScopeItems(bundleItems).length === 0;
    }
    if (els.checkAllPacks) {
      els.checkAllPacks.disabled = useCaseItems().length === 0;
    }
    if (els.clearCheckedPacks) {
      els.clearCheckedPacks.disabled = checkedCount === 0;
    }
    if (els.openPreviousBlocker) {
      els.openPreviousBlocker.disabled = blockerQueue.length === 0;
    }
    if (els.openNextBlocker) {
      els.openNextBlocker.disabled = blockerQueue.length === 0;
    }
    if (els.applyProfileScope) {
      els.applyProfileScope.disabled =
        bundleItems.length === 0 || !projectProfileHasContent() || bundleCoverage.autoFillableFields === 0;
    }
    if (els.resolveScopeBlockers) {
      els.resolveScopeBlockers.disabled = bundleItems.length === 0 || bundleCoverage.missingFields === 0;
    }
    if (els.exportAllContext) {
      els.exportAllContext.disabled = stats.totalPacks === 0;
    }
    if (els.importAllContext) {
      els.importAllContext.disabled = stats.totalPacks === 0;
    }
    if (els.copyPromptBundle) {
      els.copyPromptBundle.disabled = bundleItems.length === 0;
    }
    if (els.exportPromptBundle) {
      els.exportPromptBundle.disabled = bundleItems.length === 0;
    }
    if (els.clearAllContext) {
      els.clearAllContext.disabled = stats.filledFields === 0;
    }
    if (els.copyWorkspaceBrief) {
      els.copyWorkspaceBrief.disabled = stats.totalPacks === 0;
    }
    if (els.exportWorkspaceBrief) {
      els.exportWorkspaceBrief.disabled = stats.totalPacks === 0;
    }
    if (els.copyBlockerQueueBrief) {
      els.copyBlockerQueueBrief.disabled = blockerQueue.length === 0;
    }
    if (els.exportBlockerQueueBrief) {
      els.exportBlockerQueueBrief.disabled = blockerQueue.length === 0;
    }
    if (els.copyCoverageReport) {
      els.copyCoverageReport.disabled = bundleItems.length === 0;
    }
    if (els.exportCoverageReport) {
      els.exportCoverageReport.disabled = bundleItems.length === 0;
    }
    if (els.contextWorkspaceList) {
      els.contextWorkspaceList.innerHTML = "";
      for (const item of useCaseItems()) {
        const row = document.createElement("article");
        row.className = `workspace-pack${state.selectedKey === item.key ? " is-active" : ""}`;

        const body = document.createElement("button");
        body.type = "button";
        body.className = "workspace-pack-body";
        body.addEventListener("click", () => {
          activateStartHereMode(item.key);
          render();
        });

        const head = document.createElement("div");
        head.className = "workspace-pack-head";

        const title = document.createElement("strong");
        title.textContent = item.title;
        head.append(title);

        const status = document.createElement("span");
        status.className = `workspace-pack-status${promptIsReady(item) ? " is-ready" : ""}`;
        status.textContent = packReadinessLabel(item);
        head.append(status);

        const meta = document.createElement("span");
        meta.className = "workspace-pack-meta";
        const detail = coverageDetail(item);
        const metaParts = [promptProgressText(item)];
        if (detail.autoFillable.length > 0) {
          metaParts.push(
            `${detail.autoFillable.length} auto-fillable`
          );
        }
        if (detail.manual.length > 0) {
          metaParts.push(`${detail.manual.length} manual gap${detail.manual.length === 1 ? "" : "s"}`);
        }
        meta.textContent = metaParts.join(" | ");

        body.append(head, meta);

        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = `workspace-pack-toggle${isBundleChecked(item) ? " is-active" : ""}`;
        toggle.textContent = isBundleChecked(item) ? "Included" : "Excluded";
        toggle.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleBundleChecked(item);
          renderContextWorkspace();
        });

        row.append(body, toggle);
        els.contextWorkspaceList.append(row);
      }
    }
  }

  function renderProjectProfile(syncFields = true) {
    if (els.projectProfileSummary) {
      const autoFill = projectProfileAutoFillStats();
      const base = projectProfileSummaryText();
      els.projectProfileSummary.textContent =
        autoFill.totalMatches > 0
          ? `${base} | ${autoFill.totalMatches} empty field${autoFill.totalMatches === 1 ? "" : "s"} can be auto-filled across ${autoFill.packsWithMatches} pack${autoFill.packsWithMatches === 1 ? "" : "s"}`
          : base;
    }
    if (syncFields && els.profileProjectName) {
      els.profileProjectName.value = state.projectProfile.project_name ?? "";
    }
    if (syncFields && els.profileCorePitch) {
      els.profileCorePitch.value = state.projectProfile.core_pitch ?? "";
    }
    if (syncFields && els.profileTargetPlatforms) {
      els.profileTargetPlatforms.value = state.projectProfile.target_platforms ?? "";
    }
    if (syncFields && els.profileTargetPlayers) {
      els.profileTargetPlayers.value = state.projectProfile.target_players ?? "";
    }
    if (syncFields && els.profileCurrentStatus) {
      els.profileCurrentStatus.value = state.projectProfile.current_status ?? "";
    }
    if (els.clearProjectProfile) {
      els.clearProjectProfile.disabled = !projectProfileHasContent();
    }
    if (els.applyProfileAll) {
      const autoFill = projectProfileAutoFillStats();
      els.applyProfileAll.disabled = !projectProfileHasContent() || autoFill.totalMatches === 0;
    }
  }

  function refreshProjectProfileDependents() {
    renderProjectProfile(false);
    refreshPromptProgressViews();
    const selectedItem = itemMap.get(state.selectedKey);
    if (selectedItem) {
      renderDetail(selectedItem);
    }
  }

  function renderQuickPacks() {
    const quickPacks = (data.packs ?? []).filter((pack) => pack.type === "use_case_pack").slice(0, 6);
    els.quickPackList.innerHTML = "";
    for (const pack of quickPacks) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `shortcut-button${state.selectedKey === pack.key ? " is-active" : ""}`;
      const title = document.createElement("strong");
      title.textContent = pack.title;
      const meta = document.createElement("span");
      meta.textContent = pack.when_to_use || `${pack.card_ids?.length ?? 0} cards`;
      const progress = document.createElement("span");
      progress.className = `shortcut-progress${promptIsReady(pack) ? " is-ready" : ""}`;
      progress.textContent = promptProgressText(pack);
      button.append(title, meta, progress);
      button.addEventListener("click", () => {
        activateStartHereMode(pack.key);
        render();
      });
      els.quickPackList.append(button);
    }
  }

  function renderPhaseButtons() {
    const featured = (data.taxonomy?.phase_groups ?? []).filter((phase) => phase.featured);
    const extra = (data.taxonomy?.phase_groups ?? []).filter((phase) => !phase.featured);
    const renderButtonSet = (target, items, allLabel) => {
      target.innerHTML = "";
      const allButton = document.createElement("button");
      allButton.type = "button";
      allButton.className = `phase-button${state.phaseGroup === "" ? " is-active" : ""}`;
      allButton.textContent = allLabel;
      allButton.addEventListener("click", () => {
        state.phaseGroup = "";
        render();
      });
      target.append(allButton);

      for (const phase of items) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `phase-button${state.phaseGroup === phase.id ? " is-active" : ""}`;
        button.textContent = phase.label;
        button.addEventListener("click", () => {
          state.phaseGroup = phase.id;
          render();
        });
        target.append(button);
      }
    };

    renderButtonSet(els.featuredPhases, featured, "All core phases");
    renderButtonSet(els.extraPhases, extra, "All extended phases");
  }

  function matches(item) {
    if (state.mode === "start_here") {
      if (!(item.entity_type === "pack" && item.pack_type === "use_case_pack")) {
        return false;
      }
    } else if (state.mode !== "all" && !item.list_modes?.[state.mode]) {
      return false;
    }

    if (state.phaseGroup && !itemPhaseIds(item).includes(state.phaseGroup)) {
      return false;
    }
    if (state.deliverable && item.deliverable_type !== state.deliverable) {
      return false;
    }
    if (state.resourceKind && item.resource_kind !== state.resourceKind) {
      return false;
    }
    if (state.cardKind && item.card_kind !== state.cardKind) {
      return false;
    }
    if (state.packType && item.pack_type !== state.packType) {
      return false;
    }
    if (state.availability && item.availability !== state.availability) {
      return false;
    }
    if (state.sourceId && !(item.source_ids ?? []).includes(state.sourceId)) {
      return false;
    }
    if (state.localOnly && !item.downloaded) {
      return false;
    }
    if (state.pendingOnly && !item.needs_user_file) {
      return false;
    }
    if (state.search) {
      const needle = state.search.toLowerCase();
      const haystack = `${item.title} ${item.subtitle ?? ""} ${item.summary ?? ""} ${item.search_text ?? ""}`.toLowerCase();
      if (!haystack.includes(needle)) {
        return false;
      }
    }
    return true;
  }

  function sortItems(items) {
    return [...items].sort((left, right) => {
      const starterDelta = (starterKeyOrder.get(left.key) ?? 999) - (starterKeyOrder.get(right.key) ?? 999);
      if (
        (state.mode === "start_here" || (left.pack_type === "use_case_pack" && right.pack_type === "use_case_pack")) &&
        starterDelta !== 0
      ) {
        return starterDelta;
      }
      if (state.sort === "title") {
        return left.title.localeCompare(right.title, "zh-CN");
      }
      if (state.sort === "year") {
        return (right.sort_year ?? 0) - (left.sort_year ?? 0) || left.title.localeCompare(right.title, "zh-CN");
      }
      if (state.sort === "local") {
        return Number(right.downloaded) - Number(left.downloaded) || left.title.localeCompare(right.title, "zh-CN");
      }
      return (
        (phaseOrder.get(primaryPhaseId(left)) ?? 999) - (phaseOrder.get(primaryPhaseId(right)) ?? 999) ||
        left.title.localeCompare(right.title, "zh-CN")
      );
    });
  }

  function buildStarterActionLink(link) {
    const anchor = buildLocalLink(link.label || link.relative_path, link.relative_path, "link-chip starter-link");
    anchor.addEventListener("click", (event) => event.stopPropagation());
    return anchor;
  }

  function renderStarterView(items) {
    if (state.mode !== "start_here") {
      els.starterView.classList.add("hidden");
      els.starterView.innerHTML = "";
      els.itemList.classList.remove("hidden");
      return;
    }

    els.starterView.classList.remove("hidden");
    els.itemList.classList.add("hidden");
    els.starterView.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "item-empty";
      empty.textContent = "No starter pack matches the current filters.";
      els.starterView.append(empty);
      return;
    }

    const intro = document.createElement("div");
    intro.className = "item-empty";
    intro.innerHTML =
      "<strong>Start from a task, not from a taxonomy.</strong><br>Pick the workflow that matches what you are trying to do now, then open its starter prompt, ready-to-run file, or full pack.";
    els.starterView.append(intro);

    const grid = document.createElement("div");
    grid.className = "starter-grid";

    for (const item of items) {
      const block = getContentBlock(item);
      const card = document.createElement("article");
      card.className = `starter-card${state.selectedKey === item.key ? " is-active" : ""}`;
      card.tabIndex = 0;
      card.addEventListener("click", () => {
        state.selectedKey = item.key;
        render();
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          state.selectedKey = item.key;
          render();
        }
      });

      const title = document.createElement("h3");
      title.textContent = item.title;
      card.append(title);

      const summary = document.createElement("p");
      summary.textContent = item.when_to_use || item.summary || "";
      card.append(summary);

      const meta = document.createElement("div");
      meta.className = "meta-row";
      meta.append(
        badge(`${item.prompt_count ?? 0} prompts`),
        badge(`${item.checklist_count ?? 0} checklists`)
      );
      const progressBadge = badge(promptProgressText(item));
      progressBadge.classList.add("progress-badge");
      if (promptIsReady(item)) {
        progressBadge.classList.add("is-ready");
      }
      meta.append(progressBadge);
      const coveredPhases = itemPhaseIds(item)
        .map((phaseId) => (data.taxonomy?.phase_groups ?? []).find((phase) => phase.id === phaseId)?.label ?? phaseId)
        .filter(Boolean)
        .slice(0, 3);
      for (const label of coveredPhases) {
        meta.append(badge(label));
      }
      card.append(meta);

      const steps = document.createElement("ul");
      for (const step of (item.starter_steps ?? []).slice(0, 2)) {
        const li = document.createElement("li");
        li.textContent = step;
        steps.append(li);
      }
      card.append(steps);

      const actions = document.createElement("div");
      actions.className = "starter-link-row";
      if (block?.starter_prompt_text) {
        actions.append(
          buildActionButton("Copy composed prompt", async () => {
            await copyText(composeStarterPrompt(item, block), "Composed prompt");
          }, "link-chip starter-link")
        );
      }
      const preferredLinks = (item.local_links ?? []).filter(
        (link) => link.label === "Starter prompt" || link.label === "Ready-to-run" || link.label === "Full pack"
      );
      for (const link of preferredLinks) {
        actions.append(buildStarterActionLink(link));
      }
      card.append(actions);

      grid.append(card);
    }

    els.starterView.append(grid);
  }

  function renderList(items) {
    if (state.mode === "start_here") {
      els.itemList.innerHTML = "";
      return;
    }

    els.itemList.classList.remove("hidden");
    els.itemList.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "item-empty";
      empty.textContent = "No items match the current filter set.";
      els.itemList.append(empty);
      return;
    }

    for (const item of items) {
      const article = document.createElement("article");
      article.className = `item-card${state.selectedKey === item.key ? " is-active" : ""}`;
      article.tabIndex = 0;
      article.addEventListener("click", () => {
        state.selectedKey = item.key;
        render();
      });
      article.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          state.selectedKey = item.key;
          render();
        }
      });

      const title = document.createElement("h3");
      title.textContent = item.title;
      article.append(title);

      if (item.subtitle) {
        const subtitle = document.createElement("p");
        subtitle.className = "muted";
        subtitle.textContent = item.subtitle;
        article.append(subtitle);
      }

      const summary = document.createElement("p");
      summary.textContent = item.summary ?? "";
      article.append(summary);

      const meta = document.createElement("div");
      meta.className = "meta-row";
      meta.append(
        badge(item.phase_label || "Unassigned"),
        badge(item.resource_label || "Resource"),
        badge(item.availability_label || "Available")
      );
      if (item.deliverable_label) {
        meta.append(badge(item.deliverable_label));
      }
      if (item.pack_type_label) {
        meta.append(badge(item.pack_type_label));
      }
      if (item.card_count) {
        meta.append(badge(`${item.card_count} cards`));
      }
      article.append(meta);
      els.itemList.append(article);
    }
  }

  function appendMetadataRow(label, value) {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    els.detailMetadata.append(dt, dd);
  }

  function renderDetailActions(item, block) {
    els.detailActions.innerHTML = "";
    els.detailActions.classList.add("hidden");

    if (!block?.starter_prompt_text) {
      return;
    }

    els.detailActions.classList.remove("hidden");
    els.detailActions.append(
      buildActionButton("Copy composed prompt", async () => {
        await copyText(composeStarterPrompt(item, block), "Composed prompt");
      })
    );
    els.detailActions.append(buildCopyButton("Copy raw prompt", block.starter_prompt_text, "action-button"));
    els.detailActions.append(
      buildActionButton("Export context JSON", async () => {
        await exportPromptContext(item);
      })
    );
    els.detailActions.append(
      buildActionButton("Import context JSON", async () => {
        await importPromptContext(item);
      })
    );

    if (item.starter_prompt_relative_markdown_path) {
      els.detailActions.append(
        buildLocalLink("Open starter prompt", item.starter_prompt_relative_markdown_path, "link-chip action-link")
      );
    }
    if (item.starter_relative_markdown_path) {
      els.detailActions.append(
        buildLocalLink("Open ready-to-run", item.starter_relative_markdown_path, "link-chip action-link")
      );
    }
  }

  function renderDetailPreview(item, block) {
    els.detailPreview.innerHTML = "";
    els.detailPreview.classList.add("hidden");

    if (!(item.entity_type === "pack" && item.pack_type === "use_case_pack" && block?.starter_prompt_text)) {
      return;
    }

    els.detailPreview.classList.remove("hidden");

    const card = document.createElement("section");
    card.className = "preview-card";

    const title = document.createElement("h3");
    title.textContent = "Starter Prompt";
    card.append(title);

    const summary = document.createElement("p");
    summary.className = "preview-summary";
    summary.textContent =
      item.when_to_use || "Use this copy-paste prompt when you want one integrated response instead of opening cards one by one.";
    card.append(summary);

    const note = document.createElement("p");
    note.className = "composer-note";
    note.textContent =
      "Fill the context fields below to generate a project-specific prompt. Blank fields keep their placeholder tokens. Ctrl+Enter advances the current gap flow. Alt+Up / Alt+Down move between manual gaps. Alt+Enter fills the current field from Project Profile when available.";
    card.append(note);

    const status = document.createElement("p");
    status.className = "composer-status";
    card.append(status);

    const profileHint = document.createElement("p");
    profileHint.className = "composer-hint";
    card.append(profileHint);

    const blockerStatus = document.createElement("p");
    blockerStatus.className = "composer-hint";
    card.append(blockerStatus);

    const manualGapStatus = document.createElement("p");
    manualGapStatus.className = "composer-hint";
    card.append(manualGapStatus);

    const focusedFieldHint = document.createElement("p");
    focusedFieldHint.className = "composer-hint";
    card.append(focusedFieldHint);

    const focusedFieldStatus = document.createElement("p");
    focusedFieldStatus.className = "composer-hint";
    card.append(focusedFieldStatus);

    const focusedFieldActions = document.createElement("div");
    focusedFieldActions.className = "composer-inline-actions";
    card.append(focusedFieldActions);

    const gapSummary = document.createElement("section");
    gapSummary.className = "composer-gap-summary";
    card.append(gapSummary);

    const fieldFilterBar = document.createElement("div");
    fieldFilterBar.className = "composer-inline-actions";
    card.append(fieldFilterBar);

    const fieldFilterSummary = document.createElement("p");
    fieldFilterSummary.className = "composer-hint";
    card.append(fieldFilterSummary);

    const toolbar = document.createElement("div");
    toolbar.className = "composer-toolbar";

    const blockerToolbar = document.createElement("div");
    blockerToolbar.className = "composer-toolbar";

    const composedPreview = document.createElement("pre");
    const rawPreview = document.createElement("pre");
    rawPreview.textContent = block.starter_prompt_text;
    const fieldElementsByKey = new Map();
    const fieldStatusBadgesByKey = new Map();
    const fieldFilterButtons = new Map();
    const textareasByKey = new Map();
    let activeComposerFieldKey = "";
    let applyProfileButton = null;
    let previousBlockerButton = null;
    let previousManualGapButton = null;
    let nextManualGapButton = null;
    let nextBlockerButton = null;
    let resolveCurrentGapButton = null;
    let resolveCurrentBlockerButton = null;
    let copyManualGapBriefButton = null;
    let copyFocusedGapBriefButton = null;
    let applyFocusedFieldButton = null;
    let previousFocusedGapButton = null;
    let nextFocusedGapButton = null;
    let copyFocusedFieldBriefButton = null;
    let copyFocusedFieldValueButton = null;
    let clearFocusedFieldButton = null;

    const focusField = (spec) => {
      const textarea = textareasByKey.get(spec.key);
      if (!textarea) {
        return;
      }
      activeComposerFieldKey = spec.key;
      renderActiveFieldState();
      textarea.focus();
      textarea.scrollIntoView({ behavior: "smooth", block: "center" });
      const valueLength = textarea.value.length;
      textarea.setSelectionRange(valueLength, valueLength);
    };

    const currentFocusedFieldKey = () => {
      for (const [key, textarea] of textareasByKey.entries()) {
        if (textarea === document.activeElement) {
          activeComposerFieldKey = key;
          return key;
        }
      }
      return activeComposerFieldKey;
    };

    const renderActiveFieldState = () => {
      const activeKey = currentFocusedFieldKey();
      for (const [key, field] of fieldElementsByKey.entries()) {
        field.classList.toggle("is-active", key === activeKey);
      }
    };

    const renderFieldStatusBadges = () => {
      const values = promptInputStore(item);
      for (const spec of promptFieldSpecs(item)) {
        const badge = fieldStatusBadgesByKey.get(spec.key);
        if (!badge) {
          continue;
        }
        const value = normalizeText(values[spec.key] ?? "");
        const suggestion = normalizeText(projectProfileSuggestionForSpec(spec));
        if (value) {
          badge.textContent = "Filled";
          badge.className = "composer-field-badge is-filled";
          badge.title = `${value.length} characters saved`;
        } else if (suggestion) {
          badge.textContent = "Auto-fill";
          badge.className = "composer-field-badge is-autofill";
          badge.title = `Project Profile suggestion available`;
        } else {
          badge.textContent = "Manual gap";
          badge.className = "composer-field-badge is-manual";
          badge.title = `Manual input required`;
        }
      }
    };

    const fieldFilterCounts = () => {
      const values = promptInputStore(item);
      const specs = promptFieldSpecs(item);
      const remaining = specs.filter((spec) => !normalizeText(values[spec.key] ?? ""));
      const autofill = remaining.filter((spec) => normalizeText(projectProfileSuggestionForSpec(spec)));
      const manual = remaining.filter((spec) => !normalizeText(projectProfileSuggestionForSpec(spec)));
      return {
        all: specs.length,
        remaining: remaining.length,
        autofill: autofill.length,
        manual: manual.length
      };
    };

    const firstSpecForFilterMode = (mode) => {
      const values = promptInputStore(item);
      const specs = promptFieldSpecs(item);
      if (mode === "all") {
        return focusedPromptSpec() || specs[0] || null;
      }
      const remaining = specs.filter((spec) => !normalizeText(values[spec.key] ?? ""));
      if (mode === "remaining") {
        return remaining[0] || null;
      }
      if (mode === "autofill") {
        return remaining.find((spec) => normalizeText(projectProfileSuggestionForSpec(spec))) || null;
      }
      return remaining.find((spec) => !normalizeText(projectProfileSuggestionForSpec(spec))) || null;
    };

    const shouldShowField = (spec) => {
      const mode = composerFieldFilterMode(item);
      if (mode === "all") {
        return true;
      }
      const value = normalizeText(promptInputStore(item)[spec.key] ?? "");
      const suggestion = normalizeText(projectProfileSuggestionForSpec(spec));
      const activeKey = currentFocusedFieldKey();
      if (spec.key === activeKey) {
        return true;
      }
      if (mode === "remaining") {
        return !value;
      }
      if (mode === "autofill") {
        return !value && !!suggestion;
      }
      return !value && !suggestion;
    };

    const setFilterAndFocus = (mode) => {
      setComposerFieldFilterMode(item, mode);
      const targetSpec = firstSpecForFilterMode(mode);
      activeComposerFieldKey = targetSpec?.key || "";
      updateComposedPreview();
      if (targetSpec) {
        window.requestAnimationFrame(() => {
          focusField(targetSpec);
        });
      }
    };

    const applyComposerFieldFilter = () => {
      const specs = promptFieldSpecs(item);
      let visibleCount = 0;
      for (const spec of specs) {
        const field = fieldElementsByKey.get(spec.key);
        if (!field) {
          continue;
        }
        const shouldShow = shouldShowField(spec);
        field.classList.toggle("is-hidden", !shouldShow);
        if (shouldShow) {
          visibleCount += 1;
        }
      }

      const counts = fieldFilterCounts();
      const mode = composerFieldFilterMode(item);
      const labels = {
        all: "All fields",
        remaining: "Remaining fields",
        autofill: "Auto-fill fields",
        manual: "Manual-only fields"
      };
      fieldFilterSummary.textContent = `Showing ${visibleCount} / ${counts.all} fields. Filter: ${labels[mode]}.`;

      for (const [modeKey, button] of fieldFilterButtons.entries()) {
        const count = counts[modeKey] ?? 0;
        const titles = {
          all: "All",
          remaining: "Remaining",
          autofill: "Auto-fill",
          manual: "Manual"
        };
        button.textContent = `${titles[modeKey]} (${count})`;
        button.classList.toggle("is-active", modeKey === mode);
      }
    };

    const focusNextManualGap = () => {
      const nextSpec = nextManualGapSpec(item, currentFocusedFieldKey());
      if (!nextSpec) {
        showCopyFeedback("No manual gaps remain in this pack.", true);
        return;
      }
      focusField(nextSpec);
    };

    const focusPreviousManualGap = () => {
      const previousSpec = previousManualGapSpec(item, currentFocusedFieldKey());
      if (!previousSpec) {
        showCopyFeedback("No manual gaps remain in this pack.", true);
        return;
      }
      focusField(previousSpec);
    };

    const focusedManualGapSpec = () => manualGapSpecForField(item, currentFocusedFieldKey()) || firstManualGapSpec(item);

    const focusedPromptSpec = () =>
      promptFieldSpecs(item).find((spec) => spec.key === currentFocusedFieldKey()) || null;

    const focusedFieldHintText = () => {
      const spec = focusedPromptSpec();
      if (!spec) {
        return "Focus a field to see field-specific actions.";
      }
      const suggestion = normalizeText(projectProfileSuggestionForSpec(spec));
      if (suggestion) {
        return `Focused field: ${spec.label}. Alt+Enter fills it from Project Profile.`;
      }
      return `Focused field: ${spec.label}. No Project Profile suggestion is available for this field.`;
    };

    const focusedFieldStatusText = () => {
      const spec = focusedPromptSpec();
      if (!spec) {
        return "No field is currently focused.";
      }
      const value = normalizeText(promptInputStore(item)[spec.key] ?? "");
      const suggestion = normalizeText(projectProfileSuggestionForSpec(spec));
      const valueStatus = value ? `Saved value: ${value.length} chars.` : "Saved value: empty.";
      const suggestionStatus = suggestion ? "Profile suggestion available." : "No profile suggestion.";
      return `${valueStatus} ${suggestionStatus}`;
    };

    const resolveCurrentGapAndAdvance = () => {
      const activeFieldKey = currentFocusedFieldKey();
      const activeManualSpec = manualGapSpecForField(item, activeFieldKey);
      if (activeManualSpec) {
        const currentValue = normalizeText(promptInputStore(item)[activeManualSpec.key] ?? "");
        if (!currentValue) {
          showCopyFeedback(`"${activeManualSpec.label}" is still empty.`, true);
          focusField(activeManualSpec);
          return;
        }
      }

      const nextSpec = focusedManualGapSpec();
      if (nextSpec) {
        focusField(nextSpec);
        showCopyFeedback(`Focused next manual gap: ${nextSpec.label}.`);
        return;
      }

      const blockerContext = blockerQueueContextForItem(item);
      if (blockerContext.isInQueue) {
        resolveCurrentBlockerAndOpenNext(item);
        return;
      }

      showCopyFeedback("Current pack has no remaining manual gaps.");
      updateComposedPreview();
    };

    const manualGapStatusText = (detail) => {
      if (detail.manual.length === 0) {
        return "No manual gaps remain in this pack.";
      }
      const focusedKey = currentFocusedFieldKey();
      const focusedIndex = detail.manual.findIndex((spec) => spec.key === focusedKey);
      if (focusedIndex >= 0) {
        return `Manual gap ${focusedIndex + 1} / ${detail.manual.length}: ${detail.manual[focusedIndex].label}`;
      }
      return `${detail.manual.length} manual gap${detail.manual.length === 1 ? "" : "s"} remaining in this pack.`;
    };

    const focusedGapBriefText = (spec) => {
      const values = promptInputStore(item);
      const filledSpecs = promptFieldSpecs(item).filter((candidate) => normalizeText(values[candidate.key] ?? ""));
      const detail = coverageDetail(item);
      const lines = [
        `# ${item.title} Focused Gap Brief`,
        "",
        `Generated: ${new Date().toISOString()}`,
        "",
        `- Target field: ${spec.label}`,
        `- Placeholder key: {{${spec.key}}}`,
        `- Status: ${packReadinessLabel(item)}`,
        `- Progress: ${promptProgressText(item)}`,
        `- Blocker status: ${blockerQueueStatusText(item)}`,
        `- Remaining manual gaps in pack: ${detail.manual.length}`,
        `- When to use: ${item.when_to_use || item.summary || "N/A"}`,
        ""
      ];

      lines.push("## Project Profile");
      lines.push("");
      if (!projectProfileHasContent()) {
        lines.push("_No project profile saved._");
      } else {
        for (const field of projectProfileFields()) {
          const value = normalizeText(state.projectProfile[field.key] ?? "");
          if (!value) {
            continue;
          }
          lines.push(`- ${field.label}: ${value}`);
        }
      }
      lines.push("");

      lines.push("## Known Context");
      lines.push("");
      if (filledSpecs.length === 0) {
        lines.push("_No pack-specific context saved yet._");
      } else {
        for (const filledSpec of filledSpecs) {
          lines.push(`- ${filledSpec.label}: ${normalizeText(values[filledSpec.key])}`);
        }
      }
      lines.push("");

      lines.push("## Fill This Field Only");
      lines.push("");
      lines.push(`- Field: ${spec.label}`);
      lines.push(`- Return only the content for this field.`);
      lines.push(`- Final placeholder: {{${spec.key}}}`);
      lines.push("");

      return `${lines.join("\n").trim()}\n`;
    };

    const applyPendingComposerFocus = () => {
      const pending = state.pendingComposerFocus;
      if (!pending || pending.itemKey !== item.key) {
        return;
      }

      const targetSpec =
        promptFieldSpecs(item).find((spec) => spec.key === pending.fieldKey) ||
        firstManualGapSpec(item) ||
        promptFieldSpecs(item)[0];

      state.pendingComposerFocus = null;
      if (!targetSpec) {
        return;
      }

      window.requestAnimationFrame(() => {
        focusField(targetSpec);
      });
    };

    const applySuggestedFieldValue = (spec) => {
      const suggestion = normalizeText(spec.suggestion ?? "");
      if (!suggestion) {
        focusField(spec);
        return;
      }
      savePromptInputValue(item, spec.key, suggestion);
      const textarea = textareasByKey.get(spec.key);
      if (textarea) {
        textarea.value = suggestion;
      }
      updateComposedPreview();
      refreshPromptProgressViews();
      showCopyFeedback(`Filled "${spec.label}" from Project Profile.`);
      focusField(spec);
    };

    const applySuggestionToFocusedField = () => {
      const spec = focusedPromptSpec();
      if (!spec) {
        showCopyFeedback("No field is currently focused.", true);
        return;
      }
      const suggestion = projectProfileSuggestionForSpec(spec);
      if (!normalizeText(suggestion)) {
        showCopyFeedback(`No Project Profile suggestion is available for "${spec.label}".`, true);
        focusField(spec);
        return;
      }
      applySuggestedFieldValue({
        ...spec,
        suggestion
      });
    };

    const copyFocusedFieldValue = async () => {
      const spec = focusedPromptSpec();
      if (!spec) {
        showCopyFeedback("No field is currently focused.", true);
        return;
      }
      const value = normalizeText(promptInputStore(item)[spec.key] ?? "");
      if (!value) {
        showCopyFeedback(`"${spec.label}" is empty.`, true);
        focusField(spec);
        return;
      }
      await copyText(value, `${spec.label} value`);
      focusField(spec);
    };

    const clearFocusedFieldValue = () => {
      const spec = focusedPromptSpec();
      if (!spec) {
        showCopyFeedback("No field is currently focused.", true);
        return;
      }
      savePromptInputValue(item, spec.key, "");
      const textarea = textareasByKey.get(spec.key);
      if (textarea) {
        textarea.value = "";
      }
      updateComposedPreview();
      refreshPromptProgressViews();
      showCopyFeedback(`Cleared "${spec.label}".`);
      focusField(spec);
    };

    const buildGapChip = (spec) => {
      const button = document.createElement("button");
      button.type = "button";
      const hasSuggestion = !!normalizeText(spec.suggestion ?? "");
      const isActiveManualGap = !hasSuggestion && spec.key === currentFocusedFieldKey();
      button.className = `link-chip composer-gap-chip${hasSuggestion ? " is-autofill" : " is-manual"}${
        isActiveManualGap ? " is-active" : ""
      }`;
      button.textContent = spec.label;
      if (hasSuggestion) {
        button.title = `Fill from Project Profile: ${normalizeText(spec.suggestion)}`;
      } else {
        button.title = `Focus field: ${spec.label}`;
      }
      button.addEventListener("click", () => {
        if (hasSuggestion) {
          applySuggestedFieldValue(spec);
        } else {
          focusField(spec);
        }
      });
      return button;
    };

    const renderGapSummary = () => {
      gapSummary.innerHTML = "";
      const detail = coverageDetail(item);
      const groups = [
        {
          title: "Manual gaps",
          emptyText: "No manual gaps. This pack can move forward in the blocker queue.",
          specs: detail.manual
        },
        {
          title: "Auto-fill available",
          emptyText: "No remaining empty fields match the Project Profile.",
          specs: detail.autoFillable
        }
      ];

      for (const group of groups) {
        const section = document.createElement("div");
        section.className = "composer-gap-group";

        const label = document.createElement("p");
        label.className = "composer-gap-label";
        label.textContent = `${group.title} (${group.specs.length})`;
        section.append(label);

        if (group.specs.length === 0) {
          const empty = document.createElement("p");
          empty.className = "composer-gap-empty";
          empty.textContent = group.emptyText;
          section.append(empty);
        } else {
          const list = document.createElement("div");
          list.className = "composer-gap-list";
          for (const spec of group.specs) {
            list.append(buildGapChip(spec));
          }
          section.append(list);
        }

        gapSummary.append(section);
      }
    };

    const updateComposedPreview = () => {
      const detail = coverageDetail(item);
      composedPreview.textContent = composeStarterPrompt(item, block);
      status.textContent = `Autosaved locally in this browser. ${promptProgressText(item)}.`;
      const availableSuggestions = projectProfileSuggestionCounts(item, true);
      if (!projectProfileHasContent()) {
        profileHint.textContent = "Project Profile is empty. Fill it in the sidebar to reuse global context here.";
      } else if (availableSuggestions > 0) {
        profileHint.textContent = `Project Profile can fill ${availableSuggestions} more field${availableSuggestions === 1 ? "" : "s"} in this pack.`;
      } else {
        profileHint.textContent = "Project Profile has no remaining empty-field matches for this pack.";
      }
      if (applyProfileButton) {
        applyProfileButton.disabled = !projectProfileHasContent() || availableSuggestions === 0;
      }
      const blockerContext = blockerQueueContextForItem(item);
      blockerStatus.textContent = blockerQueueStatusText(item, blockerContext);
      manualGapStatus.textContent = manualGapStatusText(detail);
      focusedFieldHint.textContent = focusedFieldHintText();
      if (previousBlockerButton) {
        previousBlockerButton.disabled = blockerContext.total === 0;
      }
      if (previousManualGapButton) {
        previousManualGapButton.disabled = detail.manual.length === 0;
      }
      if (nextManualGapButton) {
        nextManualGapButton.disabled = detail.manual.length === 0;
      }
      if (nextBlockerButton) {
        nextBlockerButton.disabled = blockerContext.total === 0;
      }
      if (resolveCurrentGapButton) {
        resolveCurrentGapButton.disabled = detail.manual.length === 0 && !blockerContext.isInQueue;
      }
      if (resolveCurrentBlockerButton) {
        resolveCurrentBlockerButton.disabled = !blockerContext.isInQueue || blockerContext.manualGapCount > 0;
      }
      if (copyManualGapBriefButton) {
        copyManualGapBriefButton.disabled = detail.manual.length === 0;
      }
      if (copyFocusedGapBriefButton) {
        copyFocusedGapBriefButton.disabled = detail.manual.length === 0;
      }
      const focusedSpec = focusedPromptSpec();
      const focusedValue = normalizeText(promptInputStore(item)[focusedSpec?.key ?? ""] ?? "");
      const focusedSuggestion = normalizeText(projectProfileSuggestionForSpec(focusedSpec ?? {}));
      if (applyFocusedFieldButton) {
        applyFocusedFieldButton.disabled = !focusedSpec || !focusedSuggestion;
      }
      if (copyFocusedFieldValueButton) {
        copyFocusedFieldValueButton.disabled = !focusedSpec || !focusedValue;
      }
      if (clearFocusedFieldButton) {
        clearFocusedFieldButton.disabled = !focusedSpec || !focusedValue;
      }
      if (previousFocusedGapButton) {
        previousFocusedGapButton.disabled = detail.manual.length === 0;
      }
      if (nextFocusedGapButton) {
        nextFocusedGapButton.disabled = detail.manual.length === 0;
      }
      if (copyFocusedFieldBriefButton) {
        copyFocusedFieldBriefButton.disabled = detail.manual.length === 0;
      }
      focusedFieldStatus.textContent = focusedFieldStatusText();
      renderFieldStatusBadges();
      renderActiveFieldState();
      applyComposerFieldFilter();
      renderGapSummary();
    };

    applyProfileButton = buildActionButton("Apply project profile", () => {
      const appliedCount = applyProjectProfileToItem(item, false);
      if (appliedCount === 0) {
        showCopyFeedback("No empty pack fields matched the project profile.", true);
        return;
      }
      const values = promptInputStore(item);
      for (const [key, textarea] of textareasByKey.entries()) {
        textarea.value = values[key] ?? "";
      }
      updateComposedPreview();
      refreshPromptProgressViews();
      showCopyFeedback(`Applied project profile to ${appliedCount} field${appliedCount === 1 ? "" : "s"}.`);
    });

    previousBlockerButton = buildActionButton("Previous blocker", () => {
      navigateBlocker(-1);
    });
    previousManualGapButton = buildActionButton("Previous manual gap", () => {
      focusPreviousManualGap();
    });
    nextManualGapButton = buildActionButton("Next manual gap", () => {
      focusNextManualGap();
    });
    nextBlockerButton = buildActionButton("Next blocker", () => {
      navigateBlocker(1);
    });
    resolveCurrentGapButton = buildActionButton("Current gap done -> next step", () => {
      resolveCurrentGapAndAdvance();
    });
    resolveCurrentBlockerButton = buildActionButton("Current blocker done -> next", () => {
      resolveCurrentBlockerAndOpenNext(item);
    });

    blockerToolbar.append(
      previousBlockerButton,
      previousManualGapButton,
      nextManualGapButton,
      nextBlockerButton,
      resolveCurrentGapButton,
      resolveCurrentBlockerButton
    );
    card.append(blockerToolbar);

    applyFocusedFieldButton = buildActionButton("Fill focused field", () => {
      applySuggestionToFocusedField();
    }, "link-chip");
    copyFocusedFieldValueButton = buildActionButton("Copy value", async () => {
      await copyFocusedFieldValue();
    }, "link-chip");
    clearFocusedFieldButton = buildActionButton("Clear field", () => {
      clearFocusedFieldValue();
    }, "link-chip");
    previousFocusedGapButton = buildActionButton("Prev gap", () => {
      focusPreviousManualGap();
    }, "link-chip");
    nextFocusedGapButton = buildActionButton("Next gap", () => {
      focusNextManualGap();
    }, "link-chip");
    copyFocusedFieldBriefButton = buildActionButton("Copy focused brief", async () => {
      const spec = focusedManualGapSpec();
      if (!spec) {
        showCopyFeedback("No manual gaps remain in this pack.", true);
        return;
      }
      await copyText(focusedGapBriefText(spec), "Focused-gap brief");
      focusField(spec);
    }, "link-chip");
    focusedFieldActions.append(
      applyFocusedFieldButton,
      copyFocusedFieldValueButton,
      clearFocusedFieldButton,
      copyFocusedFieldBriefButton,
      previousFocusedGapButton,
      nextFocusedGapButton
    );

    for (const mode of ["all", "remaining", "autofill", "manual"]) {
      const button = buildActionButton("", () => {
        setFilterAndFocus(mode);
      }, "link-chip composer-filter-chip");
      fieldFilterButtons.set(mode, button);
      fieldFilterBar.append(button);
    }

    toolbar.append(
      applyProfileButton,
      (copyFocusedGapBriefButton = buildActionButton("Copy focused-gap brief", async () => {
        const spec = focusedManualGapSpec();
        if (!spec) {
          showCopyFeedback("No manual gaps remain in this pack.", true);
          return;
        }
        await copyText(focusedGapBriefText(spec), "Focused-gap brief");
        focusField(spec);
      })),
      (copyManualGapBriefButton = buildActionButton("Copy manual-gap brief", async () => {
        await copyText(manualGapBriefText(item), "Manual-gap brief");
      })),
      buildActionButton("Copy composed prompt", async () => {
        await copyText(composeStarterPrompt(item, block), "Composed prompt");
      }),
      buildActionButton("Copy input scaffold", async () => {
        await copyText(inputScaffoldText(item), "Input scaffold");
      }),
      buildActionButton("Export context JSON", async () => {
        await exportPromptContext(item);
      }),
      buildActionButton("Import context JSON", async () => {
        await importPromptContext(item);
      }),
      buildActionButton("Reset inputs", () => {
        clearPromptInputs(item);
        for (const textarea of card.querySelectorAll(".composer-field textarea")) {
          textarea.value = "";
        }
        updateComposedPreview();
        refreshPromptProgressViews();
      })
    );
    card.append(toolbar);

    const specs = promptFieldSpecs(item);
    if (specs.length > 0) {
      const grid = document.createElement("div");
      grid.className = "composer-grid";
      const values = promptInputStore(item);

      for (const spec of specs) {
        const field = document.createElement("label");
        field.className = "composer-field";

        const head = document.createElement("div");
        head.className = "composer-field-head";

        const fieldLabel = document.createElement("span");
        fieldLabel.textContent = spec.label;
        head.append(fieldLabel);

        const badgeRow = document.createElement("div");
        badgeRow.className = "composer-field-badges";

        const statusBadge = document.createElement("span");
        statusBadge.className = "composer-field-badge";
        fieldStatusBadgesByKey.set(spec.key, statusBadge);
        badgeRow.append(statusBadge);

        const keyBadge = document.createElement("span");
        keyBadge.className = "composer-field-badge is-key";
        keyBadge.textContent = `{{${spec.key}}}`;
        badgeRow.append(keyBadge);

        head.append(badgeRow);
        field.append(head);
        fieldElementsByKey.set(spec.key, field);

        const textarea = document.createElement("textarea");
        textarea.rows = 4;
        textarea.placeholder = `Add ${spec.label.toLowerCase()}`;
        textarea.value = values[spec.key] ?? "";
        textarea.addEventListener("focus", () => {
          activeComposerFieldKey = spec.key;
          updateComposedPreview();
        });
        textarea.addEventListener("keydown", (event) => {
          if (event.ctrlKey && !event.altKey && !event.shiftKey && event.key === "Enter") {
            event.preventDefault();
            resolveCurrentGapAndAdvance();
            return;
          }
          if (event.altKey && !event.ctrlKey && !event.shiftKey && event.key === "Enter") {
            event.preventDefault();
            applySuggestionToFocusedField();
            return;
          }
          if (event.altKey && event.key === "ArrowDown") {
            event.preventDefault();
            focusNextManualGap();
            return;
          }
          if (event.altKey && event.key === "ArrowUp") {
            event.preventDefault();
            focusPreviousManualGap();
          }
        });
        textarea.addEventListener("input", (event) => {
          savePromptInputValue(item, spec.key, event.target.value);
          updateComposedPreview();
          refreshPromptProgressViews();
        });
        textareasByKey.set(spec.key, textarea);
        field.append(textarea);
        grid.append(field);
      }

      card.append(grid);
    }

    updateComposedPreview();
    applyPendingComposerFocus();

    const details = document.createElement("details");
    details.className = "starter-preview";
    details.open = true;

    const detailsSummary = document.createElement("summary");
    detailsSummary.textContent = "Preview composed prompt";
    details.append(detailsSummary);

    details.append(composedPreview);
    card.append(details);

    const rawDetails = document.createElement("details");
    rawDetails.className = "starter-preview";

    const rawSummary = document.createElement("summary");
    rawSummary.textContent = "Preview raw starter prompt";
    rawDetails.append(rawSummary);
    rawDetails.append(rawPreview);
    card.append(rawDetails);

    els.detailPreview.append(card);
  }

  function renderDetail(item) {
    if (!item) {
      els.detailEmpty.classList.remove("hidden");
      els.detailView.classList.add("hidden");
      els.detailActions.innerHTML = "";
      els.detailActions.classList.add("hidden");
      els.detailPreview.innerHTML = "";
      els.detailPreview.classList.add("hidden");
      return;
    }

    els.detailEmpty.classList.add("hidden");
    els.detailView.classList.remove("hidden");

    const block = getContentBlock(item);
    const coveredPhaseLabels = itemPhaseIds(item)
      .map((phaseId) => (data.taxonomy?.phase_groups ?? []).find((phase) => phase.id === phaseId)?.label ?? phaseId)
      .filter(Boolean);

    els.detailType.textContent =
      item.entity_type === "work" ? "Work" : item.entity_type === "pack" ? "Pack" : "Card";
    els.detailTitle.textContent = item.title;
    els.detailSummary.textContent = item.summary ?? "";

    els.detailBadges.innerHTML = "";
    [
      item.phase_label,
      item.deliverable_label,
      item.resource_label,
      item.availability_label,
      item.card_kind_label,
      item.pack_type_label
    ]
      .filter(Boolean)
      .forEach((label) => els.detailBadges.append(badge(label)));

    renderDetailActions(item, block);
    renderDetailPreview(item, block);
    els.detailContent.innerHTML = block?.html ?? "<p>No displayable body content.</p>";

    els.detailMetadata.innerHTML = "";
    appendMetadataRow("Authors", (item.authors ?? []).join(" / ") || "Local card");
    appendMetadataRow("Year", item.year ?? "—");
    appendMetadataRow("Primary phase", item.phase_label || "Unassigned");
    appendMetadataRow("Covered phases", coveredPhaseLabels.join(" / ") || item.phase_label || "—");
    appendMetadataRow("Deliverable", item.deliverable_label || "—");
    appendMetadataRow("Kind", item.resource_label || item.card_kind_label || "Resource");
    appendMetadataRow("Pack type", item.pack_type_label || "—");
    appendMetadataRow("Pack size", item.card_count ? `${item.card_count} cards` : "—");
    appendMetadataRow("Prompt templates", Number.isFinite(item.prompt_count) ? String(item.prompt_count) : "—");
    appendMetadataRow("Checklists", Number.isFinite(item.checklist_count) ? String(item.checklist_count) : "—");
    appendMetadataRow("Availability", item.availability_label || "—");
    appendMetadataRow("Source", (item.source_labels ?? []).join(" / ") || "Local card");

    appendMetadataRow("Prompt progress", block?.starter_prompt_text ? promptProgressText(item) : "N/A");

    els.detailLocalLinks.innerHTML = "";
    const localLinks = item.local_links ?? [];
    if (localLinks.length === 0) {
      els.detailLocalLinks.innerHTML = "<p class='muted'>No local file.</p>";
    } else {
      for (const link of localLinks) {
        const anchor = buildLocalLink(link.label || link.relative_path, link.relative_path);
        els.detailLocalLinks.append(anchor);
      }
    }

    els.detailOfficialLinks.innerHTML = "";
    const officialLinks = item.official_links ?? [];
    if (officialLinks.length === 0) {
      els.detailOfficialLinks.innerHTML = "<p class='muted'>No external entry point.</p>";
    } else {
      for (const href of officialLinks) {
        const anchor = document.createElement("a");
        anchor.className = "link-chip";
        anchor.href = href;
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
        anchor.textContent = href;
        els.detailOfficialLinks.append(anchor);
      }
    }

    els.detailRelated.innerHTML = "";
    const relatedItems = (item.related_keys ?? [])
      .map((key) => itemMap.get(key))
      .filter(Boolean)
      .slice(0, 12);
    if (relatedItems.length === 0) {
      els.detailRelated.innerHTML = "<p class='muted'>No related item.</p>";
    } else {
      for (const related of relatedItems) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "related-button";
        button.textContent = related.title;
        button.addEventListener("click", () => {
          state.selectedKey = related.key;
          render();
        });
        els.detailRelated.append(button);
      }
    }
  }

  function render() {
    const filtered = sortItems((data.items ?? []).filter(matches));
    if (!state.selectedKey || !filtered.some((item) => item.key === state.selectedKey)) {
      state.selectedKey = filtered[0]?.key ?? "";
    }

    const activeFilters = [];
    if (state.phaseGroup) {
      activeFilters.push(selectedPhaseLabel());
    }
    if (state.packType) {
      activeFilters.push(packTypeLabel(state.packType));
    }
    if (state.search) {
      activeFilters.push(`search: ${state.search}`);
    }

    els.resultTitle.textContent = modeLabel(state.mode);
    els.resultMeta.textContent = `${filtered.length} shown / ${(data.items ?? []).length} total${
      activeFilters.length ? ` | ${activeFilters.join(" | ")}` : ""
    }`;

    syncControls();
    renderModes();
    renderContextWorkspace();
    renderProjectProfile();
    renderQuickPacks();
    renderPhaseButtons();
    renderStarterView(filtered);
    renderList(filtered);
    renderDetail(filtered.find((item) => item.key === state.selectedKey));
    writeHash();
  }

  populateFilters();
  renderStats();
  syncControls();

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    render();
  });
  els.deliverableFilter.addEventListener("change", (event) => {
    state.deliverable = event.target.value;
    render();
  });
  els.resourceFilter.addEventListener("change", (event) => {
    state.resourceKind = event.target.value;
    render();
  });
  els.cardKindFilter.addEventListener("change", (event) => {
    state.cardKind = event.target.value;
    render();
  });
  els.packTypeFilter.addEventListener("change", (event) => {
    state.packType = event.target.value;
    render();
  });
  els.availabilityFilter.addEventListener("change", (event) => {
    state.availability = event.target.value;
    render();
  });
  els.sourceFilter.addEventListener("change", (event) => {
    state.sourceId = event.target.value;
    render();
  });
  els.localOnly.addEventListener("change", (event) => {
    state.localOnly = event.target.checked;
    render();
  });
  els.pendingOnly.addEventListener("change", (event) => {
    state.pendingOnly = event.target.checked;
    render();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });
  els.bundleScope.addEventListener("change", (event) => {
    state.bundleScope = event.target.value;
    persistBundleScope();
    render();
  });
  els.checkStartedPacks.addEventListener("click", () => {
    setBundleCheckedKeysFromItems(startedUseCaseItems());
    renderContextWorkspace();
  });
  els.checkReadyPacks.addEventListener("click", () => {
    setBundleCheckedKeysFromItems(readyUseCaseItems());
    renderContextWorkspace();
  });
  els.checkAutoFillablePacks.addEventListener("click", () => {
    const nextItems = autoFillableScopeItems();
    setBundleCheckedKeysFromItems(nextItems);
    showCopyFeedback(
      `Checked ${nextItems.length} auto-fillable pack${nextItems.length === 1 ? "" : "s"} from ${bundleScopeLabel().toLowerCase()}.`
    );
    renderContextWorkspace();
  });
  els.checkManualGapPacks.addEventListener("click", () => {
    const nextItems = manualGapScopeItems();
    setBundleCheckedKeysFromItems(nextItems);
    showCopyFeedback(
      `Checked ${nextItems.length} pack${nextItems.length === 1 ? "" : "s"} with manual gaps from ${bundleScopeLabel().toLowerCase()}.`
    );
    renderContextWorkspace();
  });
  els.checkAllPacks.addEventListener("click", () => {
    setBundleCheckedKeysFromItems(useCaseItems());
    renderContextWorkspace();
  });
  els.clearCheckedPacks.addEventListener("click", () => {
    clearBundleCheckedKeys();
    renderContextWorkspace();
  });
  els.openPreviousBlocker.addEventListener("click", () => {
    navigateBlocker(-1);
  });
  els.openNextBlocker.addEventListener("click", () => {
    navigateBlocker(1);
  });
  els.applyProfileScope.addEventListener("click", () => {
    const bundleItems = selectedBundleItems();
    const result = applyProjectProfileToItems(bundleItems, false);
    if (result.appliedFields === 0) {
      showCopyFeedback(`No empty fields in ${bundleScopeLabel().toLowerCase()} matched the project profile.`, true);
      return;
    }
    showCopyFeedback(
      `Applied project profile to ${result.appliedFields} field${result.appliedFields === 1 ? "" : "s"} across ${result.changedPacks} pack${result.changedPacks === 1 ? "" : "s"} in ${bundleScopeLabel().toLowerCase()}.`
    );
    render();
  });
  els.resolveScopeBlockers.addEventListener("click", () => {
    resolveCurrentScopeBlockers();
  });
  els.exportAllContext.addEventListener("click", async () => {
    await exportAllPromptContexts();
  });
  els.importAllContext.addEventListener("click", async () => {
    await importAllPromptContexts();
  });
  els.copyPromptBundle.addEventListener("click", async () => {
    await copyWorkspacePromptBundle();
  });
  els.exportPromptBundle.addEventListener("click", async () => {
    await exportWorkspacePromptBundle();
  });
  els.copyWorkspaceBrief.addEventListener("click", async () => {
    await copyWorkspaceBrief();
  });
  els.exportWorkspaceBrief.addEventListener("click", async () => {
    await exportWorkspaceBrief();
  });
  els.copyBlockerQueueBrief.addEventListener("click", async () => {
    await copyBlockerQueueBrief();
  });
  els.exportBlockerQueueBrief.addEventListener("click", async () => {
    await exportBlockerQueueBrief();
  });
  els.copyCoverageReport.addEventListener("click", async () => {
    await copyCoverageReport();
  });
  els.exportCoverageReport.addEventListener("click", async () => {
    await exportCoverageReport();
  });
  els.applyProfileAll.addEventListener("click", () => {
    const result = applyProjectProfileToAllItems(false);
    if (result.appliedFields === 0) {
      showCopyFeedback("No empty pack fields matched the project profile.", true);
      return;
    }
    showCopyFeedback(
      `Applied project profile to ${result.appliedFields} field${result.appliedFields === 1 ? "" : "s"} across ${result.changedPacks} pack${result.changedPacks === 1 ? "" : "s"}.`
    );
    render();
  });
  els.clearProjectProfile.addEventListener("click", () => {
    clearProjectProfile();
  });
  els.profileProjectName.addEventListener("input", (event) => {
    saveProjectProfileValue("project_name", event.target.value);
  });
  els.profileCorePitch.addEventListener("input", (event) => {
    saveProjectProfileValue("core_pitch", event.target.value);
  });
  els.profileTargetPlatforms.addEventListener("input", (event) => {
    saveProjectProfileValue("target_platforms", event.target.value);
  });
  els.profileTargetPlayers.addEventListener("input", (event) => {
    saveProjectProfileValue("target_players", event.target.value);
  });
  els.profileCurrentStatus.addEventListener("input", (event) => {
    saveProjectProfileValue("current_status", event.target.value);
  });
  els.clearAllContext.addEventListener("click", () => {
    clearAllPromptContexts();
  });
  els.resetFilters.addEventListener("click", () => {
    resetFilters();
    render();
  });
  els.toggleExtraPhases.addEventListener("click", () => {
    els.extraPhases.classList.toggle("hidden");
    els.toggleExtraPhases.textContent = els.extraPhases.classList.contains("hidden") ? "Show more" : "Show less";
  });
  window.addEventListener("hashchange", () => {
    const key = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (itemMap.has(key)) {
      state.selectedKey = key;
      render();
    }
  });

  if (!itemMap.has(state.selectedKey)) {
    state.selectedKey = "";
  }

  render();
})();
