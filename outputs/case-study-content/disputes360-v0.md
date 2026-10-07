Enterprise platform · Disputes ops · AI-augmented · 2025 – present

# Disputes360: an AI-augmented platform built around the agent.

I'd owned design on Marqeta's disputes product for four years before I led design on its replacement. This case study is about what the new platform became, and how AI fits inside regulated, agent-facing work.

Role

Design lead, Disputes360

Timeline

Jul 2025 – present (Alpha Q4 2025, Rolling Beta Q1 2026, GA Mar 2026)

Team

Product, Engineering, Disputes Ops, Compliance

Skills

Platform strategy, systems thinking, AI interaction design

![Disputes360 case lifecycle view with AI recommendation](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/hero.avif)

Chapter 1

## The inheritance

I owned design on Marqeta's disputes product for four years before I led design on its replacement. Four years of improvements made the old system better. None of them fixed what was actually broken about it.

The product ran inside the Marqeta Dashboard, the operations console agents used to manage cases across Visa, Mastercard, and Pulse. From 2021 to 2025, I shipped improvement after improvement: CSAT from 2.4 to 4.3, $1.5M in operational savings, Reg E across three regions. Real numbers, but the right size for incremental work.

The architecture was the ceiling. A monolithic app on a two-week release cycle, holding together five disconnected systems (MQD, Salesforce, spreadsheets, Looker, manual audit). Agents weren't using one tool. They were stitching five together with their own attention.

In 2023 the team tried to buy a replacement. Quavo couldn't handle Marqeta's network integrations, regional regulatory differences, or customer-specific logic. The buy path closed. By mid-2025 the company committed to build, and I started leading design on Disputes360 in July.

![Diagram showing four legacy tools — MQD case management, Salesforce communications, Looker reporting, and a workforce-management spreadsheet — consolidated into Disputes360](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/four-tools-in-one.svg)

Four disconnected tools — case management, communications, reporting, and workforce management — consolidated into Disputes360.

Chapter 2

## The product I designed

The team set the direction (consolidate five tools into one platform). As sole designer on Disputes360, I led every surface of what consolidation became, from the sitemap to the case page to the AI integration. The center of gravity is the case page, where agents spend most of their day.

