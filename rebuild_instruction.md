你这个版本的重点不是“记录书”，而是做一个**自动化读书操作系统**：你在读书时随手输入一句想法、摘录、页码、问题或行动点，系统自动帮你归类、生成结构化笔记、建立双向链接、放进数据库、生成可视化页面，并且每天从你的笔记库里抽出一句话展示给你。这个方向和你上传的参考内容里“书籍元数据、三句话总结、思维导图、emoji 编码、原子笔记、卡片视图、五星书筛选、引用汇总”是一脉相承的，但需要进一步做成网页产品和自动化工作流。

下面这份可以直接复制给 CodeX / Cursor Agent / Claude Code / Windsurf / Replit Agent。

````markdown
You are a world-class full-stack software engineer, technical architect, product designer, database architect, AI workflow designer, and knowledge-management systems expert.

I need you to draft a complete technical software specification for building a web-based application called:

# BookOS — Automated Book Notes Library, Reading Intelligence System & Forum

BookOS is not just a book notes app. It is a full reading operating system.

It should help me:

1. Record books.
2. Classify books intelligently.
3. Capture ideas while reading.
4. Automatically turn messy thoughts into structured reading notes.
5. Store everything in a searchable database.
6. Create bidirectional links between books, notes, quotes, authors, concepts, tags, forum posts, and personal ideas.
7. Visualize my reading knowledge.
8. Show me one meaningful sentence or quote every day.
9. Let me open that sentence and jump back to the source book, page, chapter, note, or related discussion.
10. Build a personal reading dashboard and a public/community forum around books and ideas.

The system should digitize a highly structured reading workflow into a full-stack web application.

---

# Important Instruction

First, think through how you would build this step by step.

Then respond with a complete technical software specification as a well-organized Markdown file.

Do not start coding yet.

I will then reply with:

"build"

When I reply "build", you will implement the exact spec, writing all the code needed.

If implementation becomes too long, stop at a logical checkpoint. I will reply with:

"continue"

When I reply "continue", continue exactly where you left off. Do not restart. Continue until complete.

---

# Core Product Vision

Build a web app where every book becomes a living knowledge object.

A book should not only have a title, author, cover, year, pages, and rating. It should also have:

- Reading status
- Reading progress
- Personal purpose for reading it
- Reading questions
- Key ideas
- Quotes
- Action items
- Atomic notes
- Related books
- Related concepts
- Related authors
- Related forum discussions
- Related personal thoughts
- AI-generated summaries
- AI-suggested categories
- AI-suggested links
- A daily quote/sentence resurfacing system

The product should feel like a combination of:

1. Obsidian-style linked notes.
2. A personal reading database.
3. A book forum.
4. A reading tracker.
5. A personal idea inbox.
6. A quote book.
7. A knowledge graph.
8. A daily inspiration page.
9. An AI reading assistant.

---

# Tech Stack

Use this stack:

## Frontend

- Vue.js 3
- TypeScript
- Vite
- Pinia for state management
- Vue Router
- Element Plus or Vuetify for UI components
- Markdown editor component
- ECharts, D3, or Vue Flow for visualization
- Axios or Fetch API for API calls

## Backend

- Java 21 or latest stable Java LTS
- Spring Boot
- Spring Web
- Spring Security
- Spring Data JPA
- Hibernate
- Bean Validation
- RESTful APIs
- JWT-based authentication or session-based auth
- MySQL database

## Database

- MySQL
- JPA/Hibernate ORM
- Flyway or Liquibase for migrations if practical

## Optional AI Integration

The MVP should include an AI service abstraction layer.

The app should work without an AI API key, but the architecture must support AI features.

Use environment variables for AI providers.

Possible providers:

- OpenAI-compatible API
- Local LLM endpoint
- Any future configurable provider

Never hardcode API keys.

---

# Product Modules

## 1. User System

Implement authentication and user accounts.

User features:

- Register
- Login
- Logout
- Current user session
- Profile page
- Avatar
- Bio
- Public reading profile
- Private dashboard
- Reading statistics
- Public notes
- Public forum posts

User roles:

- Guest
- User
- Moderator
- Admin

Permissions:

- Guest can browse public books, public notes, public quotes, and public forum discussions.
- User can manage their personal library, notes, quotes, ideas, and forum activity.
- Moderator can moderate forum posts, reports, and comments.
- Admin can manage users, books, categories, reports, and system settings.

---

# 2. Structured Book Metadata

Each book must support the following metadata:

- Title
- Subtitle
- Author or authors
- Translator if applicable
- Year published
- Number of pages
- Publisher
- ISBN
- Language
- Cover image URL
- Local cover upload
- Description
- Category
- Subcategory
- Tags
- Personal rating from 1 to 5 stars
- Reading difficulty
- Reading priority
- Reading status
- Start date
- Finish date
- Current page
- Total pages
- Reading progress percentage
- Ownership status:
  - Own
  - Borrowed
  - Library
  - Kindle
  - Audiobook
  - PDF
  - Wishlist
