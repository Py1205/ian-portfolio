Case Study

# Designing the banking app behind Uber Pro Card UK

Role

Senior Product Designer

Timeline

Feb 2025 – Apr 2025

Team

Product Managers, Engineers, Ops, Legal & Compliance, Uber UK

Skills

Information Architecture, Systems Thinking, Problem Reframing

![Autobahn wallet home screen](/Users/ianpan/Downloads/ian-portfolio-main/public/work/autobahn/wallet.avif)

![Transaction details screen](/Users/ianpan/Downloads/ian-portfolio-main/public/work/autobahn/transactions.avif)

![Dispute this transaction screen](/Users/ianpan/Downloads/ian-portfolio-main/public/work/autobahn/disputes.avif)

The Project

## Two companies, one app, three hundred thousand earners

Uber wanted to give every UK driver and courier a real banking experience: instant payouts, a debit card, savings, cashback, the whole thing. Marqeta designed, built, and hosted the app. Uber put their brand on it and rolled it out to 300,000 earners.

It was also Marqeta's first real proof that we could ship a white-label platform. So every design decision had to do two jobs: work for the earner today, and hold up for customers we hadn't even signed yet.

What I owned

Wallet (Home), Transactions (list + details), Disputes (self-service), and Cashback/Rewards. The stuff earners actually open the app for.

Constraints

Two apps connected via deep links and SSO. UK financial rules (PSD2). Uber's brand review. Product workshop in March, testing in May, launch in September.

When an Uber driver opens this app, they see a balance, some transactions, and a way to report a problem. They don't see the months of work underneath. Here are three stories about what it took to make it look that easy.

Story 1

## Wallet: "What is this product, actually?"

The home screen looks like a layout question. It's actually a question about how earners should think about the whole product.

The wallet is the first thing earners see, every time. Before drawing a single screen, I had to answer one question: how should they think about their money inside this app? The answer would shape the IA, the navigation, and how far the product could grow later.

> [Image placeholder] Side-by-side comparison of Version 1a, Version 1b, and Version 2 — the three Wallet explorations

### Three directions explored

We tried three different structures. Each one said something different about what this app actually *is*.

### Read the details on each direction

Version 1a — Dual Accounts (tabs)

Current and Savings as two explicit accounts, switched with tabs. Card management on its own page. Familiar from any banking app, but earners have to figure out how the accounts and the card connect.

Version 1b — Dual Accounts (swipe)

Same idea, different gesture: swipe between accounts. Smoother in motion, but swipe can feel unclear. You're not sure where you are.

Version 2 — Card-centric Home

The card is the home screen. Balance, card art, and activity in one view. Simplest to grasp, but it boxes the product in. Once earners think of it as "just a card," it's hard to grow into savings, credit, or anything bigger.

The direction we didn't ship

We also looked at hiding savings entirely, with one visible balance and funds split behind the scenes. Easiest for the user, but it felt opaque and the backend got complicated. We dropped it.

### The decision

We went with 1a: dual accounts, explicit tabs. Three reasons. Uber's roadmap needed savings front and center as an engagement hook. Marqeta's architecture handled it cleanly. And tabs gave us an IA that could grow. Credit, business accounts, whatever comes next, all without restructuring the app.

This was a foundation decision. Transactions, cashback, navigation. All of it would follow from this one call.

> [Image placeholder] First-time user home — contextual action cards ("Use your virtual card," "Activate your physical card")

### A home screen that adapts

**First-time users** see a guided setup. Action cards on the home screen suggest the next step and reveal features one at a time. If the physical card sits unactivated for three days, the prompt gets louder. There's no separate onboarding flow. The home screen does the teaching.

**Returning users** see everything at once: balance, transfer shortcut, recent activity, cashback tile. All of it answers the question earners ask first: *how much do I have, and what just happened?*

> [Image placeholder] Returning user home — Current account with activity and cashback tile, Savings account with interest earned

### Built for white-label reuse

The spec layer used local variables for theming. Colors, type, card art, account labels: all swappable without touching structure. Account switching worked with tap or swipe, configurable per deployment. Onboarding cards, cashback tiles, and action patterns were modular, toggleable per program. The goal was simple: feel like an Uber product to earners, stay a Marqeta product under the hood.

> [Image placeholder] Specs — local variables, account switching mechanics, onboarding logic, cashback tile states

Story 2

## Transactions: "One list, forty scenarios"

The real work here was building a category system and a flexible template that could absorb forty-plus scenarios, including the ones we hadn't thought of yet. The detail screen was the easy part.

Every interaction with money lands in one list. Ride payouts, purchases, ATMs, cashback, transfers, fees. They're all "transactions," but each one carries different information and different stakes. The design had to hold them together without flattening them or splintering into chaos.

### Defining the taxonomy

Before any screens, I built the category system: about twenty types, each with its own icon. The set sat at the intersection of UK banking norms, what Uber's backend actually sends, what Marqeta categorizes, and what makes sense to an earner who doesn't speak finance. Uber-specific types (payouts, tips) get branded icons. Generic banking types (ATMs, transfers) stay neutral. Green for money in, black for money out.

> [Image placeholder] Icon mapping — full taxonomy of ~20 transaction types with icons

### One template, many contexts

I designed a flexible detail template. Amount at the top. A lead visual (icon or merchant logo). A category label. An optional banner. Then structured metadata. The banner is where the magic is. One slot that holds totally different content depending on the transaction type, without changing the page underneath.

> [Image placeholder] 4–5 transaction details side by side — ride payout, fuel purchase with cashback, declined gambling transaction, remittance with deep link

### See how the template adapts across types

Ride payout

