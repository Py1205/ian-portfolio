import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import ThemeToggle from '@/components/ThemeToggle';
import CaseStudyNav from '@/components/CaseStudyNav';
import ProjectPagination from '@/components/ProjectPagination';
import styles from './case-study.module.css';
import dimensions from './image-dimensions.json';

const sections = [{id:'overview',label:'Overview'},{id:'role',label:'My role'},{id:'platform-structure',label:'01 · Platform structure'},{id:'case-lifecycle',label:'02 · Case lifecycle'},{id:'ai-review',label:'03 · AI-assisted review'},{id:'launch',label:'Launched'}];
function Visual({file,label,priority=false,framed=true,caption,title}: {file:keyof typeof dimensions;label:string;priority?:boolean;framed?:boolean;caption?:string;title?:string}) {return <figure className={`${styles.visual} ${framed ? styles.framed : ""}`}>{title && <h4 className={styles.visualTitle}>{title}</h4>}<a href={`/work/disputes360/${file}.avif`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${label}`}><Image src={`/work/disputes360/${file}.avif`} alt={label} width={dimensions[file][0]} height={dimensions[file][1]} sizes="(max-width: 1020px) 94vw, 66vw" unoptimized preload={priority} /></a>{caption && <figcaption className={styles.visualCaption}>{caption}</figcaption>}</figure>;}
function SupportingGallery(){return <div className={styles.gallery}>{([['reporting','Reporting'],['filter','Case filters'],['email-template','Email templates'],['bulk-upload','Bulk upload']] as const).map(([file,label])=><div key={file}><Visual file={file} label={label} caption={label}/></div>)}</div>;}
export default function DisputesPortalPage(){return <>
<div className="fixed z-[300]" style={{top:'var(--nav-top)',left:'var(--grid-margin)'}}><BackButton/></div>
<div className="fixed z-[300]" style={{bottom:'var(--nav-top)',left:'var(--grid-margin)'}}><ThemeToggle/></div>
<CaseStudyNav sections={sections}/>
<main className={`page-grid case-study-page ${styles.page}`}>
<header id="overview" className={`${styles.content} ${styles.hero}`}><h1>{"Disputes Portal"}</h1><p className={styles.intro}>{"A workspace for resolving card disputes, connecting case history, evidence, and AI-assisted review."}</p><dl className={styles.meta}><div><dt>{"Role"}</dt><dd>{"Design Lead · Sole Product Designer at Marqeta"}</dd></div><div><dt>{"Scope"}</dt><dd>{"End-to-end design of Disputes Portal, including information architecture, case management, operational workflows, and AI-assisted review"}</dd></div><div><dt>{"Timeline"}</dt><dd>{"July 2025–present"}</dd></div><div><dt>{"Team"}</dt><dd>{"Product, Engineering, Disputes Operations, and Compliance"}</dd></div><div><dt>{"Launch"}</dt><dd>{"General availability · September 2026"}</dd></div></dl></header>
<div className={styles.content}><Visual file="hero" label="Disputes Portal workspace" priority /></div>
<section id="role" className={`${styles.content} ${styles.section}`}>
<h2>{"The product and my role"}</h2>
<p>{"When a cardholder disputes a transaction, an operations agent may need to review the claim, assemble evidence, and submit the case to a card network such as Visa or Mastercard. Some cases require further exchanges with the merchant’s side before they can be resolved."}</p>
<p>{"Disputes Portal brings this work into a dedicated platform. The team’s goal was to consolidate fragmented tools and automate more of the case analysis, involving agents when a case needs human judgment."}</p>
<p>{"I had spent four years designing Marqeta’s previous disputes product inside the Marqeta Dashboard. After exploring a third-party replacement, the company decided to build its own platform."}</p>
<p>{"As the sole designer, I led the design of Disputes Portal through launch. My work covered platform structure, case workflows, reporting, communications, and AI review. This case study focuses on how I connected current work with case history and helped agents resolve the questions AI could not answer."}</p>
</section>
<section id="platform-structure" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>01</span>{" Platform structure"}</h2>
<Visual file="sitemap" label="Platform navigation" caption="The navigation separates analytics, intake, transaction lookup, and case work. All Cases and saved views share the same underlying case table." />
<h3>{"Organizing different ways into the same case work"}</h3>
<p>{"The old disputes product opened on a case queue inside the Marqeta Dashboard. Other parts of the work depended on Salesforce, Looker, spreadsheets, and manual audit processes."}</p>
<p>{"The standalone platform needed its own navigation. I organized analytics under Home, single and bulk submissions under Intake, and transaction lookup under Cardholder Search. Views became the main area for working through existing cases."}</p>
<p>{"Most dispute agents handle cases initiated by cardholders or call center agents. Creating a case remains available, but their everyday work centers on reviewing and resolving cases already in the system."}</p>
<p>{"In early explorations, Case List and Saved Views sat in separate navigation groups. I brought them together under Views because they share the same underlying case table."}</p>
<div className={styles.navComparison}>
<div><h4>Early exploration</h4><Visual file="nav-early" label="Early navigation separates Case List from Saved Views" caption="Case List and Saved Views sit in separate groups." /></div>
<div><h4>Final navigation</h4><Visual file="nav-current" label="Final navigation groups All Cases, Assigned to Me, and Custom Views under Views" caption="Views brings the case table and its saved subsets together." /></div>
</div>
<p>{"All Cases shows active cases. Assigned to Me filters that set by ownership. Custom Views let agents save a filter configuration and return to that subset directly. Grouping these entry points together makes their relationship explicit: each is a different view of the same case work."}</p>
</section>
<section id="case-lifecycle" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>02</span>{" Case lifecycle"}</h2>
<Visual file="case-page" label="Case lifecycle with the current stage expanded and earlier stages available below" caption="The current stage opens first, while earlier stages remain accessible within the same case." />
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
<Visual file="case-lifecycle-annotated" label="Annotated case lifecycle: case-level context, current work first, and connected history" caption="Case details stay available throughout the lifecycle. The current stage opens for action, while earlier stages preserve their context." />
<p>{"Long cases still require scrolling. Repeated rounds and deep historical review were less common in the workflow we were designing for, so the layout prioritizes current work while preserving access to earlier details."}</p>
<p>{"The separate Activity tab provides a finer-grained record, including state changes, transaction events, and raw data. It also offers another route to the original materials and internal notes."}</p>
</section>
<section id="ai-review" className={`${styles.content} ${styles.section}`}>
<h2 className={styles.chapter}><span className={styles.number}>03</span>{" AI-assisted review"}</h2>
<Visual file="document-review" label="Document review with annotations identifying the source document, optional summary panel, and questions requiring human judgment" caption="Agents review source documents, consult document summaries, and resolve the questions that need human judgment." />
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
<h3>{"Keeping evidence beside the decision"}</h3>
<p>{"The review interface keeps the source document beside the questions that need judgment. Agents can open a document summary panel for key findings, review the assessment on the right, and answer what the evidence supports. When evidence is missing, they can request it from the cardholder."}</p>
<h3>{"Returning human input to the analysis"}</h3>
<p>{"As new evidence or agent input becomes available, the system reruns its analysis and updates the case recommendation."}</p>
<p>{"The system considers those inputs alongside the evidence and other case conditions. Attributes carry different importance: a No on a critical condition can lead to Do Not Submit, while sufficiently satisfied conditions can support Submit to Network."}</p>
<p>{"Once the review questions are resolved, AI combines the agent’s judgment with the evidence and case conditions to reach a final recommendation: Ready to submit or Do not submit. The agent carries out the final action."}</p>
<div className={styles.recommendations}>
<div><Visual title="Final recommendation 1: Ready to submit" file="submission-recommended" label="Example recommendation: Ready to submit, with a Submit to network action" caption="When the required conditions are satisfied and no blocking issues remain, the agent can submit the case to the network." /></div>
<div><Visual title="Final recommendation 2: Do not submit" file="submission-not-recommended" label="Example recommendation: Do not submit, with the reason and an Acknowledge action" caption="If the analysis identifies a blocking condition, the agent reviews the reason and determines how to resolve or close the case." /></div>
</div>
</section>
<section id="launch" className={`${styles.content} ${styles.section}`}>
<h2>{"Launched in September 2026"}</h2>
<p>{"Disputes Portal reached general availability in September 2026. AI recommendations, human attribute review, and reanalysis are in use alongside the platform’s case management workflows."}</p>
<p>{"My design scope also included reporting, case filters, email templates, bulk upload, and supporting case tabs."}</p>
<SupportingGallery />
<p>{"The current release reruns analysis as new evidence or agent input becomes available. Agents retain control of final submission and closure."}</p>
<p>{"My work covered the platform’s overall organization and the detailed interactions agents use to move a case forward: finding the right cases, working through their history, and contributing judgment when AI needs it."}</p>
</section>

<ProjectPagination currentSlug="disputes360"/>
<footer className={`${styles.content} ${styles.footer}`}><Link href="/work">← Back to work</Link></footer>
</main></>;}