- Reading format:
  - Physical book
  - E-book
  - Audiobook
  - PDF
  - Article collection
- Visibility:
  - Private
  - Unlisted
  - Public

Reading status options:

- Want to read
- Reading
- Finished
- Paused
- Abandoned
- Rereading
- Reference only
- Anti-library / unread but owned

---

# 3. Intelligent Book Positioning and Classification

The system should classify each book not only by genre, but by its role in my reading life.

Book positioning dimensions:

## By knowledge domain

Examples:

- Philosophy
- Psychology
- Productivity
- Business
- Technology
- AI
- Writing
- Design
- History
- Biography
- Literature
- Fiction
- Health
- Spirituality
- Economics
- Sociology
- Education
- Creativity
- Communication
- Science

## By purpose

Examples:

- Solve a current problem
- Build a skill
- Understand a field
- Generate creative ideas
- Prepare for writing
- Prepare for work
- Personal growth
- Entertainment
- Reference material
- Deep research
- Conversation material
- Long-term thinking

## By reading mode

Examples:

- Deep reading
- Skimming
- Reference lookup
- Study reading
- Creative inspiration
- Discussion preparation
- Action-oriented reading
- Quote mining
- Research reading

## By value type

Examples:

- Practical action
- Mental model
- Framework
- Story
- Quote source
- Data/statistics source
- Argument source
- Creative inspiration
- Strategic insight
- Emotional resonance

## By knowledge lifecycle

Examples:

- Inbox
- To process
- Processed
- Linked
- Reviewed
- Applied
- Archived

The app should allow manual classification and AI-assisted classification.

AI should be able to suggest:

- Category
- Subcategory
- Tags
- Purpose
- Reading mode
- Related books
- Related concepts
- Similar notes
- Suggested forum topics
- Suggested action items

AI suggestions should always be drafts. The user must confirm before saving.

---

# 4. Personal Reading Library

Build a personal book library for each user.

Core features:

- Add book manually.
- Add book from existing database.
- Add book by ISBN.
- Upload cover.
- Add cover URL.
- Edit metadata.
- Delete book from personal library.
- Set reading status.
- Set current page.
- Set start and finish date.
- Set rating.
- Set priority.
- Add personal tags.
- Add personal reason for reading.
- Add reading questions before reading.
- Add post-reading reflection after finishing.
- Track rereads.
- Add book to anti-library / unread shelf.

Main library views:

- All books
- Card view
- Table view
- Gallery view
- Currently reading
- Want to read
- Finished
- Paused
- Abandoned
- Anti-library
- Five-star books
- Recently added
- Recently updated
- Books with unfinished notes
- Books with action items
- Books with quotes
- Books by author
- Books by category
- Books by purpose
- Books by reading mode
- Books by tag
- Books by year
- Books by rating

Card UI must show:

- Cover
- Title
- Author
- Rating
- Reading status
- Progress bar
- Category
- Main tags
- Number of notes
- Number of quotes
- Number of linked concepts

---

# 5. Reading Session System

The app should support active reading sessions.

A reading session represents a period of reading one book.

Fields:

- Book
- User
- Start time
- End time
- Start page
- End page
- Pages read
- Reading duration
- Notes captured during session
- Mood
- Focus level
- Reading location
- Reading purpose
- Session summary

Features:

- Start reading session
- Pause session
- End session
- Quickly capture thoughts during session
- Record current page
- Record chapter
- Attach notes to current page/chapter
- Generate session summary
- Show reading history per book
- Show daily/weekly/monthly reading stats

The goal is to let me open a book page, click “Start Reading,” and then capture all thoughts while reading.

---

# 6. Quick Capture / Idea Inbox

This is one of the most important features.

While reading, I should be able to quickly capture any idea.

The capture box should support:

- Raw thought
- Quote
- Page number
- Chapter
- Book
- Image upload
- Mind map upload
- Screenshot upload
- Audio note placeholder
- Tags
- Emoji marker
- Visibility
- Whether it is private or public
- Whether it should become an atomic note
- Whether it should become a forum post
- Whether it should become an action item

Examples of things I might type:

- “p.45 这个观点可以用在我的项目管理系统里”
- “💬 p.91 Discipline equals freedom”
- “✅ p.120 明天试一下这个晨间计划”
- “🤯 这个地方让我想到《深度工作》里面的注意力残留”
- “🗣️ 这个观点适合发到论坛讨论：读书到底是为了记住还是为了行动？”
- “💡 这个框架可以做成一张图”

The system should automatically process quick captures.

Processing pipeline:

1. Save raw capture.
2. Detect book, page, chapter, marker, tags, and links.
3. Classify the capture type.
4. Convert it into structured data.
5. Suggest related concepts.
6. Suggest related books.
7. Suggest atomic note links.
8. Suggest whether it is a quote, action item, key argument, personal reflection, question, or discussion point.
9. Save it to the database.
10. Link it bidirectionally with the book, note, page, concept, quote, action item, and forum thread where applicable.