![Disputes360 sitemap showing the product's information architecture across Home, Intake, Cardholder Search, Views, and Settings](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/sitemap.avif)

The Disputes360 sitemap. Five top-level areas — Home, Intake, Cardholder Search, Views, and Settings — plus two global affordances (search and program filter) that persist across the product.

The dispute lifecycle tab is the surface where an agent works one dispute. The AI banner sits at the top, summarizing the case state with a recommended action. Below it, a case management section and event tracker surface the case's history in reverse. A reference side panel runs alongside with transaction, cardholder, and card data.

![Disputes360 dispute lifecycle tab showing the AI recommendation banner, case management and event tracker, and reference side panel](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/case-page.avif)

The dispute lifecycle tab. The AI recommendation banner sits above the case management and event tracker; a reference side panel runs alongside with transaction, cardholder, and card data.

Beyond the dispute lifecycle tab, I designed the reporting dashboard, the cases list and its filter system, email templating for cardholder communications, bulk upload for ops teams, and the supporting tabs on the case (documents, evidences, activity, transactions, raw). The product surface is wide. The dispute lifecycle tab is where AI integration meets agent judgment, which is where the design work goes deep.

![Disputes360 reporting dashboard with KPI cards and charts](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/reporting.avif)

Reporting. The home dashboard agents and managers land on — KPI cards, dispute volume over time, win-rate breakdowns by reason code.

![Disputes360 cases list table view with status pills](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/table-view.avif)

Cases list. The all-cases table where agents triage. Each row is a case, with state, dispute reason, and amount surfaced inline.

![Disputes360 filter panel with dispute state and reason facets](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/filter.avif)

Filter. A faceted filter panel for slicing the cases list. Selected filters mirror to the right rail so agents can build and save complex views.

![Disputes360 email templating with variable picker](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/email-template.avif)

Email templating. Configurable cardholder communications keyed to case events, with a variable picker for case fields like dispute amount and program name.

![Disputes360 bulk upload screen with drag-and-drop and file status](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/bulk-upload.avif)

Bulk upload. Lets ops teams submit hundreds of disputes in one file, with templates per dispute type and a status table for tracking rejected entries.

![Disputes360 activity tab showing a timestamped case event log with a filter panel for event types](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/activity.avif)

Activity. A timestamped log of everything that happened to a case. Agents filter by event type to cut it down to what they actually need.

Chapter 3

## The AI layer

Every case in Disputes360 opens with a banner. The banner is what the AI thinks the agent should do. This chapter is about how the AI gets to that conclusion, and where I designed myself into it.

### Banner: the AI's read of the case

![Ready to submit banner — confidence high, action: Submit to network](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/banner-ready.avif)

![Agent review needed banner — three attributes need review](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/banner-agent-review.avif)

![Reason code change recommended banner — suggests changing to 13.4 Not as Described](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/banner-reason-code.avif)

![Do not submit banner — transaction exceeds VISA 120-day limit, action: Acknowledge](/Users/ianpan/Downloads/ian-portfolio-main/public/work/disputes360/banner-do-not-submit.avif)

The four banner states: Ready to submit, Agent review needed, Reason code change recommended, and Do not submit.

The AI features in Disputes360 shipped in Q1 2026. The goal is to make case decisions faster, more accurate, and more economical: fewer cases submitted that shouldn't be, more cases auto-processed that should be, [placeholder for specific automation % and savings].

Agents open dozens of cases a day. The banner sits at the top of every case page, before any case detail. It tells the agent what the AI thinks (the state) and what to do next (an action button: Submit, Acknowledge, Review items, or Change the reason code).

### Where the banner comes from

The banner doesn't come from one model. A few factors feed into it: program-level rules, some case context, and the AI's evaluation of evidence against the requirements of the reason code.

Evidence is the dominant factor. The rest of this chapter is about that part, because that's where most of the design work lives.

### Evidence into judgment

The team had a working concept of what the AI should evaluate. Every reason code (Visa 13.1, 13.6, etc.) has a set of conditions that determine whether a dispute can win. The PRD called these attributes. It pointed at the right structure, but the attributes themselves weren't defined concretely enough for AI or humans to evaluate consistently. That part needed design.

I did three things to make the schema work.

First, I made each attribute specific. Not “merchant met their obligation” but “return label was generated within the timeframe,” “credit was issued within the required window.” Things AI can check against documents and a human can verify.

Second, I rewrote each attribute as a yes/no question. Attributes are the criteria for a successful dispute, so they need a binary answer the AI and the agent can both produce.

Third, I aligned the yes answer across all attributes to mean the same thing: this case is closer to being submittable. A yes is always good news. A no is always bad. Without this alignment, aggregating attribute states into a case-level recommendation gets messy fast.

> [Image placeholder] Concept diagram: reason code → attributes (as yes/no questions) → AI scanning documents → three-state evaluation → case-level banner state

With the schema set, the rest of the system follows. The AI evaluates each attribute against the case documents and returns one of three states:

- **Confirmed-yes:** evidence supports the attribute
- **Confirmed-no:** evidence contradicts it
- **Unconfirmed:** evidence is missing, or sources disagree

The states aggregate into the four banner states. All yes goes to Ready to submit. A confirmed-no on a critical attribute goes to Do not submit. Any unconfirmed goes to Agent review needed: the AI doesn't know, so a human needs to look.

The fourth banner state is the one I want to call out. Reason code change recommended fires when the evidence is solid, just for a different reason code than the one the case was filed under. The AI isn't unsure. It's pointing out that the case was filed wrong. Most AI systems don't have a slot for this kind of correction. Adding one caught a class of cases that binary evaluation would have silently mishandled.

### Where the agent sees all of this

When an agent wants to verify or override the banner, they open the document review surface. Documents on the left. AI reasoning in the middle. Attribute states with controls on the right.

> [Image placeholder] Document review screen, current version

Co-locating evidence, reasoning, and controls matters because an agent can't meaningfully challenge a judgment they can't see the basis for. If the AI says an attribute is unconfirmed, the agent needs to see the specific document and the specific gap, on the same screen, with the override one click away.

This surface went through five versions. Two changes are worth naming.

The first version of the panel tagged each attribute with one of three labels: Conflict, Uncertain, Missing. It looked thoughtful, but the labels just described different flavors of “not yes.” The agent's job was the same in all three cases: open the evidence, decide. I dropped the labels and kept one state, unconfirmed. Less to read, clearer ask.

A later version split the panel into two tabs, Summary and Attributes. I expected agents would want a high-level view before drilling in. They didn't. They wanted everything visible at once. I pulled the tabs out and let the panel scroll. The version that ships has more on screen than I would have argued for at the start, and it works better.

> [Image placeholder] Iteration comparison: V1 labeled panel vs. current, and V4 tabbed vs. V5 current

### What's next

Right now every case still passes through an agent. The AI recommends; the agent confirms. That's the right place for the product to be while the model is being trained and trust is being built.

The direction is conditional automation. For cases where the AI is highly confident across all attributes and evidence is complete, the next version of the system will skip the recommendation and submit the case directly. The agent's role moves from reviewing every case to reviewing the cases where the system is unsure. The mechanics that make this possible (specific attributes, yes/no schema, three-state evaluation, multi-factor compilation) are already in place. The change is in how much of the loop the human stays in.

Chapter 4

## Closing the loop between design and production

The new platform deploys differently: smaller surface, faster cycles. Design couldn't be the slow step.

I ran three pilots inside Disputes360 to close the gap between design intent and shipped code.

VQA (visual QA automation)

AI compares shipped UI against the Figma source, flags mismatches, and generates pull requests with corrections.

Coded prototypes

For complex flows, I prototype directly in React inside engineering's codebase. The conversation with engineering happens in code, not in interpretation.

Deliver-in-repo

For component-level work, the design artifact is a merged commit on the feature branch.

These aren't three separate initiatives. They're the same instinct expressed three ways: shorten the distance between design intent and shipped code.

[Metrics to fill: design-to-PR cycle time reduction, PRs generated via VQA pilot, components shipped via in-repo workflow]

Closing

For four years I made the old product better. Then I led the design of the platform replacing it. The judgment that mattered most wasn't about an interface. It was knowing when incremental improvement had run out.

Disputes360 is the first app in Marqeta's connected app ecosystem. The patterns I established here will be inherited by the next six apps. The work in this case study is one product. The work it enables is a platform.

