<!-- IMPLEMENTATION NOTES (not public copy)
User-approved website draft. Supersedes V0. Preserve the numbered chapter hierarchy below.
Each numbered H2 must be followed immediately by its leading visual, before any H3 or body copy. Product/role and launch sections are unnumbered.
Reuse only suitable existing assets in public/work/disputes360. Do not generate images, diagrams, animations, or UI illustrations. Do not extract or crop screenshots supplied in chat or on Desktop. User will supply replacement assets incrementally. Missing, unsuitable, outdated, or uncertain assets must remain intentional placeholders with short English labels. Do not fill them with invented UI or unrelated banners.
Start with static images/placeholders. Future animation concepts describe replacement assets, not work to generate now.
Known unsuitable asset: banner-reason-code.avif has contradictory recommendation/reason text and inconsistent reason-code mapping. Do not use. hero.avif and case-page.avif show an early Open-stage view, not a multi-stage lifecycle; do not use as proof of the complete timeline. sitemap.avif is a suitable existing chapter 01 candidate. Existing reporting/filter/email-template/bulk-upload assets may form a compact supporting gallery if still suitable. Screenshot KPI values are not impact metrics.
No claimed quantified improvement, fabricated user testing, or attribution of build-vs-buy/automation strategy to the designer. Human review is exception-based; final Submit/Close remains human-executed. GA: September 2026. Reanalysis is button-triggered today. Automatic execution and automatic reanalysis are future directions.
-->

# Disputes360

A workspace for resolving card disputes, connecting case history, evidence, and AI-assisted review.

**Role:** Design Lead · Sole Product Designer at Marqeta  
**Scope:** End-to-end design of Disputes360, including information architecture, case management, operational workflows, and AI-assisted review  
**Timeline:** July 2025–present  
**Team:** Product, Engineering, Disputes Operations, and Compliance  
**Launch:** General availability · September 2026

<!-- VISUAL hero: Reuse public/work/disputes360/hero.avif as a general product overview if suitable. Otherwise placeholder: "Disputes360 workspace". No screenshot cropping or invented annotations. -->

## The product and my role

When a cardholder disputes a transaction, an operations agent may need to review the claim, assemble evidence, and submit the case to a card network such as Visa or Mastercard. Some cases require further exchanges with the merchant’s side before they can be resolved.

Disputes360 brings this work into a dedicated platform. The team’s goal was to consolidate fragmented tools and automate more of the case analysis, involving agents when a case needs human judgment.

I had spent four years designing Marqeta’s previous disputes product inside the Marqeta Dashboard. After exploring a third-party replacement, the company decided to build its own platform.

As the sole designer, I led the design across Disputes360. My work covered the platform structure, case workflows, reporting, communications, and AI review. The following sections focus on how I organized the workspace and developed its two core experiences: working through a case and reviewing AI’s unresolved judgments.

## 01 · Platform structure

<!-- LEADING VISUAL 01 (immediately under chapter title): Final product navigation showing Home, Intake, Cardholder Search, Views, Settings, and Views children. Existing public/work/disputes360/sitemap.avif is a suitable candidate; inspect before reuse. If unsuitable, placeholder: "Platform navigation". Do not generate an infographic. -->

*The navigation separates analytics, intake, transaction lookup, and case work. All Cases and saved views share the same underlying case table.*

### Organizing different ways into the same case work

The old disputes product opened on a case queue inside the Marqeta Dashboard. Other parts of the work depended on Salesforce, Looker, spreadsheets, and manual audit processes.

The standalone platform needed its own navigation. I organized analytics under Home, single and bulk submissions under Intake, and transaction lookup under Cardholder Search. Views became the main area for working through existing cases.

Most dispute agents handle cases initiated by cardholders or call center agents. Creating a case remains available, but their everyday work centers on reviewing and resolving cases already in the system.

<!-- SUPPORTING VISUAL 01: Compact comparison of old MQD navigation and standalone Disputes360 navigation. No suitable approved comparison asset currently identified. Placeholder: "From MQD to Disputes360". Do not substitute four-tools-in-one.svg: it explains tool consolidation, not navigation. Do not crop chat screenshots. -->

In early explorations, Case List and Saved Views sat in separate navigation groups. I brought them together under Views because they share the same underlying case table.

All Cases shows active cases. Assigned to Me filters that set by ownership. Custom Views let agents save a filter configuration and return to that subset directly. Grouping these entry points together makes their relationship explicit: each is a different view of the same case work.