The system should have an “Inbox” view for unprocessed captures.

Inbox item statuses:

- New
- AI processed
- Needs review
- Accepted
- Archived
- Converted to note
- Converted to quote
- Converted to action item
- Converted to forum post
- Converted to atomic note

---

# 7. Triple-Tier Note Structure

Each book should have a structured note page with three major layers.

## Layer 1 — Three-Sentence Summary

A concise three-sentence summary of the entire book.

Fields:

- User-written summary
- AI draft summary
- Final accepted summary
- Last updated time

## Layer 2 — Mind Map / Visual Notes

A media area for:

- Mind map PDF
- Mind map image
- Book diagram photo
- Screenshot
- Handwritten note image
- Generated Mermaid diagram
- Generated concept map
- Generated chapter map

The app should allow uploads of:

- PDF
- PNG
- JPG
- JPEG
- WEBP
- SVG if safe

The mind map section should support:

- Upload file
- Preview file
- Link file to book
- Add caption
- Add page number
- Add chapter
- Add tags
- Add related concepts
- Generate a simple mind map from notes using Mermaid syntax if AI is available

## Layer 3 — Detailed Atomic Notes

A rich-text or Markdown editor for detailed notes.

The editor should support:

- Markdown
- Headings
- Lists
- Checklists
- Block quotes
- Tables if practical
- Code blocks
- Page references
- Chapter references
- Internal links using `[[Concept Name]]`
- Book links using `{{Book Title}}` or another consistent syntax
- Author links
- Tags using `#tag`
- Emoji markers
- Visibility controls
- Save draft
- Auto-save
- Manual save
- Version history if practical

---

# 8. Emoji Coding and Structured Note Blocks

Implement an emoji-based note marker system.

Supported markers:

- 💡 Inspiration / aha moment
- 🔑 Key argument
- 💬 Quote
- 🗣️ Discussion point
- 🤯 Mind-blowing idea
- ✅ Action item
- ❓ Question
- 🧠 Mental model
- 🧩 Related concept
- ⚠️ Warning / disagreement
- 📌 Important
- 🧪 Experiment
- 📝 Personal reflection
- 📊 Data / statistic
- 🔗 Link to another idea
- 🧭 Reading direction / next book

The system should parse note lines that start with these emoji.

Example:

