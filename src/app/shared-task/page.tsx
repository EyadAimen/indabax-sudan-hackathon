"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css"; 
import { RxCalendar, RxCheck, RxCheckCircled, RxClipboard, RxFile, RxFileText, RxInfoCircled, RxListBullet, RxMagnifyingGlass, RxPerson, RxPinTop, RxRocket, RxStar, RxTrackNext } from "react-icons/rx";
import CustomButton from "@/components/button/button";
import { FaTrophy } from "react-icons/fa";
import { HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi";



function SharedTask() {
  
  
  return (
    <div>
      
      {/* Header of the web */}
      <Header activeID={3}/>
      <main className={styles.page}>
        <h1>Track 3: <span className={styles.titleOrdange}>Sudan-MM 2025 SHARED TASK</span></h1>
        <p className={styles.pMargin}>A Multimodal Data Collection Challenge for Sudanese Images, Videos, Text, and Voice </p>
        <hr className={styles.line}/>

        <div >
          <div>
            <div>
              {/* overview section */}
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxFile  color="#121212" size={20} /></div>
                <h2>Overview</h2>
              </div>
              <p className={styles.pMargin}>Over two months, teams will collect and label
                Sudan-MM 2025 invites researchers, students, technologists, photographers, creators, and community volunteers to take part in the <strong className="bold">first large-scale multimodal data collection challenge focused on Sudan.</strong>
              </p>
              <p className={styles.pMargin}>Modern AI systems rarely include Sudanese environments, dialects, objects, and cultural elements. As a result, AI models perform poorly on tasks relevant to our context—whether recognizing Sudanese food, understanding dialects, or captioning local scenes. </p>
              <p className={styles.pMargin}><strong className="bold">Sudan-MM aims to change that. </strong></p>
              <p className={styles.pMargin}>Over two months, participating teams will collect and annotate:</p>
              <ul className={styles.list}>
                <li><strong className="bold">Images</strong></li>
                <li><strong className="bold">Short videos (3–10 seconds) </strong></li>
                <li><strong className="bold">Text captions (Standard Arabic + Sudanese Arabic)</strong></li>
                <li><strong className="bold">Voice descriptions (Sudanese Arabic) </strong></li>
              </ul>
              <p className={styles.pMargin}>Teams that produce the highest-quality, most diverse, and ethically sourced data will be recognized and awarded.</p>
            </div>
            <hr className={styles.line}/>
            <div>
              {/* purpose section */}
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxPinTop   color="#121212" size={20} /></div>
                <h2>Purpose of The Sudan-MM Shared Task </h2>
              </div>
              <p className={styles.pMargin}>This challenge will create the <strong className="bold">first multimodal Sudanese dataset</strong> designed to support: 
                <ul className={styles.list}>
                  <li>Low-resource multimodal learning </li>
                  <li>Accessibility (audio description for the visually impaired) </li>
                  <li>Sudanese Arabic speech technology </li>
                  <li>Cultural preservation</li>
                  <li>Vision–language and video–speech AI research</li>
                </ul>
                The most creative, diverse, and ethically collected contributions will win prizes and recognition 
              </p>
            </div>
            <hr className={styles.line}/>

             {/* What are we collecting? */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxFileText color="#121212" size={20} /></div>
                <h2>What You Will Collect</h2>
              </div>
              <p className={styles.pMargin}>Teams may contribute multimodal pairs containing:</p>
              <h3 className={styles.pMargin}>Images:</h3>
              <p className={styles.pMargin}>Examples: <br />
                <ul className={styles.list}>
                  <li>Sudanese cities, markets, food clothing, daily life</li>
                  <li>Transportation(ركشة, هايس, روزة, أمجاد)</li>
                  <li>Landscapes(النيل, الصحراء, المزارع)</li>
                </ul>
                Annotations required:
                <ul className={styles.list}>
                  <li>Sudanese Arabic caption </li>
                  <li>MSA caption </li>
                  <li>Audio description (Sudanese Arabic)</li>
                </ul>
              </p>
              <br />
              <h3 className={styles.pMargin}>Videos (3-10 Seconds):</h3>
              <p className={styles.pMargin}>Examples: <br />
                <ul className={styles.list}>
                  <li>Market activity</li>
                  <li>River/Nile scenes</li>
                  <li>Agriculture & livestock</li>
                  <li>Transportation and movement</li>
                  <li>Schools & Universities</li>
                </ul> 
                <br />
                Annotations required: 
                <ul className={styles.list}>
                  <li>Descriptive caption </li>
                  <li>Audio narration</li>
                </ul>
              </p>
            </div>
            <hr className={styles.line}/>

            {/* Who can join */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxPerson  color="#121212" size={20} /></div>
                <h2>Who can Participate? </h2>
              </div>
              <p className={styles.pMargin}>Participation is open to: 
                <ul className={styles.list}>
                  <li>University teams</li>
                  <li>Research groups </li>
                  <li>Startups and community labs</li>
                  <li>Independent photographers and creators</li>
                  <li>Sudanese diaspora communities </li>
                  <li>Anyone passionate about improving AI for Sudan</li>
                </ul>
                No machine-learning experience is required — only creativity, ethical data collection, and care in annotation. 
              </p>
            </div>
            <hr className={styles.line}/>

            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxPerson color="#121212" size={20} /></div>
                <h2>Team Structure</h2>
              </div>
              <p className={styles.pMargin}>
                  <ul className={styles.list}>
                  <li>Participants may compete individually or in teams</li>
                  <li>Each team may include up to four (4) members maximum</li>
                  <li>Teams are encouraged to form multidisciplinary groups combining data science, business, engineering, and domain knowledge</li>
                  <li>Every team must designate a team leader responsible for communication and submissions on the platform</li>
                </ul>
              </p>
            </div>
            <hr className={styles.line}/>

            
            {/* Competition Timeline  */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxCalendar  color="#121212" size={20} /></div>
                <h2>Competition Timeline</h2>
              </div>

              <h3 className={styles.pMargin}>Phase 1 — Data Collection Plan (2 Weeks) </h3>
              <p className={styles.pMargin}>Teams submit a 1–2 page plan describing:<br />
                <ul className={styles.list}>
                  <li>Data categories they will collect </li>
                  <li>Tools and workflow</li>
                  <li>Ethical approach and consent</li>
                  <li>Expected dataset size</li>
                </ul>
                <strong className="bold">Deadline 1 Submission Form will be provided. </strong>
              </p>
              <br />
              <h3 className={styles.pMargin}>Phase 2 — Data Collection (1.5 Months) </h3>
              <p className={styles.pMargin}>Teams collect: <br />
                <ul className={styles.list}>
                  <li>Images</li>
                  <li>Videos</li>
                  <li>Sudanese Arabic + MSA captions </li>
                  <li>Audio descriptions</li>
                </ul> 
                <br />
                Weekly support, Q&A sessions, and early-bird checks will be available.
              </p>

              <br />
              <h3 className={styles.pMargin}>Phase 3 — Final Submission (Last Week of Month 2)</h3>
              <p className={styles.pMargin}>Teams submit: <br />
                <ul className={styles.list}>
                  <li>Cloud folder with dataset (Google Drive/Dropbox/OneDrive/Mega)</li>
                  <li>Google Sheet with all image/video links and captions </li>
                  <li>Final report (2–5 pages) </li>
                </ul> 
              </p>

              <br />
              <h3 className={styles.pMargin}>Phase 4 — Evaluation & Results (2 Weeks) </h3>
              <p className={styles.pMargin}>Submissions are evaluated on: <br />
                <ul className={styles.list}>
                  <li>Data quality </li>
                  <li>Diversity of content</li>
                  <li>Annotation quality </li>
                  <li>Annotation quality </li>
                  <li>Documentation & organization</li>
                </ul> 
                <br />
                Winners and honorable mentions announced afterward.
              </p>
            </div>
            <hr className={styles.line}/>

            <div>
              {/* Evaluatio Criteria section */}
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxMagnifyingGlass color="#121212" size={20} /></div>
                <h2>Evaluation Criteria </h2>
              </div>
              <p className={styles.pMargin}>Teams will be scored on: <br />
                <ul className={styles.list}>
                  <li><strong className="bold">Data Quality (40 pts)</strong></li>
                  <li><strong className="bold">Diversity & Coverage (25 pts)</strong></li>
                  <li><strong className="bold">Annotation Quality (25 pts)</strong></li>
                  <li><strong className="bold">Documentation & Organization (10 pts)</strong></li>
                </ul>
                A strict ethics checklist must be followed. 
              </p>
            </div>
            <hr className={styles.line}/>


              {/* Prizes section */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><FaTrophy color="#121212" size={20} /></div>
                <h2>Prizes </h2>
              </div>
              <p className={styles.pMargin}>Details will be announced soon. Awards may include: <br />
                <ul className={styles.list}>
                  <li>Certificates</li>
                  <li>Recognition in the final technical report </li>
                  <li>Co-author the dataset paper (Based on contribution) </li>
                  <li>First Place Award: Prizes valued upto $300.</li>
                  <li>Best System Award: Prizes valued upto $100, awarded to the team that delivers a robust and well-documented end-to-end system covering the full pipeline—from data collection and annotation to captioning, question answering, packaging, comprehensive documentation, and an accompanying paper.</li>
                  
                </ul> 
              </p>
            </div>
            <hr className={styles.line}/>

            {/* Ethical Requirements section */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><HiOutlineShieldCheck  color="#121212" size={20} /></div>
                <h2>Ethical Requirements  </h2>
              </div>
              <p className={styles.pMargin}>All submissions must follow Sudan-MM’s mandatory ethics guidelines:  <br />
                <ul className={styles.list}>
                  <li>Informed consent for any identifiable person</li>
                  <li>No sensitive, political, or unsafe content </li>
                  <li>Respect for cultural norms and social boundaries </li>
                  <li>Only public or permitted media sources allowed </li>                  
                </ul> 
                <br />
                Teams that violate ethics guidelines may be disqualified. 
              </p>
            </div>
            <hr className={styles.line}/>

            {/* you participate */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxStar color="#121212" size={20} /></div>
                <h2>Why Participate?</h2>
              </div>
              <p className={styles.pMargin}>
                By joining Sudan-MM, teams will: <br />
                <ul className={styles.list}>
                  <li>Contribute to the <strong className="bold">first multimodal Sudanese dataset in history</strong></li>
                  <li>Learn best practices for data collection and annotation </li>
                  <li>Build skills in AI-ready dataset creation</li>
                  <li>Support accessibility tools for Sudan</li>
                  <li>Help Sudan become visible in global AI research</li>
                </ul>
                <br />
                Your contribution will support researchers, NGOs, technologists, and communities building tools for Sudan.
              </p>
            </div>
            <hr className={styles.line}/>


            {/* How to register */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxClipboard  color="#121212" size={20} /></div>
                <h2>How to Register</h2>
              </div>
              <p className={styles.pMargin}>Registration is open to all. </p>
              <p className={styles.pMargin}><strong>Deadline 1 Form (Data Collection Plan). </strong></p>
              <p className={styles.pMargin}>Stay tuned for submission templates and sample data.</p>
            </div>

            <hr className={styles.line}/>


            {/* Documentation & Tools  */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxFileText  color="#121212" size={20} /></div>
                <h2>Documentation & Tools </h2>
              </div>
              <p className={styles.pMargin}>
                Participants will receive: <br />
                  <ul className={styles.list}>
                  <li>Folder structure templates</li>
                  <li>Caption and metadata examples</li>
                  <li>Audio recording guidelines</li>
                  <li>Sample dataset sheet</li>
                </ul>
                <br />
                Everything you need to start collecting high-quality data. 
              </p>
            </div>
            <hr className={styles.line}/>

            {/* Join Us  */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><HiOutlineUserGroup  color="#121212" size={20} /></div>
                <h2>Join Us  </h2>
              </div>
              <p className={styles.pMargin}>Sudan-MM 2025 is more than a competition — it’s a national digital initiative. </p>
              <p className={styles.pMargin}>Help us build the foundation for Sudanese AI.</p>
              <p className={styles.pMargin}><strong className="bold">Be part of the team that puts Sudan on the global AI map. </strong></p>
              <br />
              <hr className={styles.line}/>
            </div>
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <CustomButton 
            name="Register Now"
            onclick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScHTq2Cj5XMJB1BF9Lyyyr2eSXcX6we6pHjPIrSZxjWqY4piA/viewform', '_blank')}
          />
        </div>
        
      </main>
      
    </div>
  );
}


export default SharedTask;