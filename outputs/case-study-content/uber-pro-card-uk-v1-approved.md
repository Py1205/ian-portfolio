# Uber Pro Card UK

Helping UK drivers and couriers manage earnings, track spending, and report transaction problems.

Role: Senior Product Designer at Marqeta

Scope: Wallet, Transactions and Disputes

Timeline: January 2025 through development and launch

Team: Approximately six designers, working with Product, Engineering and Uber

<!-- gallery: overview -->

## The product and my role

Uber Pro Card UK is a separate app connected to the Uber Driver app. Uber earnings arrive in the account, and users can spend with their debit card or move money into interest-bearing savings. Uber wanted the product to become an option for everyday spending and saving.

Marqeta designed and built the app under Uber’s brand, using its existing SDKs as the foundation. Those SDKs provided underlying capabilities; our team designed how users would access and interact with them in the Uber app.

I was one of approximately six designers at Marqeta working on the project. My main areas covered three everyday tasks: managing money in Wallet, reviewing activity in Transactions, and reporting problems through Disputes.

I joined the initial brainstorming in January. As the product direction and responsibilities settled in March, I led the flows, screens and interactions for these areas through multiple iterations. Designs were largely locked in May, and I continued working with engineering on implementation updates and visual QA through delivery.

## 01 · Wallet

### Defining how spending and savings fit together

The team wanted to offer savings, but had not settled on how to present it alongside the card and spending balance.

I explored several ways to organise the Wallet. We brought two main directions to Uber:

- Dual accounts: Current and Savings appear as separate accounts, with card management on its own page.
- Card-centric home: The card, balance and card controls sit together on the home screen, with Savings available alongside them.

The comparison made the implications of each direction explicit. A card-centric home closely reflected the initial card offering. Separate accounts gave spending and savings distinct places in the product, while requiring users to understand how the card connected to Current.

<!-- gallery: comparison -->

Marqeta recommended the dual-account direction, which I supported. We presented the alternatives and our reasoning to Uber, who chose the explicit Current and Savings structure. It fit their intention for the product to support both everyday spending and personal savings.

I developed that direction through further visual and interaction iterations. Users can switch accounts by tapping the tabs or swiping between pages.

Current puts the spending balance, transfers and recent transactions up front. Savings shows the balance alongside the interest rate, interest earned and an action to add money. For new users, contextual cards prompt them to start using their virtual card or activate their physical one.

<!-- gallery: accounts -->

<!-- gallery: first-time -->

## 02 · Transactions

### Helping users understand their money movement

Transactions gives users a record of money entering and leaving their account. It brings Uber payouts, purchases, transfers, ATM activity, fees, interest and refunds into one list.

I designed the icon mapping, list items and detail layouts together. Uber payouts share a branded icon. Other transactions use category icons, with names, labels and signed amounts providing further context. Pending transactions appear separately, and users can filter by money in or money out.

<!-- gallery: activity -->

The available API fields differed by transaction type. I used those fields, banking references and my own design judgement to decide what each detail page should show and how to prioritise it.

A purchase identifies the merchant, category and card used. An external transfer shows where the money came from and where it went. Foreign-currency transactions add the original amount and exchange markup. These details sit within a shared hierarchy, with the amount and transaction identity first.

The structure also accommodates changes in status. A pending purchase explains that the final amount may change. A restricted purchase explains the reason for the decline and offers more information. Disputed transactions show their current dispute status.

<!-- gallery: details -->

Engineering capacity shaped the first release. We had explored richer merchant details, including logos and maps, but deferred them. The MVP retained the core transaction details and relevant actions. The richer merchant experience remains an unreleased design direction.

I continued updating the design as requirements developed. In August, I followed up on a requirement for external transfers held for compliance review, adding the pending presentation and processing message to the transfer detail.

<!-- gallery: pending -->

<!-- gallery: unreleased -->

## 03 · Disputes

### Designing the path from reporting a problem to submission

Users can start a dispute from a transaction’s detail page. For eligible transactions, the app guides them through a questionnaire whose questions change according to the transaction and their answers.

The underlying dispute capability already existed in Marqeta’s SDK. I designed the user-facing questionnaire experience for the app: the flow, form components and interactions for selecting answers, entering amounts, uploading documents and reviewing a submission.

For an ATM withdrawal, for example, users can specify that they are disputing only part of the amount, enter the amount and explain what happened. They can then upload supporting documents, add further details and review their answers before submitting.

I worked through the intermediate states as well: choosing a file source, uploading a document and showing when the upload was complete. The transaction summary stays visible throughout the questionnaire so users can keep track of the transaction they are reporting.

<!-- gallery: atm -->

#### A simpler way to set expectations

I initially proposed and designed a dynamic progress indicator that would adjust as answers changed the remaining questions.

After discussing it with engineering, we agreed that the branching questionnaire already required substantial implementation work. The team could not commit to the additional progress mechanism within the schedule.

I wanted to preserve its core purpose: helping users understand what to expect. I proposed a short introduction before the questionnaire that explained the process in advance.

The final Primer tells users that they need to finish in one sitting, that they will answer a few questions, and that updates will arrive by email. Product and Engineering agreed to this simpler approach.

<!-- gallery: primer -->

#### Connecting submission to what happens next

Different dispute paths need different next steps. In the fraud flow, the design explains that the user will need a replacement card, then directs them to order one after submitting.

Once a dispute is filed, its status appears on the original transaction. When processing is complete, the transaction directs the user to their email for the details.

<!-- gallery: status -->

## Shipped with the app

Wallet, Transactions and Disputes launched as part of Uber Pro Card UK, alongside the areas owned by the rest of the design team.

My involvement continued from the initial product explorations through detailed design, implementation updates and visual QA. The shipped work includes the account structure we agreed with Uber, the transaction layouts and states, and the self-service dispute flows.