```text
💬 p.42 “We are what we repeatedly do.” #quote
✅ p.88 Try this method in my weekly review.
💡 This reminds me of deep work and attention residue.
🗣️ Is reading valuable if we do not act on it?
````

The system should convert these into structured note blocks.

Each note block should have:

* User
* Book
* Note
* Type
* Raw content
* Clean content
* Page number
* Chapter
* Emoji marker
* Tags
* Linked concepts
* Linked books
* Linked authors
* Visibility
* Created time
* Updated time

Filtered dashboards:

* All quotes
* All action items
* All questions
* All key arguments
* All inspiration notes
* All discussion points
* All mind-blowing ideas
* All mental models
* All personal reflections
* All experiments
* All statistics
* All warnings/disagreements
* All notes by book
* All notes by concept
* All notes by tag

---

# 9. Quote Book and Daily Sentence System

Build a quote book system.

Quotes can come from:

* Manual quote capture
* Book note emoji marker `💬`
* Highlight extraction
* AI extraction from notes
* Imported Markdown
* Forum quote references

Each quote should store:

* Quote text
* Book
* Author
* Page number
* Chapter
* Original note block
* User comment
* Tags
* Category
* Emotional tone
* Why it matters
* Visibility
* Created date
* Last resurfaced date

Build a “Daily Sentence” or “Today’s Page” feature.

Every day, the homepage should show one sentence, quote, idea, question, or note from the database.

Daily display should include:

* The sentence or quote
* Source book
* Author
* Page number
* Chapter if available
* Related note
* Related concepts
* Button: open book
* Button: open full note
* Button: open source page/reference
* Button: add reflection
* Button: share to forum
* Button: mark as meaningful
* Button: skip
* Button: resurface later

Selection logic:

* Prefer high-value notes.
* Prefer quotes with page numbers.
* Include notes not reviewed recently.
* Include five-star book notes more often.
* Include notes tagged as important.
* Include notes connected to current reading goals.
* Avoid repeating the same sentence too often.
* Allow random mode.
* Allow category-based mode.
* Allow “from my current book” mode.
* Allow “from five-star books only” mode.
* Allow “from action items only” mode.
* Allow “from quotes only” mode.

The daily sentence should be stored historically.

Daily sentence history should show:

* Date
* Displayed quote/note
* User reaction
* Reflection written that day
* Whether user opened source
* Whether user shared it
* Whether it led to an action item

---

# 10. Source Location and Open-Back System

Every note, quote, action item, and atomic concept should be traceable back to its source.

The system should support source references:

* Book
* Author
* Chapter
* Page number
* Section title
* Reading session
* Original raw capture
* Original uploaded image/PDF
* Original mind map
* Original forum post
* Original atomic note

Every displayed note should have an “Open Source” button.

Open Source should take the user to:

1. The book detail page.
2. The exact note block.
3. The quote or action item.
4. The relevant page/chapter metadata.
5. Related concepts and backlinks.

The app does not need to open a physical book, but it should clearly show:

* Book title
* Cover
* Author
* Page number
* Chapter
* Original captured text
* User reflection
* Related notes

---

# 11. Atomic Notes and Bidirectional Links

The app must support Obsidian-style atomic notes.

Syntax:

```text
[[Concept Name]]
```

When a user writes `[[Deep Work]]`, the system should:

1. Detect the concept.
2. Create the concept if it does not exist.
3. Link the current note block to the concept.
4. Show backlinks from the concept page.
5. Show all books mentioning this concept.
6. Show all notes mentioning this concept.
7. Show all quotes mentioning this concept.
8. Show all forum discussions mentioning this concept.

Atomic note fields:

* Title
* Slug
* Definition
* Main content
* User
* Visibility
* Tags
* Linked books
* Linked notes
* Linked quotes
* Linked authors
* Linked forum threads
* Created time
* Updated time

Concept page should show:

* Definition
* User’s own explanation
* Related books
* Related quotes
* Related notes
* Related action items
* Related forum posts
* Backlinks
* Forward links
* Graph view
* Timeline of when the concept appeared

Bidirectional link types:

* Book to book
* Book to author
* Book to concept
* Book to quote
* Book to action item
* Book to forum thread
* Note to concept
* Note to quote
* Note to action item
* Concept to concept
* Quote to concept
* Forum thread to book
* Forum thread to concept
* User idea to book
* User idea to concept

---

# 12. Structured Thinking and Structured Forum Posts

The forum should not only be a normal forum. It should encourage structured thinking.

Forum post types:

* General discussion
* Book discussion
* Quote discussion
* Concept discussion
* Reading question
* Debate
* Personal reflection
* Action experiment
* Book recommendation
* Reading challenge
* Study group
* Summary sharing
* Note sharing

Structured discussion templates:

## Template 1 — Book Discussion

Fields:

* Book
* Topic
* Main question
* Key quote
* Page number
* My interpretation
* Why it matters
* Questions for others

## Template 2 — Claim / Evidence / Reflection

Fields:

* Claim
* Evidence from book
* Page number
* My reflection
* Counterargument
* Application

## Template 3 — Idea to Action

Fields:

* Idea
* Source book
* Page number
* Why it matters
* Action I will try
* Expected result
* Review date

## Template 4 — Quote Discussion

Fields:

* Quote
* Book
* Author
* Page number
* Context
* Interpretation
* Related concepts
* Discussion question

Forum features:

* Categories
* Threads
* Comments
* Nested replies if practical
* Likes
* Bookmarks
* Reports
* Moderation
* Pinned posts
* Locked posts
* Tags
* Attach book
* Attach quote
* Attach concept
* Attach note
* Convert private note to public discussion draft
* Share daily sentence to forum
* Follow discussions
* Follow books
* Follow concepts
* Follow users

---

# 13. Book Detail Page

Each book detail page should be a central hub.

Sections:

1. Cover and metadata
2. Reading status
3. Progress
4. Rating
5. Personal purpose for reading
6. Reading questions
7. Three-sentence summary
8. Mind map / visual notes
9. Detailed notes
10. Quotes
11. Action items
12. Atomic concepts
13. Related books
14. Related authors
15. Related forum discussions
16. Reading sessions
17. Daily sentences from this book
18. AI suggestions
19. Export options

Actions:

* Edit book
* Start reading session
* Quick capture
* Add quote
* Add action item
* Add concept
* Add forum discussion
* Generate summary
* Generate mind map
* Export Markdown
* Export CSV
* Share public note

---

# 14. Homepage / Personal Dashboard

The personal homepage should maximize reading experience.

Dashboard sections:

1. Daily sentence / quote of the day
2. Currently reading books
3. Reading progress
4. Quick capture input
5. Today’s reading plan
6. Recent notes
7. Recent quotes
8. Recent action items
9. Concepts resurfaced today
10. Books to continue
11. Unprocessed inbox items
12. Recommended next book
13. Five-star book resurfacing
14. Forum replies
15. Reading statistics
16. Knowledge graph preview

Daily sentence card must be visually prominent.

It should show:

* Sentence or quote
* Book cover
* Book title
* Author
* Page number
* Buttons:

  * Open source
  * Add reflection
  * Save again
  * Share to forum
  * Next sentence

---

# 15. Visualization

Build visualizations for reading knowledge.

Required visualizations for MVP or near-MVP:

* Reading progress chart
* Books by category
* Books by rating
* Books by status
* Quotes by book
* Action items by book
* Concepts by frequency
* Recent reading timeline

Advanced visualization:

* Knowledge graph showing books, concepts, notes, quotes, and authors
* Concept cluster view
* Book relationship graph
* Daily sentence history timeline
* Reading heatmap
* Tag network

Graph node types:

* Book
* Author
* Concept
* Quote
* Note
* Forum thread
* Action item

Graph edge types:

* Mentions
* Authored by
* Related to
* Quote from
* Action from
* Discussed in
* Similar to
* Inspired by

---

# 16. Search

Implement powerful search.

Search should cover:

* Books
* Authors
* Notes
* Quotes
* Action items
* Atomic concepts
* Tags
* Forum threads
* Comments
* Daily sentence history
* Reading sessions

Search filters:

* Type
* Book
* Author
* Category
* Tag
* Rating
* Reading status
* Page number range
* Date
* Visibility
* Emoji marker
* Concept
* Forum category

Search modes:

* Exact keyword search
* Tag search
* Book search
* Quote search
* Concept search
* Forum search

Future semantic search:

* Search by meaning
* “Find notes similar to this thought”
* “Find all books that mention this concept”
* “Find quotes related to discipline”
* “Find action items I have not done”

---

# 17. AI Assistant Architecture

The app should include an AI assistant architecture.

AI features:

1. Classify a book.
2. Suggest categories and tags.
3. Convert messy capture into structured note.
4. Extract quotes.
5. Extract action items.
6. Extract key arguments.
7. Extract questions.
8. Suggest related books.
9. Suggest related concepts.
10. Generate three-sentence summary.
11. Generate chapter summary.
12. Generate mind map outline.
13. Generate Mermaid diagram.
14. Generate forum discussion draft.
15. Generate daily review prompt.
16. Suggest what to read next.
17. Suggest where a new note should be linked.
18. Suggest whether a note should become an atomic concept.
19. Rewrite raw notes into clean Markdown.
20. Generate “how can I apply this?” action plan.

Important AI rules:

* AI must never overwrite user content automatically.
* AI output must be saved as draft or suggestion.
* User can accept, edit, or reject AI suggestions.
* Store AI interactions where useful.
* App must work without AI key.
* AI provider must be configurable.
* Failed AI calls should not break the app.

AI service interface should include methods like:

* classifyBook(book)
* processRawCapture(capture)
* summarizeBookNotes(note)
* extractStructuredBlocks(note)
* suggestTags(content)
* suggestConcepts(content)
* generateMindMap(note)
* generateForumPrompt(note)
* generateDailyReflectionPrompt(quote)

---

# 18. Import and Export

Import features:

* Import Markdown book note
* Import CSV book list
* Import quote CSV
* Import manual book data
* Upload mind map PDF/image
* Upload cover image
* Import notes with emoji markers

Export features:

* Export book note as Markdown
* Export book library as CSV
* Export quote book as CSV
* Export atomic notes as Markdown
* Export all notes in Obsidian-compatible format
* Export daily sentence history

Markdown export should include:

* YAML frontmatter
* Book metadata
* Three-sentence summary
* Mind map links
* Notes
* Quotes
* Action items
* Atomic links using `[[Concept]]`
* Tags

---

# 19. Database Schema Requirements

Design a complete MySQL schema with JPA entities.

At minimum include these entities:

## User and Auth

* User
* UserProfile
* Role
* UserRole

## Books

* Book
* Author
* BookAuthor
* UserBook
* BookCategory
* BookTag
* ReadingStatus
* ReadingSession

## Notes

* BookNote
* NoteBlock
* RawCapture
* Quote
* ActionItem
* AtomicNote
* AtomicLink
* Tag
* NoteTag
* ConceptTag

## Source and Linking

* SourceReference
* Backlink
* EntityLink

## Daily Sentence

* DailySentence
* DailySentenceHistory
* DailyReflection

## Media

* FileAsset
* MindMapAsset
* CoverAsset

## Forum

* ForumCategory
* ForumThread
* ForumComment
* ForumLike
* ForumBookmark
* ForumReport
* ForumAttachment

## Social

* Follow
* Notification

## AI

* AIInteraction
* AISuggestion

## Admin

* ModerationAction
* SystemSetting

The schema should support:

* Many-to-many books and authors
* Many-to-many books and tags
* User-specific book status and rating
* Private/public/unlisted notes
* Quotes with page numbers
* Action items with status
* Atomic notes and backlinks
* Forum threads linked to books, quotes, notes, and concepts
* Daily quote/sentence resurfacing
* Raw captures processed into structured notes
* Media uploads linked to books and notes
* AI suggestions before user acceptance

---

# 20. API Endpoint Requirements

Design RESTful APIs.

## Auth

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/logout
* GET /api/auth/me

## Users

* GET /api/users/me
* PUT /api/users/me
* GET /api/users/{id}
* GET /api/users/{id}/public-profile

## Books

* GET /api/books
* POST /api/books
* GET /api/books/{id}
* PUT /api/books/{id}
* DELETE /api/books/{id}
* POST /api/books/{id}/add-to-library
* PUT /api/user-books/{id}/status
* PUT /api/user-books/{id}/progress
* PUT /api/user-books/{id}/rating
* GET /api/user-books
* GET /api/user-books/currently-reading
* GET /api/user-books/five-star
* GET /api/user-books/anti-library

## Reading Sessions

* POST /api/reading-sessions/start
* PUT /api/reading-sessions/{id}/pause
* PUT /api/reading-sessions/{id}/end
* GET /api/reading-sessions/book/{bookId}
* GET /api/reading-sessions/me

## Quick Capture

* POST /api/captures
* GET /api/captures/inbox
* GET /api/captures/{id}
* PUT /api/captures/{id}
* POST /api/captures/{id}/process
* POST /api/captures/{id}/accept-ai
* POST /api/captures/{id}/convert-to-note
* POST /api/captures/{id}/convert-to-quote
* POST /api/captures/{id}/convert-to-action
* POST /api/captures/{id}/convert-to-forum-thread

## Notes

* GET /api/notes
* POST /api/notes
* GET /api/notes/{id}
* PUT /api/notes/{id}
* DELETE /api/notes/{id}
* POST /api/notes/{id}/parse
* POST /api/notes/{id}/extract-quotes
* POST /api/notes/{id}/extract-actions
* POST /api/notes/{id}/export-markdown

## Note Blocks

* GET /api/note-blocks
* POST /api/note-blocks
* PUT /api/note-blocks/{id}
* DELETE /api/note-blocks/{id}
* GET /api/note-blocks/type/{type}

## Quotes

* GET /api/quotes
* POST /api/quotes
* GET /api/quotes/{id}
* PUT /api/quotes/{id}
* DELETE /api/quotes/{id}
* GET /api/quotes/random
* GET /api/quotes/book/{bookId}

## Daily Sentence

* GET /api/daily-sentence/today
* POST /api/daily-sentence/generate
* POST /api/daily-sentence/{id}/reflect
* POST /api/daily-sentence/{id}/skip
* POST /api/daily-sentence/{id}/save
* GET /api/daily-sentence/history

## Atomic Notes

* GET /api/concepts
* POST /api/concepts
* GET /api/concepts/{id}
* PUT /api/concepts/{id}
* DELETE /api/concepts/{id}
* GET /api/concepts/{id}/backlinks
* GET /api/concepts/{id}/books
* GET /api/concepts/{id}/quotes
* POST /api/concepts/parse-links

## Forum

* GET /api/forum/categories
* POST /api/forum/categories
* GET /api/forum/threads
* POST /api/forum/threads
* GET /api/forum/threads/{id}
* PUT /api/forum/threads/{id}
* DELETE /api/forum/threads/{id}
* POST /api/forum/threads/{id}/like
* POST /api/forum/threads/{id}/bookmark
* POST /api/forum/threads/{id}/report
* GET /api/forum/threads/book/{bookId}
* GET /api/forum/threads/concept/{conceptId}
* POST /api/forum/comments
* PUT /api/forum/comments/{id}
* DELETE /api/forum/comments/{id}
* POST /api/forum/comments/{id}/like
* POST /api/forum/comments/{id}/report

## Search

* GET /api/search?q=
* GET /api/search/books?q=
* GET /api/search/notes?q=
* GET /api/search/quotes?q=
* GET /api/search/concepts?q=
* GET /api/search/forum?q=

## AI

* POST /api/ai/classify-book
* POST /api/ai/process-capture
* POST /api/ai/summarize-note
* POST /api/ai/extract-quotes
* POST /api/ai/extract-actions
* POST /api/ai/suggest-tags
* POST /api/ai/suggest-concepts
* POST /api/ai/generate-mindmap
* POST /api/ai/generate-forum-prompt

## Admin

* GET /api/admin/users
* PUT /api/admin/users/{id}/role
* PUT /api/admin/users/{id}/suspend
* GET /api/admin/reports
* PUT /api/admin/reports/{id}/review
* PUT /api/admin/forum/threads/{id}/lock
* PUT /api/admin/forum/threads/{id}/pin
* PUT /api/admin/content/{id}/hide

---

# 21. Frontend Page Structure

Build these pages:

## Public Pages

* Landing page
* Public library
* Public book page
* Public note page
* Public quote page
* Forum home
* Forum category page
* Forum thread page
* Login
* Register

## Private User Pages

* Dashboard
* My Library
* Add Book
* Edit Book
* Book Detail
* Book Note Editor
* Quick Capture Inbox
* Reading Session Page
* Quotes Dashboard
* Action Items Dashboard
* Atomic Concepts
* Concept Detail
* Knowledge Graph
* Daily Sentence History
* Search Page
* Settings
* Profile

## Forum Pages

* Forum Home
* Category Page
* Thread Detail
* Create Thread
* Edit Thread
* Book Discussion Page
* Concept Discussion Page

## Admin Pages

* Admin Dashboard
* User Management
* Book Management
* Forum Category Management
* Report Review
* Moderation Log
* System Settings

---

# 22. Frontend Components

Create reusable components.

## Layout

* AppLayout
* PublicLayout
* DashboardLayout
* AdminLayout
* Sidebar
* TopNav
* Breadcrumbs
* ThemeToggle

## Book Components

* BookCard
* BookTable
* BookFilterBar
* BookSearchBox
* BookMetadataForm
* BookProgressBar
* BookRating
* BookStatusBadge
* BookSourcePanel
* RelatedBooksPanel

## Note Components

* NoteEditor
* MarkdownPreview
* ThreeSentenceSummaryEditor
* MindMapUpload
* NoteBlockList
* EmojiMarkerBadge
* QuoteBlock
* ActionItemBlock
* ConceptLink
* BacklinkPanel
* SourceReferencePanel

## Quick Capture

* QuickCaptureBox
* CaptureInboxList
* CaptureProcessingPanel
* CaptureAIResultCard
* CaptureConvertActions

## Daily Sentence

* DailySentenceCard
* DailyReflectionEditor
* DailySentenceHistoryList
* SourceOpenButton

## Visualization

* KnowledgeGraph
* ReadingStatsChart
* CategoryChart
* RatingChart
* ReadingTimeline
* ConceptFrequencyChart

## Forum

* ForumCategoryCard
* ThreadList
* ThreadEditor
* ThreadDetail
* CommentList
* CommentEditor
* StructuredPostTemplateSelector

## Admin

* UserAdminTable
* ReportReviewTable
* ModerationActionPanel
* SystemSettingForm

---

# 23. Note Parsing Logic

Implement parsing logic for:

1. Emoji markers
2. Tags
3. Page numbers
4. Chapter references
5. Internal concept links
6. Book links
7. Quote markers
8. Action item markers

Examples:

```text
💬 p.45 “The impediment to action advances action.” #quote [[Stoicism]]
```

Should extract:

* Type: quote
* Page: 45
* Quote text
* Tag: quote
* Concept: Stoicism

```text
✅ p.80 Try this habit loop tomorrow. #todo [[Habit Design]]
```

Should extract:

* Type: action item
* Page: 80
* Action content
* Tag: todo
* Concept: Habit Design

```text
💡 This reminds me of [[Deep Work]] and attention residue.
```

Should extract:

* Type: inspiration
* Concept: Deep Work

The parser should be deterministic and not depend on AI.

AI can improve or suggest, but basic parsing must work without AI.

---

# 24. Daily Sentence Selection Logic

Implement a service that selects one item per day.

Candidate types:

* Quote
* Inspiration note
* Key argument
* Personal reflection
* Question
* Action item
* Atomic note excerpt

Selection score should consider:

* Book rating
* Note importance
* Whether it has page number
* Whether it has source book
* Whether it has not been shown recently
* Whether it is connected to active reading goals
* Whether it is from a currently reading book
* Whether it is from a five-star book
* User preference

Basic formula:

```text
score =
  bookRatingWeight
  + importanceWeight
  + hasPageNumberWeight
  + freshnessWeight
  + activeGoalWeight
  + randomFactor
