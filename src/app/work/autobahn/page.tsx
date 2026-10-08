import Link from 'next/link';
import BackButton from '@/components/BackButton';
import ThemeToggle from '@/components/ThemeToggle';
import CaseStudyNav from '@/components/CaseStudyNav';
import ProjectPagination from '@/components/ProjectPagination';
import styles from './case-study.module.css';

const sections = [
 {id:'overview',label:'Overview'}, {id:'the-project',label:'My role'},
 {id:'wallet',label:'01 · Wallet'}, {id:'transactions',label:'02 · Transactions'},
 {id:'disputes',label:'03 · Disputes'}, {id:'outcomes',label:'Shipped'}
];
type Shot = [string, string];
const galleries: Record<string, Shot[]> = {
 overview: [['current','Manage money'],['purchase','Review activity'],['first-question','Report a problem']],
 comparison: [['early-current','Dual accounts · Current'],['early-savings','Dual accounts · Savings'],['early-card','Card-centric home']],
 accounts: [['current','Current'],['savings','Savings']],
 'first-time': [['virtual-card','First-time user · Virtual card'],['activate-card','First-time user · Physical card activation']],
 activity: [['activity','Transaction activity · Pending, money in and money out']],
 details: [['purchase','Purchase · MVP'],['received','External transfer · Money received'],['restricted','Purchase · Restricted merchant category']],
 pending: [['transfer-pending','External transfer · Pending compliance review']],
 unreleased: [['purchase','MVP'],['merchant-future','Merchant logo and map · Unreleased design']],
 atm: [['atm-amount','ATM questionnaire · Partial amount'],['atm-uploading','Supporting document · Uploading'],['atm-uploaded','Supporting document · Upload complete'],['atm-review','ATM questionnaire · Review before submission']],
 primer: [['primer','Dispute Primer'],['first-question','Purchase questionnaire · First question']],
 status: [['disputed','Original transaction · Dispute filed'],['complete','Original transaction · Check email for details']]
};
function Gallery({name}: {name:string}) {
 const items=galleries[name];
 const grid=<div className={[styles.gallery, name==='overview'?styles.preview:'', name==='first-time'?styles.compact:'',items.length===1?styles.single:''].join(' ')}>
 {items.map(([file,label])=><figure key={file}>
 <div className={styles.placeholder} aria-label={`Image placeholder: ${label}`}><span>Image placeholder</span></div>
 <figcaption>{label}</figcaption></figure>)}
 </div>;
 return name==='unreleased'?<details className={styles.supplement}><summary>Merchant details: MVP and unreleased direction</summary>{grid}</details>:grid;
}
export default function AutobahnPage(){return <>
 <div className="fixed z-[300]" style={{top:'var(--nav-top)',left:'var(--grid-margin)'}}><BackButton /></div>
 <div className="fixed z-[300]" style={{bottom:'var(--nav-top)',left:'var(--grid-margin)'}}><ThemeToggle /></div>
 <CaseStudyNav sections={sections} />
 <main className={`page-grid case-study-page ${styles.page}`}>
 <header id="overview" className={`${styles.content} ${styles.hero}`}>
 <h1>{"Uber Pro Card UK"}</h1><p className={styles.intro}>{"Helping UK drivers and couriers manage earnings, track spending, and report transaction problems."}</p>
 <dl className={styles.meta}><div><dt>{"Role"}</dt><dd>{"Senior Product Designer at Marqeta"}</dd></div><div><dt>{"Scope"}</dt><dd>{"Wallet, Transactions and Disputes"}</dd></div><div><dt>{"Timeline"}</dt><dd>{"January 2025 through development and launch"}</dd></div><div><dt>{"Team"}</dt><dd>{"Approximately six designers, working with Product, Engineering and Uber"}</dd></div></dl>
 </header>
 <div className={styles.content}><Gallery name="overview" /></div>

<section id="the-project" className={`${styles.content} ${styles.section}`}>
<h2>{"The product and my role"}</h2>
<p>{"Uber Pro Card UK is a separate app connected to the Uber Driver app. Uber earnings arrive in the account, and users can spend with their debit card or move money into interest-bearing savings. Uber wanted the product to become an option for everyday spending and saving."}</p>
<p>{"Marqeta designed and built the app under Uber’s brand, using its existing SDKs as the foundation. Those SDKs provided underlying capabilities; our team designed how users would access and interact with them in the Uber app."}</p>
<p>{"I was one of approximately six designers at Marqeta working on the project. My main areas covered three everyday tasks: managing money in Wallet, reviewing activity in Transactions, and reporting problems through Disputes."}</p>
<p>{"I joined the initial brainstorming in January. As the product direction and responsibilities settled in March, I led the flows, screens and interactions for these areas through multiple iterations. Designs were largely locked in May, and I continued working with engineering on implementation updates and visual QA through delivery."}</p>
</section>
<section id="wallet" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>01</span>{"Wallet"}</h2>
<h3>{"Defining how spending and savings fit together"}</h3>
<p>{"The team wanted to offer savings, but had not settled on how to present it alongside the card and spending balance."}</p>
<p>{"I explored several ways to organise the Wallet. We brought two main directions to Uber:"}</p>
<ul><li>{"Dual accounts: Current and Savings appear as separate accounts, with card management on its own page."}</li><li>{"Card-centric home: The card, balance and card controls sit together on the home screen, with Savings available alongside them."}</li></ul>
<p>{"The comparison made the implications of each direction explicit. A card-centric home closely reflected the initial card offering. Separate accounts gave spending and savings distinct places in the product, while requiring users to understand how the card connected to Current."}</p>
<Gallery name="comparison" />
<p>{"Marqeta recommended the dual-account direction, which I supported. We presented the alternatives and our reasoning to Uber, who chose the explicit Current and Savings structure. It fit their intention for the product to support both everyday spending and personal savings."}</p>
<p>{"I developed that direction through further visual and interaction iterations. Users can switch accounts by tapping the tabs or swiping between pages."}</p>
<p>{"Current puts the spending balance, transfers and recent transactions up front. Savings shows the balance alongside the interest rate, interest earned and an action to add money. For new users, contextual cards prompt them to start using their virtual card or activate their physical one."}</p>
<Gallery name="accounts" />
<Gallery name="first-time" />
</section>
<section id="transactions" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>02</span>{"Transactions"}</h2>
<h3>{"Helping users understand their money movement"}</h3>
<p>{"Transactions gives users a record of money entering and leaving their account. It brings Uber payouts, purchases, transfers, ATM activity, fees, interest and refunds into one list."}</p>
<p>{"I designed the icon mapping, list items and detail layouts together. Uber payouts share a branded icon. Other transactions use category icons, with names, labels and signed amounts providing further context. Pending transactions appear separately, and users can filter by money in or money out."}</p>
<Gallery name="activity" />
<p>{"The available API fields differed by transaction type. I used those fields, banking references and my own design judgement to decide what each detail page should show and how to prioritise it."}</p>
<p>{"A purchase identifies the merchant, category and card used. An external transfer shows where the money came from and where it went. Foreign-currency transactions add the original amount and exchange markup. These details sit within a shared hierarchy, with the amount and transaction identity first."}</p>
<p>{"The structure also accommodates changes in status. A pending purchase explains that the final amount may change. A restricted purchase explains the reason for the decline and offers more information. Disputed transactions show their current dispute status."}</p>
<Gallery name="details" />
<p>{"Engineering capacity shaped the first release. We had explored richer merchant details, including logos and maps, but deferred them. The MVP retained the core transaction details and relevant actions. The richer merchant experience remains an unreleased design direction."}</p>
<p>{"I continued updating the design as requirements developed. In August, I followed up on a requirement for external transfers held for compliance review, adding the pending presentation and processing message to the transfer detail."}</p>
<Gallery name="pending" />
<Gallery name="unreleased" />
</section>
<section id="disputes" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>03</span>{"Disputes"}</h2>
<h3>{"Designing the path from reporting a problem to submission"}</h3>
<p>{"Users can start a dispute from a transaction’s detail page. For eligible transactions, the app guides them through a questionnaire whose questions change according to the transaction and their answers."}</p>
<p>{"The underlying dispute capability already existed in Marqeta’s SDK. I designed the user-facing questionnaire experience for the app: the flow, form components and interactions for selecting answers, entering amounts, uploading documents and reviewing a submission."}</p>
<p>{"For an ATM withdrawal, for example, users can specify that they are disputing only part of the amount, enter the amount and explain what happened. They can then upload supporting documents, add further details and review their answers before submitting."}</p>
<p>{"I worked through the intermediate states as well: choosing a file source, uploading a document and showing when the upload was complete. The transaction summary stays visible throughout the questionnaire so users can keep track of the transaction they are reporting."}</p>
<Gallery name="atm" />
<h4>{"A simpler way to set expectations"}</h4>
<p>{"I initially proposed and designed a dynamic progress indicator that would adjust as answers changed the remaining questions."}</p>
<p>{"After discussing it with engineering, we agreed that the branching questionnaire already required substantial implementation work. The team could not commit to the additional progress mechanism within the schedule."}</p>
<p>{"I wanted to preserve its core purpose: helping users understand what to expect. I proposed a short introduction before the questionnaire that explained the process in advance."}</p>
<p>{"The final Primer tells users that they need to finish in one sitting, that they will answer a few questions, and that updates will arrive by email. Product and Engineering agreed to this simpler approach."}</p>
<Gallery name="primer" />
<h4>{"Connecting submission to what happens next"}</h4>
<p>{"Different dispute paths need different next steps. In the fraud flow, the design explains that the user will need a replacement card, then directs them to order one after submitting."}</p>
<p>{"Once a dispute is filed, its status appears on the original transaction. When processing is complete, the transaction directs the user to their email for the details."}</p>
<Gallery name="status" />
</section>
<section id="outcomes" className={`${styles.content} ${styles.section}`}>
<h2>{"Shipped with the app"}</h2>
<p>{"Wallet, Transactions and Disputes launched as part of Uber Pro Card UK, alongside the areas owned by the rest of the design team."}</p>
<p>{"My involvement continued from the initial product explorations through detailed design, implementation updates and visual QA. The shipped work includes the account structure we agreed with Uber, the transaction layouts and states, and the self-service dispute flows."}</p>
</section>
 <ProjectPagination currentSlug="autobahn" />
 <footer className={`${styles.content} ${styles.footer}`}><Link href="/work">← Back to work</Link></footer>
 </main></>}
