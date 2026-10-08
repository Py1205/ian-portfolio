<!-- IMPLEMENTATION NOTES (not public copy)
Current website copy and asset plan, updated October 7, 2026.
Display name: Disputes Portal. Existing /work/disputes360 URL and asset directory remain stable.
Nine user-supplied exports converted to AVIF. Preserve embedded annotations.
Reanalysis runs when new evidence or agent input becomes available. Final submission and closure remain human-executed.
Recommendation images are illustrative alternative states, not a single case sequence or measured outcomes.
All image placeholders are resolved or removed. Navigation images are compact within a full-width frame; recommendation examples are stacked with titles and captions inside their frames.
-->

# Disputes Portal

A workspace for resolving card disputes, connecting case history, evidence, and AI-assisted review.

**Role:** Design Lead · Sole Product Designer at Marqeta
**Scope:** End-to-end design of Disputes Portal, including information architecture, case management, operational workflows, and AI-assisted review
**Timeline:** July 2025–present
**Team:** Product, Engineering, Disputes Operations, and Compliance
**Launch:** General availability · September 2026

<!-- Hero: public/work/disputes360/hero.avif, updated Cover export. Also used on Home and Work thumbnails. -->

## The product and my role

When a cardholder disputes a transaction, an operations agent may need to review the claim, assemble evidence, and submit the case to a card network such as Visa or Mastercard. Some cases require further exchanges with the merchant’s side before they can be resolved.

Disputes Portal brings this work into a dedicated platform. The team’s goal was to consolidate fragmented tools and automate more of the case analysis, involving agents when a case needs human judgment.

I had spent four years designing Marqeta’s previous disputes product inside the Marqeta Dashboard. After exploring a third-party replacement, the company decided to build its own platform.

As the sole designer, I led the design of Disputes Portal through launch. My work covered platform structure, case workflows, reporting, communications, and AI review. This case study focuses on how I connected current work with case history and helped agents resolve the questions AI could not answer.

## 01 · Platform structure

<!-- Leading visual: updated sitemap.avif with embedded annotations. -->

*The navigation separates analytics, intake, transaction lookup, and case work. All Cases and saved views share the same underlying case table.*

### Organizing different ways into the same case work

The old disputes product opened on a case queue inside the Marqeta Dashboard. Other parts of the work depended on Salesforce, Looker, spreadsheets, and manual audit processes.

The standalone platform needed its own navigation. I organized analytics under Home, single and bulk submissions under Intake, and transaction lookup under Cardholder Search. Views became the main area for working through existing cases.

Most dispute agents handle cases initiated by cardholders or call center agents. Creating a case remains available, but their everyday work centers on reviewing and resolving cases already in the system.

In early explorations, Case List and Saved Views sat in separate navigation groups. I brought them together under Views because they share the same underlying case table.

<!-- Navigation comparison: nav-early.avif and nav-current.avif, placed immediately after the early-exploration paragraph. -->

All Cases shows active cases. Assigned to Me filters that set by ownership. Custom Views let agents save a filter configuration and return to that subset directly. Grouping these entry points together makes their relationship explicit: each is a different view of the same case work.

<!-- No additional early sitemap/Views comparison: avoid repeating the leading navigation visual. -->

## 02 · Case lifecycle

<!-- Leading visual: case-page.avif, unannotated and framed. -->

*The current stage opens first, while earlier stages remain accessible within the same case.*

### Keeping current work connected to its history

The case page carries an agent from preparing a dispute to handling its later resolution. In the old product, intake and post-submission work had distinct presentations. The Ops team raised a problem: once a case reached the later stages, referring back to intake context was cumbersome.

Agents needed both case information, such as the amount and creation date, and earlier materials or notes. I proposed a unified lifecycle timeline, which the Ops team supported.

### Giving case information a consistent home

I separated information about the case from content produced during a particular event.

Case Details remains accessible throughout the lifecycle. Agents can expand it to check the amount, reason code, current states, identifiers, and other reference information.

Files, communications, and notes stay associated with the event or round of work that produced them. Agents can inspect earlier material in the context of what happened at that stage.

### Putting the current stage first

The timeline begins with Cardholder Contacted and continues through Open, Ready, submission, and any further resolution events. Each new event appears at the top.