```

The system should store the selected daily sentence so it remains stable for that day.

---

# 25. Security Requirements

Implement:

* Password hashing
* JWT/session security
* Role-based access control
* Private note protection
* User ownership checks
* Input validation
* File upload validation
* File size limits
* Safe Markdown rendering
* XSS protection
* CSRF protection if using cookie sessions
* SQL injection prevention through JPA
* Admin route protection
* Moderator route protection
* Rate limiting if practical

Visibility rules:

* Private content only visible to owner.
* Unlisted content visible only with direct link.
* Public content visible to everyone.
* Forum content public unless hidden/moderated.
* Admins can review reported public content.
* Admins should not casually expose private notes in public APIs.

---

# 26. Performance Requirements

Optimize for:

* Fast dashboard loading
* Paginated book list
* Paginated notes
* Paginated forum threads
* Indexed search fields
* Indexed foreign keys
* Lazy loading for large notes
* Lazy loading graph data
* Efficient quote selection
* Efficient daily sentence generation
* File upload limits
* Caching where practical

Database indexes should include:

* Book title
* Author name
* UserBook user/status/rating
* NoteBlock type
* Quote user/book
* ActionItem user/status
* AtomicNote title
* ForumThread category/book/concept
* Tags
* DailySentence user/date

---

# 27. MVP Scope

Build the MVP first.

MVP must include:

1. User authentication.
2. Personal dashboard.
3. Book CRUD.
4. Personal library.
5. Card-based book UI.
6. Table-based book UI.
7. Book filters.
8. Five-star books view.
9. Reading status and progress.
10. Book detail page.
11. Three-sentence summary.
12. Mind map upload area.
13. Markdown note editor.
14. Emoji marker parsing.
15. Structured note blocks.
16. Quote extraction.
17. Action item extraction.
18. Quick capture box.
19. Capture inbox.
20. Convert capture to note/quote/action.
21. Atomic concept links using `[[Concept]]`.
22. Backlinks for concepts.
23. Daily sentence card.
24. Daily sentence history.
25. Source open-back system.
26. Basic forum categories.
27. Book-specific discussion threads.
28. Comments.
29. Likes and bookmarks.
30. Basic search.
31. Markdown export.
32. Admin report review.
33. Responsive UI.
34. README.
35. `.env.example`.
36. Seed data.

AI can be implemented as an optional service layer in MVP, with mock responses if no API key is configured.

---

# 28. Future Features

After MVP, design the architecture to support:

* Full AI processing
* Voice capture
* OCR for photographed book pages
* Semantic search with embeddings
* Advanced knowledge graph
* Spaced repetition for quotes
* Reading goal planner
* Automatic book recommendations
* Collaborative reading groups
* Public note marketplace
* Mobile app
* Browser extension
* Kindle highlight import
* Obsidian vault import/export
* PDF annotation
* Audio note transcription
* Advanced moderation tools
* Notification system
* Email digest
* Weekly reading review
* Monthly knowledge report

---

# 29. Testing Strategy

Include tests for:

## Backend

* Auth
* Book CRUD
* UserBook status update
* Note parsing
* Emoji marker extraction
* Quote extraction
* Action item extraction
* Concept link parsing
* Daily sentence selection
* Permission checks
* Forum thread creation
* Comment creation
* Search

## Frontend

* BookCard rendering
* Library filters
* Note editor save flow
* Quick capture form
* Daily sentence card
* Forum thread page
* Login/register flows

Use practical testing tools.

---

# 30. Deployment Strategy

Provide local development setup.

Include:

* Backend Spring Boot setup
* Frontend Vue setup
* MySQL setup
* Environment variables
* Database migration or schema setup
* Seed script
* README
* Docker Compose if practical

Environment variables:

```env
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=