<!-- No additional early sitemap/Views comparison: avoid repeating the leading navigation visual. -->

## 02 · Case lifecycle

<!-- LEADING VISUAL 02 (immediately under chapter title): New case page with multiple lifecycle stages, expanded current node, collapsed historical nodes, and Case Details. Placeholder: "Case lifecycle timeline". Existing Open-only hero/case-page images do not demonstrate this concept adequately. User will supply asset. Future optional animation may show current work, expansion of history, and Case Details; do not create it now. -->

*The current stage opens at the top. Earlier stages remain available below, with case-level information accessible throughout.*

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

<!-- SUPPORTING VISUAL 02: Focused old intake/backend vs unified timeline comparison, explaining the structural change rather than repeating the full leading image. Placeholder: "From separate stages to one timeline". User to supply approved exports. -->

Long cases still require scrolling. Repeated rounds and deep historical review were less common in the workflow we were designing for, so the layout prioritizes current work while preserving access to earlier details.

The separate Activity tab provides a finer-grained record, including state changes, transaction events, and raw data. It also offers another route to the original materials and internal notes.

<!-- Optional supplementary/collapsed visual only: public/work/disputes360/activity.avif, if suitable. Do not add a full-height Activity screenshot to the main narrative. -->

## 03 · AI-assisted review

<!-- LEADING VISUAL 03 (immediately under chapter title): Actual document review interface showing documents, AI reasoning, and attribute Yes/No controls. Placeholder: "Evidence and human review". No suitable actual review asset currently supplied. Do not substitute a recommendation banner, generate a diagram, or extract chat screenshots. Future user-supplied animation could cover review through reanalysis; if so remove the redundant final flow visual. -->

*Agents inspect the evidence alongside AI’s reasoning and the questions that need human judgment.*

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

<!-- SUPPORTING VISUAL 03A: One actual cancellation example connecting the question, evidence, and Yes/No control. Placeholder: "From criterion to review question". Do not generate illustrative UI. Keep the table above as text; full mapping belongs in supplementary material. -->

### Keeping evidence beside the decision

The review interface places documents on the left, AI reasoning in the middle, and attribute states with Yes/No controls on the right. Agents can inspect the source material while answering the question it relates to.

<!-- Do not repeat the full review screenshot here: it now leads the chapter. -->

An early version used separate Conflict, Uncertain, and Missing labels. I consolidated them because the immediate task was the same: inspect the evidence and make a determination.

I also explored separate Summary and Attributes tabs, then brought them into one scrolling panel. That put more information on screen, but kept the assessment and its questions available together.

<!-- SUPPORTING VISUAL 03B: Two focused iteration comparisons: labels consolidated; tabs to scrolling panel. Placeholder: "Review interface iterations". User to supply exports; no invented before/after designs. These are design iterations, not evidence of user testing. -->

### Returning human input to the analysis

An individual Yes or No does not immediately change the recommendation. The agent completes the questions requiring review, then clicks a button to run the analysis again.

The system considers those inputs alongside the evidence and other case conditions. Attributes carry different importance: a No on a critical condition can lead to Do Not Submit, while sufficiently satisfied conditions can support Submit to Network.

The updated recommendation gives the agent the next action. AI identifies where it needs judgment, the agent supplies it, and the system reassesses the case.

<!-- SUPPORTING VISUAL 03C: Unresolved questions > completed human inputs > button-triggered reanalysis > updated recommendation. Placeholder: "Human input to updated recommendation". Do not generate this flow. Future supplied examples must be labeled illustrative; confidence numbers are not measured results. Remove this slot if a future leading animation already demonstrates the full flow. -->

## Launched in September 2026

Disputes360 reached general availability in September 2026. AI recommendations, human attribute review, and reanalysis are in use alongside the platform’s case management workflows.

My design scope also included reporting, case filters, email templates, bulk upload, and supporting case tabs.

<!-- SUPPORTING GALLERY: Compact existing asset gallery using public/work/disputes360/reporting.avif, filter.avif, email-template.avif, bulk-upload.avif if suitable. Use readable contained images, not new crops or generated composites. Short labels: Reporting / Case filters / Email templates / Bulk upload. If any asset is unsuitable or outdated, use a placeholder for that item. No sequential full-page feature tour. -->

The current release retains human execution of submission and closure. The team is considering automatic execution for high-confidence cases and automatic reanalysis after review.

My work covered the platform’s overall organization and the detailed interactions agents use to move a case forward: finding the right cases, working through their history, and contributing judgment when AI needs it.
