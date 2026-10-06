import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import ThemeToggle from '@/components/ThemeToggle';
import CaseStudyNav from '@/components/CaseStudyNav';
import ProjectPagination from '@/components/ProjectPagination';
import styles from './case-study.module.css';

const sections = [{id:'overview',label:'Overview'},{id:'role',label:'My role'},{id:'platform-structure',label:'01 · Platform structure'},{id:'case-lifecycle',label:'02 · Case lifecycle'},{id:'ai-review',label:'03 · AI-assisted review'},{id:'launch',label:'Launched'}];
function Visual({file,label,priority=false}: {file:string;label:string;priority?:boolean}) {return <figure className={styles.visual}><a href={`/work/disputes360/${file}.avif`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${label}`}><Image src={`/work/disputes360/${file}.avif`} alt={label} width={2560} height={file==='sitemap'?1600:1800} sizes="(max-width: 1020px) 94vw, 66vw" unoptimized preload={priority} /></a></figure>;}
function Placeholder({label,leading=false}: {label:string;leading?:boolean}) {return <figure className={`${styles.placeholder} ${leading?styles.leading:''}`}><span>Image placeholder</span><figcaption>{label}</figcaption></figure>;}
function SupportingGallery(){return <div className={styles.gallery}>{[['reporting','Reporting'],['filter','Case filters'],['email-template','Email templates'],['bulk-upload','Bulk upload']].map(([file,label])=><div key={file}><Visual file={file} label={label}/><p>{label}</p></div>)}</div>;}
export default function Disputes360Page(){return <>
<div className="fixed z-[300]" style={{top:'var(--nav-top)',left:'var(--grid-margin)'}}><BackButton/></div>
<div className="fixed z-[300]" style={{bottom:'var(--nav-top)',left:'var(--grid-margin)'}}><ThemeToggle/></div>
<CaseStudyNav sections={sections}/>
<main className={`page-grid ${styles.page}`}>
<header id="overview" className={`${styles.content} ${styles.hero}`}><h1>{"Disputes360"}</h1><p className={styles.intro}>{"A workspace for resolving card disputes, connecting case history, evidence, and AI-assisted review."}</p><dl className={styles.meta}><div><dt>{"Role"}</dt><dd>{"Design Lead · Sole Product Designer at Marqeta"}</dd></div><div><dt>{"Scope"}</dt><dd>{"End-to-end design of Disputes360, including information architecture, case management, operational workflows, and AI-assisted review"}</dd></div><div><dt>{"Timeline"}</dt><dd>{"July 2025–present"}</dd></div><div><dt>{"Team"}</dt><dd>{"Product, Engineering, Disputes Operations, and Compliance"}</dd></div><div><dt>{"Launch"}</dt><dd>{"General availability · September 2026"}</dd></div></dl></header>
<div className={styles.content}><Visual file="hero" label="Disputes360 workspace" priority /></div>
<section id="role" className={`${styles.content} ${styles.section}`}>
<h2>{"The product and my role"}</h2>
<p>{"When a cardholder disputes a transaction, an operations agent may need to review the claim, assemble evidence, and submit the case to a card network such as Visa or Mastercard. Some cases require further exchanges with the merchant’s side before they can be resolved."}</p>
<p>{"Disputes360 brings this work into a dedicated platform. The team’s goal was to consolidate fragmented tools and automate more of the case analysis, involving agents when a case needs human judgment."}</p>
<p>{"I had spent four years designing Marqeta’s previous disputes product inside the Marqeta Dashboard. After exploring a third-party replacement, the company decided to build its own platform."}</p>
<p>{"As the sole designer, I led the design across Disputes360. My work covered the platform structure, case workflows, reporting, communications, and AI review. The following sections focus on how I organized the workspace and developed its two core experiences: working through a case and reviewing AI’s unresolved judgments."}</p>
</section>
<section id="platform-structure" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>01</span>{" Platform structure"}</h2>
<Visual file="sitemap" label="Platform navigation" />
<p className={styles.caption}>{"The navigation separates analytics, intake, transaction lookup, and case work. All Cases and saved views share the same underlying case table."}</p>
<h3>{"Organizing different ways into the same case work"}</h3>
<p>{"The old disputes product opened on a case queue inside the Marqeta Dashboard. Other parts of the work depended on Salesforce, Looker, spreadsheets, and manual audit processes."}</p>
<p>{"The standalone platform needed its own navigation. I organized analytics under Home, single and bulk submissions under Intake, and transaction lookup under Cardholder Search. Views became the main area for working through existing cases."}</p>
<p>{"Most dispute agents handle cases initiated by cardholders or call center agents. Creating a case remains available, but their everyday work centers on reviewing and resolving cases already in the system."}</p>
<Placeholder label={"From MQD to Disputes360"} leading={false} />
<p>{"In early explorations, Case List and Saved Views sat in separate navigation groups. I brought them together under Views because they share the same underlying case table."}</p>
<p>{"All Cases shows active cases. Assigned to Me filters that set by ownership. Custom Views let agents save a filter configuration and return to that subset directly. Grouping these entry points together makes their relationship explicit: each is a different view of the same case work."}</p>
</section>
<section id="case-lifecycle" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>02</span>{" Case lifecycle"}</h2>
<Placeholder label={"Case lifecycle timeline"} leading={true} />
<p className={styles.caption}>{"The current stage opens at the top. Earlier stages remain available below, with case-level information accessible throughout."}</p>
<h3>{"Keeping current work connected to its history"}</h3>
<p>{"The case page carries an agent from preparing a dispute to handling its later resolution. In the old product, intake and post-submission work had distinct presentations. The Ops team raised a problem: once a case reached the later stages, referring back to intake context was cumbersome."}</p>
<p>{"Agents needed both case information, such as the amount and creation date, and earlier materials or notes. I proposed a unified lifecycle timeline, which the Ops team supported."}</p>
<h3>{"Giving case information a consistent home"}</h3>
<p>{"I separated information about the case from content produced during a particular event."}</p>
<p>{"Case Details remains accessible throughout the lifecycle. Agents can expand it to check the amount, reason code, current states, identifiers, and other reference information."}</p>
<p>{"Files, communications, and notes stay associated with the event or round of work that produced them. Agents can inspect earlier material in the context of what happened at that stage."}</p>
<h3>{"Putting the current stage first"}</h3>
<p>{"The timeline begins with Cardholder Contacted and continues through Open, Ready, submission, and any further resolution events. Each new event appears at the top."}</p>
<p>{"The current stage opens by default with its forms and actions. Completed stages become read-only and collapse below it. Agents can work on what needs attention now, then expand an earlier stage to inspect its details."}</p>
<Placeholder label={"From separate stages to one timeline"} leading={false} />
<p>{"Long cases still require scrolling. Repeated rounds and deep historical review were less common in the workflow we were designing for, so the layout prioritizes current work while preserving access to earlier details."}</p>
<p>{"The separate Activity tab provides a finer-grained record, including state changes, transaction events, and raw data. It also offers another route to the original materials and internal notes."}</p>
</section>
<section id="ai-review" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>03</span>{" AI-assisted review"}</h2>
<Placeholder label={"Evidence and human review"} leading={true} />
<p className={styles.caption}>{"Agents inspect the evidence alongside AI’s reasoning and the questions that need human judgment."}</p>
<h3>{"Bringing agents in when the system needs judgment"}</h3>
<p>{"AI evaluates case evidence and other conditions to recommend whether a dispute should be submitted. Missing documents, conflicting evidence, or unclear information can prevent a confident decision. Those cases are flagged for human review."}</p>
<p>{"The current product still requires a person to execute the final Submit or Close action. It does not require agents to manually assess every criterion on every case."}</p>
<p>{"My focus was the review mechanism: helping agents understand what AI could not determine, inspect the evidence, and supply the missing judgment."}</p>
<h3>{"Turning analyst instructions into answerable questions"}</h3>
<p>{"The team’s criteria drew on card-network guidelines for different dispute reasons, known as reason codes. The PRD described these criteria as attributes, but some were written as instructions such as “verify cancellation proof.”"}</p>
<p>{"I rewrote them as questions that AI and an agent could answer against evidence."}</p>
<div className={styles.tableWrap}><table><thead><tr><th scope="col">{"PRD attribute"}</th><th scope="col">{"Question for review"}</th></tr></thead><tbody><tr><td>{"Verify cancellation proof"}</td><td>{"Did the cardholder cancel the subscription?"}</td></tr><tr><td>{"Cancellation date < transaction date"}</td><td>{"Did the cancellation occur before the disputed charge posted?"}</td></tr><tr><td>{"Check for partial credits"}</td><td>{"Is the disputed amount net of any credit already received?"}</td></tr></tbody></table></div>
<p>{"Each question needed a clear determination and an evidence source. Whether a subscription was canceled and whether it was canceled before a charge are separate judgments, even when the same document helps answer both."}</p>
<p>{"I also aligned the questions so that Yes consistently supports submission. This keeps the answer’s meaning consistent as agents move through the review. I developed these conversions and discussed their feasibility with Ops, Product, and Engineering."}</p>
<Placeholder label={"From criterion to review question"} leading={false} />
<h3>{"Keeping evidence beside the decision"}</h3>
<p>{"The review interface places documents on the left, AI reasoning in the middle, and attribute states with Yes/No controls on the right. Agents can inspect the source material while answering the question it relates to."}</p>
<p>{"An early version used separate Conflict, Uncertain, and Missing labels. I consolidated them because the immediate task was the same: inspect the evidence and make a determination."}</p>
<p>{"I also explored separate Summary and Attributes tabs, then brought them into one scrolling panel. That put more information on screen, but kept the assessment and its questions available together."}</p>
<Placeholder label={"Review interface iterations"} leading={false} />
<h3>{"Returning human input to the analysis"}</h3>
<p>{"An individual Yes or No does not immediately change the recommendation. The agent completes the questions requiring review, then clicks a button to run the analysis again."}</p>
<p>{"The system considers those inputs alongside the evidence and other case conditions. Attributes carry different importance: a No on a critical condition can lead to Do Not Submit, while sufficiently satisfied conditions can support Submit to Network."}</p>
<p>{"The updated recommendation gives the agent the next action. AI identifies where it needs judgment, the agent supplies it, and the system reassesses the case."}</p>
<Placeholder label={"Human input to updated recommendation"} leading={false} />
</section>
<section id="launch" className={`${styles.content} ${styles.section}`}>
<h2>{"Launched in September 2026"}</h2>
<p>{"Disputes360 reached general availability in September 2026. AI recommendations, human attribute review, and reanalysis are in use alongside the platform’s case management workflows."}</p>
<p>{"My design scope also included reporting, case filters, email templates, bulk upload, and supporting case tabs."}</p>
<SupportingGallery />
<p>{"The current release retains human execution of submission and closure. The team is considering automatic execution for high-confidence cases and automatic reanalysis after review."}</p>
<p>{"My work covered the platform’s overall organization and the detailed interactions agents use to move a case forward: finding the right cases, working through their history, and contributing judgment when AI needs it."}</p>
</section>

<ProjectPagination currentSlug="disputes360"/>
<footer className={`${styles.content} ${styles.footer}`}><Link href="/work">← Back to work</Link></footer>
</main></>;}