JWT_SECRET=
APP_BASE_URL=

AI_PROVIDER=
AI_API_KEY=
AI_BASE_URL=
AI_MODEL=

UPLOAD_DIR=
MAX_UPLOAD_SIZE=
```

---

# 31. Final Spec Requirements

Your technical spec must include:

1. Product overview
2. Product philosophy
3. User personas
4. User stories
5. MVP scope
6. Future scope
7. Full feature list
8. Information architecture
9. Frontend architecture
10. Backend architecture
11. Database schema
12. JPA entity design
13. REST API design
14. Authentication and authorization
15. Quick capture workflow
16. AI processing workflow
17. Note parsing logic
18. Atomic link logic
19. Daily sentence logic
20. Source reference logic
21. Forum logic
22. Admin logic
23. Search logic
24. File upload logic
25. UI page breakdown
26. Component breakdown
27. Security considerations
28. Performance considerations
29. Testing strategy
30. Deployment strategy
31. Implementation milestones
32. Risks and tradeoffs

Make reasonable assumptions where needed.

Do not ask me dozens of questions.

If something is ambiguous, choose a practical default and document the assumption.

The final spec should be detailed enough that you can implement the full MVP after I say "build".

---

# 32. Implementation Behavior After I Say "build"

When I say "build":

1. Start implementing the project.
2. Create the backend Spring Boot project.
3. Create the frontend Vue project.
4. Create the MySQL schema/JPA entities.
5. Create repositories.
6. Create services.
7. Create controllers.
8. Create DTOs.
9. Create validation.
10. Create authentication.
11. Create authorization.
12. Create note parser.
13. Create quick capture workflow.
14. Create daily sentence service.
15. Create atomic link service.
16. Create forum service.
17. Create file upload service.
18. Create frontend pages.
19. Create frontend components.
20. Create API client.
21. Create state management.
22. Create route guards.
23. Create seed data.
24. Create README.
25. Create `.env.example`.
26. Create tests where practical.
27. Continue until the app can run locally.

Prioritize working code over long explanations.

Do not skip hard parts.

Do not replace the requested stack with another stack.

Do not remove features from the MVP unless technically impossible.

If implementation is too long for one response, stop at a logical checkpoint and wait for me to say "continue".

When I say "continue", continue from the exact point where you stopped.

````

如果你想让 Agent **不要先写 spec，而是直接开始做项目**，可以把最后一句改成：

```markdown
Do not only write a spec. First give a short architecture plan, then immediately begin implementing the project.
````

但我更建议你先用上面这个版本，让 Agent 先产出完整技术规格。你确认满意后再发 `build`，这样它后面写代码时不会跑偏。
