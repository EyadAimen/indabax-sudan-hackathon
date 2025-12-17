"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import PeopleCard from "@/components/peopleCard/peopleCard";
import TimelineCard from "@/components/timelineCard/timelineCard";
import { RxCheck, RxCheckCircled, RxDashboard, RxEnter, RxFileText, RxInfoCircled, RxListBullet, RxPerson, RxStar } from "react-icons/rx";
import CustomButton from "@/components/button/button";
import { FaTrophy } from "react-icons/fa";
import mohammedAbdulrahman from "@/assets/Mohammed Abdulrahman.jpg"
import khalilLiouane from "@/assets/Khalil Liouane.png";
import mohamedYousif from "@/assets/Mohamed Yousif.jpg";
import imadAbbas from "@/assets/Imad Abbas.jpg";
import savannahJudge from "@/assets/savannah.png";
import { HiOutlineTrophy } from "react-icons/hi2";



function Ideathon() {
  const router = useRouter();
  
  const peopleNames = ["Mohamed Yousif", "Imad Abbas", "Savannah Judge"];
  const peopleBio = [
    "Tech lead at Exinity. Focused on building high-reliability payment systems, distributed backend system architectures, and practical uses of AI to improve engineering productivity and financial access.",
    "Co-founder & CEO of JobHunt, an AI-powered job search platform redefining how people find jobs. Trusted by 350K+ professionals across MENA. Also, delegate at the Global Shapers Community (an initiative of the World Economic Forum) and the Young AI Leaders Community (ITU)",
    "Judge from Savannah"
  ];
  const peopleImages = [
    mohamedYousif,
    imadAbbas,
    savannahJudge
  ];

  const peopleLinks = [
    "https://www.linkedin.com/in/adonese/",
    "https://www.linkedin.com/in/imadabbas/",
    "https://www.linkedin.com/company/savannah-innovation-labs/"
  ]

  const presentersNames = ["Mohammed Abdulrahman", "Khalil Liouane"];
  const presentersBio = [
    "AI product builder with a strong background in operations research and applied optimization. Founder of Enigma, where he builds practical AI agents and conversational platforms across multiple sectors, focused on improving operations, scaling reliably, and working in complex, low-resource environments",
    "A venture builder and writer who moved from engineering into entrepreneurship to work more closely with people, systems, and real-world complexity. He has supported 160+ startups across Africa and the Middle East. He also built Archivart, a contemporary African art gallery, and Sprint Art, an artist incubator that has supported 90 African artists in building sustainable livelihoods from their work. Through his writing, Khalil explores what it means to be human in a world shaped by technology and what it really means to live with intention in the modern world."
  ];
  const presentersImages = [
    mohammedAbdulrahman,
    khalilLiouane
  ];
  const presentingTopics = [
    "Building AI startup in Sudan",
    "From engineer to founder"
  ];

  const presentersLinks = [
    "https://www.linkedin.com/in/mohamed-abdulrahman/",
    "https://www.linkedin.com/in/khalilliouane/"
  ]

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
  

  const checkDate = () => {
    const currentDate = new Date();
    const registrationCloseDate = new Date(2025, 11, 20);
    if (currentDate > registrationCloseDate) {
      return true;
    }
    return false;
  }
  return (
    <div>
      
      {/* Header of the web */}
      <Header activeID={1}/>
      <main className={styles.page}>
        <h1>Track 1: <span className={styles.titleOrdange}>IDEATHON 2025: Innovate Collaborate Create </span></h1>
        <p className={styles.pMargin}>The Ideathon is calling all innovators, problem solvers, and creative thinkers This isn’t just a competition; it is a dynamic fusion of talent and ideas where you can team up with individuals from diverse states and backgrounds. Together we’ll tackle some of Sudan’s most critical issues through groundbreaking machine learning projects.</p>
        <hr className={styles.line}/>

        <div className={styles.contentContainer}>
          {/* left hand side content */}
          <div className={styles.leftContent}>
          
          {/* participation requirements */}
          <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxCheck color="#121212" size={20} /></div>
                <h2>Participation Requirements</h2>
              </div>
                
                <p className={styles.pMargin}>
                The following requirements must be addressed in a single PDF document that does not exceed 10 pages: <br />

                <ol className={styles.list}>
                  <li>Address a real, specific, and validated need within the Sudanese market.</li>
                  <li>Provide a clear and feasible AI/ML component.</li>
                  <li>Demonstrate novelty, meaningful impact, and a technically sound application of AI/ML with potential for wide adoption.</li>
                  <li> Present a sustainable business model, including revenue generation and the allocation of future investments or surplus funds.</li>
                  <li> Include a link inside the PDF to a Proof of Concept (PoC) video <strong className="bold">a demo video </strong>, demonstrating either a basic prototype or a structured, realistic implementation plan that proves the idea is actionable. </li>
                </ol>
               </p>
               <br />

               <h4 className={styles.pMargin}>Who Can Participate? </h4>
                <p className={styles.pMargin}>Participation is open to anyone passionate about rebuilding Sudan!!</p>
            </div>
            <hr className={styles.line}/>

             {/* Team Structure */}
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
            
            {/* participation steps */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxInfoCircled color="#121212" size={20} /></div>
                <h2>Important Participation Steps: </h2>
              </div>
              <p className={styles.pMargin}>
                <ol className={styles.list}>
                  <li>All participants must complete the registration form, which will be used to evaluate eligibility. Selection will depend on the quality and relevance of responses to ensure that only qualifying ideas advance. </li>
                  <li> Ideas showing strong potential but lacking some components may still be accepted if participants clearly confirm in the registration form that they will provide the missing elements during the competition period. </li>
                  <li>Accepted ideas will receive an email notification by December 20 with instructions and access to the submission website for official proposal submission.</li>
                </ol>
              </p>
            </div>
            <hr className={styles.line}/>


          

            {/* Your Journey Through the Ideathon 2025  */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxDashboard  color="#121212" size={20} /></div>
                <h2>Your Journey Through the Ideathon 2025 </h2>
              </div>
              <h4 className={styles.pMargin}>1. Application & Selection</h4>
              <p className={styles.pMargin}>
                <ul className={styles.list}>
                  <li>Initial Application Form: Submit a brief Form from December 18-20 (12 AM Sudan time). Tell us about your idea, the problem it solves, expected outcomes, and your team</li>
                  <li> Accepted teams will receive an email by December 15 with login credentials to submit their Full Proposal. Here: </li>
                </ul>
              </p>
              <div className={styles.buttonContainer} style={{marginTop: "1rem"}}>
                <CustomButton 
                  name="Submit full proposal"
                  disabled={checkDate()? false : true}
                  onclick={() => router.push('/ideathon/registration')}
                />
            </div>

          
            <h4 className={styles.pMargin}>2. During the Ideathon</h4>
            <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li>Expert Mentorship: Receive feedback from senior attendees to strengthen your proposal.</li>
                <li>Support Sessions: Participate in 2 dedicated sessions (approx. 2 hours each) covering technical and administrative aspects of the competition.</li>
              </ul>
            </p>

            <br />
            <h4 className={styles.pMargin}>3. Refinement & Judging</h4>
            <p className={styles.pMargin}>
              <ul className={styles.list}>
                <li>Full Proposal Submission: Develop and submit a comprehensive proposal based on the required structure.</li>
                <li> Final Live Pitch: Present your refined project in a live pitch deck on the final day.</li>
                <li> Judging: A panel of three expert judges will evaluate projects, discuss collectively, and choose the winners. </li>
              </ul>
            </p>
            </div>

            <hr className={styles.line}/>
            
            {/* Prizes */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><HiOutlineTrophy  color="#121212" size={20} /></div>
                <h2>Prizes </h2>
              </div>
              <p className={styles.pMargin}>Details will be announced soon. Awards may include: <br />
                <ul className={styles.list}>
                  <li>Prizes valued up to $300.</li>
                  <li>Opportunity to join the Incubation Program at Savanna Innovation labs</li>
                  <li>Introduction to the winner to the IEEE Entrepreneurship – GITEX Program: <br /> 
                      (A program that connects entrepreneurs with mentors, investors, and companies during the 
                      global GITEX technology event.)</li>
                </ul> 
              </p>
            </div>
            <hr className={styles.line}/>
            
            {/* get involved */}
            <div>
              <div className={styles.subtitle}>
                <div className={styles.circle}><RxEnter  color="#121212" size={20} /></div>
                <h2>Get involved </h2>
              </div>
              <p className={styles.pMargin}>Interested in participating? (register Now) 
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
                  peopleLinks={peopleLinks}
                />
              </div>
              {/* presenters card */}
              <div className={styles.cardMargin}>
                <PeopleCard 
                  title="Meet The Presenters"
                  peopleNames={presentersNames}
                  peopleBio={presentersBio}
                  peopleImages={presentersImages}
                  presentationTopic={presentingTopics}
                  peopleLinks={presentersLinks}
                />
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


export default Ideathon;