The simplest case. Amount, Uber icon, date, source, type. The earner just wants to know they got paid.

Fuel purchase

Merchant name, "Fuel" tag, and a banner pointing out it may qualify for cashback (with a link to the rewards summary). "Dispute this transaction" at the bottom. A routine purchase becomes a doorway into the rewards system.

Declined gambling transaction

The banner turns into a warning explaining why it was declined (restricted merchant category), with a "Learn more" page behind it. The earner gets a push notification that deep-links straight to this detail. A confusing moment becomes a clear one, and that builds trust.

International remittance

The banner says "Having troubles?" and deep-links to the Uber Driver app, where the full remittance details live. The detail page knows its own limits and points the earner where they actually need to go.

### Designed for evolution

For MVP, the lead visual is an icon. But the template was built so the same slot could fit a merchant logo or a map pin later, no layout change needed. Post-MVP, a purchase at Tesco shows the Tesco logo and a map pin. Richer, easier to scan, zero structural redesign.

> [Image placeholder] MVP detail (icon) vs Post-MVP detail (merchant logo + map) — same template, richer data

### Forty-plus scenarios, one system

The final system covers over forty variants. Five payout types. Nine purchase states (pending, declined, refunded, disputed, restricted MCC, foreign currency). Seven ATM variants. Internal and external transfers. Open banking. Cashback with reversals. Interest. Remittances. All on the same template.

> [Image placeholder] Full variant matrix — zoomed out to show the scale across Payouts, Purchases, ATM, Transfers, Cashback

One system, forty scenarios, with room for the ones nobody had defined yet.

Story 3

## Disputes: "Reframing the problem"

The team's first instinct was a dynamic progress bar. The real fix was changing what we were trying to solve.

When something goes wrong with a transaction, earners need to report it from the app. Self-service, no phone call. The backend was already there in Marqeta's UXT SDK, but the questionnaire is dynamic and branching. Over sixteen flows. Content updated by Mastercard twice a year.

> [Image placeholder] Disputes flow overview — entry point, primer, routing logic, branching paths, convergence at confirmation

### The progress bar that wasn't

The first instinct was a dynamic progress bar that would adjust as questions branched. We sat down with engineering, looked at the coordination cost, and realized two things. The work was expensive. And we were solving the wrong problem.

Earners aren't anxious about being on step 3 of 5. They're anxious about whether this takes thirty seconds or thirty minutes. So we set expectations instead of showing progress.

### The Dispute Primer

Instead of real-time tracking, we built an entry page that sets expectations up front. Tap "Dispute this transaction" and you see: "Something's not right? We're here to help." The page tells you it's a short questionnaire (usually quick, sometimes a few minutes) and what to have ready. Cheap to build, solves the psychological problem, works for all sixteen flows.

> [Image placeholder] Dispute Primer — "Something's not right?" — followed by first questionnaire screen

### A scalable pattern, not sixteen designs

Sixteen-plus flows, content updated twice a year. Designing each one by hand would never hold up. Instead, I built a reusable set of form components: text inputs, radio groups, file uploaders, info cards, confirmation summaries. They compose in any order based on backend logic. New dispute types ship without new design. Content updates flow through existing patterns. And the same library works for future white-label customers on different card networks.

### See example flows compared

Fraudulent transaction

The longest flow. Questionnaire, replacement card order, biometric verification, and resolution states for both won and lost disputes.

Incorrect amount

A medium-length flow. Different branches of questions, document upload for receipts, resolution tracking.

ATM withdrawal

Its own questionnaire path. ATM-specific details like location, amount expected vs received.

Non-network dispute

The shortest path. It routes straight to a support contact page instead of the questionnaire. Not everything can be self-service.

> [Image placeholder] 3–4 dispute flows contrasted — showing different lengths and components but same pattern system

### Closing the loop

Disputes loop back into the transaction system. File one, and the transaction detail picks up a "Transaction disputed" banner. Resolve it, and the outcome shows up there too. Same banner slot that holds cashback notices and MCC warnings. One pattern, doing multiple jobs across the app.

> [Image placeholder] Transaction detail with "Transaction disputed" → same transaction after "Dispute complete"

The Common Thread

Each of these looked like a UI problem on the surface, but they were all structural underneath. The wallet was a mental-model question. The transactions list was a taxonomy and a template system. The dispute flow was a scalable-pattern problem.

The thread running through all three: absorb the complexity early (in the IA, the taxonomy, the components) so the earner sees something simple, and the team gets something they can actually maintain.

Outcomes

## What shipped and what it proved

Autobahn launched as Marqeta's first white-label app, serving Uber's UK earners. The patterns held up under real production traffic, and they were built to be reused.

1,036 TPS

Peak transaction throughput, UX patterns holding without reliability risk

99.997%

Transaction success rate at peak traffic

32% YoY

Transaction volume growth supported by the platform

39% YoY

API TPS growth, white-label architecture scaling cleanly

The numbers aside, the bigger thing this project proved was that Marqeta could deliver a full cardholder experience, not just plumbing, at a bar high enough for a partner like Uber. Those patterns became the foundation for how Marqeta does white-label work going forward.

Reflection

## What I'd do differently

Get into product framing earlier

Some of the structural calls would've come out better if design had been in the room during initial scoping with Uber. Next time I'd push to be there from the first workshop.

Share frameworks more broadly, sooner

The taxonomy, the template, the component library. All of it was useful beyond my team. Sharing them earlier and more openly would've spread the impact and caught blind spots faster.

Invest more in the long-horizon vision

Most of my energy went into shipping the MVP well. Looking back, I wish I'd spent more time on the future state. Where is this product two or three quarters from now?

