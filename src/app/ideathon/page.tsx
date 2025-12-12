"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import PeopleCard from "@/components/peopleCard/peopleCard";
import TimelineCard from "@/components/timelineCard/timelineCard";



export default function Home() {
  const router = useRouter();
  
  const peopleNames = ["Alice Johnson", "Bob Smith", "Charlie Davis"];
  const peopleBio = [
    "Alice is a seasoned AI researcher with a passion for developing innovative machine learning models.",
    "Bob is a software engineer specializing in full-stack development and cloud computing.",
    "Charlie is a data scientist focused on extracting insights from large datasets to drive business decisions."
  ];
  const peopleImages = [
    "/images/people/alice.jpg",
    "/images/people/bob.jpg",
    "/images/people/charlie.jpg"
  ];

  const presentersNames = ["Diana Prince", "Ethan Hunt"];
  const presentersBio = [
    "Diana is an expert in UX/UI design with a knack for creating user-friendly digital experiences.",
    "Ethan is a cybersecurity specialist dedicated to protecting systems from cyber threats."
  ];
  const presentersImages = [
    "/images/people/diana.jpg",
    "/images/people/ethan.jpg"
  ];

  const timeLines = [
    {date: "18 DEC", description: "Registration Opens", addInfo: ""},
    {date: "20 DEC", description: "Registration Closes", addInfo: "Confirmation emails sent (Platform link + password)"},
    // {date: "20 - 23 DEC", description: "Final Submission", addInfo: "Teams submit their final projects for evaluation."},
    {date: "21 DEC", description: "Sessions", addInfo: ""},
    {date: "23 DEC", description: "Final submissions due", addInfo: ""},
    {date: "23 DEC", description: "Pitch Deck", addInfo: ""},
    {date: "23 DEC", description: "Evaluation of Submissions", addInfo: ""},
    {date: "23 DEC", description: "Announcement and Winnders", addInfo: ""}
  ];
  
  return (
    <div>
      
      {/* Header of the web */}
      <Header activeID={1}/>
      <main className={styles.page}>
        <h1>Track 1: <span className={styles.titleOrdange}>IDEATHON</span></h1>
        <p className={styles.pMargin}>AI and ML - create intelligent solutions leveraging artificial intelligence and data science</p>
        <hr className={styles.line}/>

        <div className={styles.contentContainer}>
          {/* left hand side content */}
          <div>
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
                <h2>About Track</h2>
              </div>
              <p className={styles.pMargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <hr className={styles.line}/>
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
                <h2>Instructions</h2>
              </div>
              <p className={styles.pMargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>


            <hr className={styles.line}/>

            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
                <h2>Participation Requirements</h2>
              </div>
              <p className={styles.pMargin}>
                <ol className={styles.list}>
                  <li>Address a validated, specific problem within the Sudanese context.</li>
                  <li>Include a feasible AI/ML component that strengthens the value or functionality of the solution.</li>
                  <li>Demonstrate novelty, meaningful impact, and practical relevance.</li>
                  <li>Provide a Proof of Concept (POC) — either a very simple prototype or a structured implementation plan showing feasibility.</li>
                  <li>Present a sustainability model, including potential revenue streams and how resources or future investments will be used.</li>
                </ol>
               </p>
            </div>

            <hr className={styles.line}/>
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
                <h2>Why You Should Join</h2>
              </div>
              <p className={styles.pMargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <hr className={styles.line}/>
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
                <h2>Full Proposal Requirements</h2>
              </div>
              <p className={styles.pMargin}>
                <ol className={styles.list}>
                  <li><b>Problem Statement & Market Need:</b> Clear definition of the problem, its significance and affected groups.</li>
                  <li><b>Target Users & Use Cases:</b> Primary beneficiaries and core use cases demonstrating how the solution will be used.</li>
                  <li><b>Proposed Solution:</b> Full explanation of the solution, value proposition and why it is unique or superior to alternatives.</li>
                  <li><b>AI/ML Component (Technical Feasibility):</b> Role of AI/ML in the solution, intended models or algorithms, data requirements and sourcing and anticipated technical challenges.</li>
                  <li><b>Proof of Concept (POC):</b> Participants must demonstrate feasibility through:
                          <ul className={styles.list}>
                            <li>A simple prototype (screenshots, basic workflow, mock-up), or</li>
                            <li>A structured implementation plan with milestones and expected deliverables</li>
                          </ul>
                        
                  </li>
                  <li><b>Business Model & Sustainability:</b> Revenue model, cost estimates, sustainability approach and how future investments will be used.</li>
                  <li><b>Scalability & Impact:</b> Potential to scale, expected social, economic, or environmental benefits.</li>

                </ol>
              </p>
            </div>

            <hr className={styles.line}/>
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}></div>
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
            {/* end of left hand side content */}
            </div>
            {/* right hand side content */}
            <div className={styles.cardSection}>
              {/* timeline card */}
              <div className={styles.cardMargin}>
                <TimelineCard timeline={timeLines} />
              </div>
              {/* judges card */}
              <div className={styles.cardMargin}>
                <PeopleCard
                  title="Meet The Judges"
                  peopleNames={peopleNames}
                  peopleBio={peopleBio}
                  peopleImages={peopleImages}
                />
              </div>
              {/* presenters card */}
              <div className={styles.cardMargin}>
                <PeopleCard 
                  title="Meet The Presenters"
                  peopleNames={presentersNames}
                  peopleBio={presentersBio}
                  peopleImages={presentersImages}
                />
              </div>
          </div>
        
        </div>
      </main>
      
    </div>
  );
}