The current stage opens by default with its forms and actions. Completed stages become read-only and collapse below it. Agents can work on what needs attention now, then expand an earlier stage to inspect its details.

<!-- Supporting visual: case-lifecycle-annotated.avif, framed. Explains case context, current work, and accessible history. -->

Long cases still require scrolling. Repeated rounds and deep historical review were less common in the workflow we were designing for, so the layout prioritizes current work while preserving access to earlier details.

The separate Activity tab provides a finer-grained record, including state changes, transaction events, and raw data. It also offers another route to the original materials and internal notes.

<!-- Optional supplementary/collapsed visual only: public/work/disputes360/activity.avif, if suitable. Do not add a full-height Activity screenshot to the main narrative. -->

## 03 · AI-assisted review

<!-- Leading visual: document-review.avif with embedded source, summary, and decision annotations. -->

*Agents review source documents, consult document summaries, and resolve the questions that need human judgment.*

### Bringing agents in when the system needs judgment

AI evaluates case evidence and other conditions to recommend whether a dispute should be submitted. Missing documents, conflicting evidence, or unclear information can prevent a confident decision. Those cases are flagged for human review.

The current product still requires a person to execute the final Submit or Close action. It does not require agents to manually assess every criterion on every case.

My focus was the review mechanism: helping agents understand what AI could not determine, inspect the evidence, and supply the missing judgment.

### Turning analyst instructions into answerable questions

The team’s criteria drew on card-network guidelines for different dispute reasons, known as reason codes. The PRD described these criteria as attributes, but some were written as instructions such as “verify cancellation proof.”

I rewrote them as questions that AI and an agent could answer against evidence.

| PRD attribute | Question for review |
|---|---|
| Verify cancellation proof | Did the cardholder cancel the subscription? |
| Cancellation date < transaction date | Did the cancellation occur before the disputed charge posted? |
| Check for partial credits | Is the disputed amount net of any credit already received? |

Each question needed a clear determination and an evidence source. Whether a subscription was canceled and whether it was canceled before a charge are separate judgments, even when the same document helps answer both.

I also aligned the questions so that Yes consistently supports submission. This keeps the answer’s meaning consistent as agents move through the review. I developed these conversions and discussed their feasibility with Ops, Product, and Engineering.

<!-- No separate visual: the document-review image and text table cover this relationship. -->

### Keeping evidence beside the decision

The review interface keeps the source document beside the questions that need judgment. Agents can open a document summary panel for key findings, review the assessment on the right, and answer what the evidence supports. When evidence is missing, they can request it from the cardholder.

<!-- Do not repeat the full review screenshot here: it now leads the chapter. -->

### Returning human input to the analysis

As new evidence or agent input becomes available, the system reruns its analysis and updates the case recommendation.

The system considers those inputs alongside the evidence and other case conditions. Attributes carry different importance: a No on a critical condition can lead to Do Not Submit, while sufficiently satisfied conditions can support Submit to Network.

Once the review questions are resolved, AI combines the agent’s judgment with the evidence and case conditions to reach a final recommendation: Ready to submit or Do not submit. The agent carries out the final action.

<!-- Two vertically stacked recommendation examples, with titles Final recommendation 1: Ready to submit and Final recommendation 2: Do not submit inside each frame. Explain that resolved review questions lead to a recommendation based on the evidence and blocking conditions; these are alternative examples, not consecutive states. -->

## Launched in September 2026

Disputes Portal reached general availability in September 2026. AI recommendations, human attribute review, and reanalysis are in use alongside the platform’s case management workflows.

My design scope also included reporting, case filters, email templates, bulk upload, and supporting case tabs.

<!-- SUPPORTING GALLERY: Compact existing asset gallery using public/work/disputes360/reporting.avif, filter.avif, email-template.avif, bulk-upload.avif if suitable. Use readable contained images, not new crops or generated composites. Short labels: Reporting / Case filters / Email templates / Bulk upload. If any asset is unsuitable or outdated, use a placeholder for that item. No sequential full-page feature tour. -->

The current release reruns analysis as new evidence or agent input becomes available. Agents retain control of final submission and closure.

My work covered the platform’s overall organization and the detailed interactions agents use to move a case forward: finding the right cases, working through their history, and contributing judgment when AI needs it.
