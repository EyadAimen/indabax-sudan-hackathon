
"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css"; 
import { RxCalendar, RxClipboard, RxFileText, RxMagnifyingGlass, RxPerson, RxRocket, RxStar } from "react-icons/rx";
import CustomButton from "@/components/button/button";

function ProblemSolving() {
  return (
    <div>
      <Header activeID={2}/>
      <main className={styles.page}>
        <h1>Track 2: <span className={styles.titleOrdange}>PROBLEM SOLVING: Climate Challenge</span></h1>
        <h2 style={{marginTop: "1rem"}}>Predicting dry spells in Algadarif (July-October)</h2>
        <p className={styles.pMargin}>Sudan’s rain-fed farmers in <strong className="bold">Algadarif</strong> plant at the start of the season hoping the rains will 
          keep coming. But when rainfall suddenly pauses for days, <strong className="bold">young crops lose moisture, seedlings fail, and what farmers planted can die before it ever reaches harvest.</strong> This 
          challenge is about building an early-warning model that can help anticipate <strong className="bold">dry spells during the July–October growing season</strong> so decisions can be made earlier, not after losses happen.</p>
        
        <hr className={styles.line}/>

        <div>
          <div>
            <div>
              {/* Why join? */}
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxStar color="#121212" size={20} /></div>
                <h2>Why You Should Join?</h2>
              </div>
              <p className={styles.pMargin}>You&apos;ll work with real climate data, solve a real Sudanese problem, and build something that could genuinely support communities and food security. You will:</p> 
              <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li>Build ML models using high-quality climate datasets</li>
                <li>Learn hands-on climate-Al workflows (time series, geospatial grids, validation)</li>
                <li>Compete on a real leaderboard (hosted on CodaBench)</li>
                <li>Get recognition, certificates, and visibility</li>
                <li>Contribute to climate resilience work that can translate into real tools</li>
              </ul>
              </p>
            </div>
            <hr className={styles.line}/>
            <div>
              {/* What will you be predicting? */}
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxMagnifyingGlass   color="#121212" size={20} /></div>
                <h2>What will you be predicting?</h2>
              </div>
              <p className={styles.pMargin}>Your mission is to prototype an early-warning tool that can <strong className="bold">identify and predict dry-spell risk during July-October</strong> in Algadarif. You&apos;re not just building a model, you&apos;re helping define the foundation of a decision-support tool that could later be delivered through simple dashboards, SMS alerts, or extension-worker guidance.</p>
            </div>
            <hr className={styles.line}/>

            {/* Data provided */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxFileText color="#121212" size={20} /></div>
                <h2>Data provided</h2>
              </div>
              <p className={styles.pMargin}>We will provide a curated package of climate and environmental data aligned to the July-October season, including:</p>
              <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li><strong className="bold">Daily rainfall observations</strong></li>
                <li><strong className="bold">Gridded hourly climate predictors </strong>(surface and ocean/atmospheric variables)</li>
                <li><strong className="bold">Daily near-surface temperature</strong></li>
                <li>Time, location/grid coordinates, and documentation to help you start quickly</li>
              </ul>
              </p>
              <p className={styles.pMargin}>These are the kinds of datasets widely used by researchers, NGOs, and climate centers across Africa.</p>
            </div>
            <hr className={styles.line}/>

            {/* How it works */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxRocket  color="#121212" size={20} /></div>
                <h2>How it works</h2>
              </div>
              <p className={styles.pMargin}><strong className="bold">Your journey in 4 phases</strong></p>
              <h4 className={styles.pMargin}>1) Register (18-20 December)</h4>
              <p className={styles.pMargin}>Sign up through our official form. After registration closes, you&apos;ll receive:</p>
              <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li>The private <strong className="bold">CodaBench</strong> competition link + access instructions</li>
                <li>Data download steps</li>
                <li>Submission format + rules</li>
              </ul>
              </p>


              <h4 className={styles.pMargin}>2) Build your solution (20-23 December)</h4>
              <p className={styles.pMargin}>On CodaBench, you will: explore the data, train models, and submit predictions to the leaderboard.</p>
              <h4 className={styles.pMargin}>3) Wrap-up & final submission</h4>
              <p className={styles.pMargin}>You&apos;ll submit your source code (reproducible), plus brief documentation and a few supporting plots/insights.</p>
              <h4 className={styles.pMargin}>4) Celebrate! (26 December)</h4  >
              <p className={styles.pMargin}>Winners are announced and next steps are shared.</p>
            </div>
            <hr className={styles.line}/>

            {/* Who can join */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxPerson  color="#121212" size={20} /></div>
                <h2>Who can join?</h2>
              </div>
              <p className={styles.pMargin}>Everyone can join. Especially:</p>
              <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li>Students in Computer Science, Al, Data Science, Engineering</li>
                <li>Young professionals in geospatial, climate, or agri-analytics</li>
                <li>Researchers/practitioners in agriculture or environmental science</li>
                <li>Enthusiasts who want real-world experience</li>
              </ul>
              </p>
              <p className={styles.pMargin}>Basic Python + practical ML familiarity is enough. You may join individually or in teams (max 4).</p>
            </div>
            <hr className={styles.line}/>

            {/* How will solutions be evaluated? */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxMagnifyingGlass color="#121212" size={20} /></div>
                <h2>How will solutions be evaluated?</h2>
              </div>
              <p className={styles.pMargin}>Leaderboard metric: <strong className="bold">Accuracy.</strong></p>
              <p className={styles.pMargin}>(We&apos;ll also check basic reproducibility and clarity of your submission for final review.)</p>
            </div>
            <hr className={styles.line}/>

            {/* Timeline */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxCalendar  color="#121212" size={20} /></div>
                <h2>Timeline</h2>
              </div>
              <p className={styles.pMargin}>

              <ul className={styles.list}>
                <li><strong className="bold">18 Dec</strong> — Registration opens</li>
                <li><strong className="bold">20 Dec</strong> — Registration closes</li>
                <li><strong className="bold">20 Dec</strong> — CodaBench access + data instructions sent</li>
                <li><strong className="bold">20-23 Dec</strong> — Competition window (build + submit) + real-time support</li>
                <li><strong className="bold">23 Dec (11:59 PM)</strong> — Final submission deadline</li>
                <li><strong className="bold">24-25 Dec</strong> — Evaluation</li>
                <li><strong className="bold">26 Dec</strong> — Winners announced</li>
              </ul>
              </p>
            </div>
            <hr className={styles.line}/>

            {/* Ready to register? */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxClipboard  color="#121212" size={20} /></div>
                <h2>Ready to register?</h2>
              </div>
              <p className={styles.pMargin}>Click <strong className="bold">Register</strong> to join. Once registration closes, we&apos;ll email the CodaBench link and everything you need to start (data access, baseline notebook, and submission format).</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer} style={{marginTop: "1rem"}}>
          <CustomButton 
            name="Register Now"
            onclick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScHTq2Cj5XMJB1BF9Lyyyr2eSXcX6we6pHjPIrSZxjWqY4piA/viewform', '_blank')}
          />
        </div>
      </main>
    </div>
  );
}

export default ProblemSolving;
