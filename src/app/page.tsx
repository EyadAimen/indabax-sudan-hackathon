"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { RxLightningBolt, RxMagnifyingGlass } from "react-icons/rx";
import { FaUsersCog } from "react-icons/fa";



export default function Home() {
  const router = useRouter();
  
  const handleCardClick = (route: string)=> {
    router.push(route);
  }
  return (
    <div className={styles.page}>
      
      {/* Header of the web */}
      <Header activeID={0}/>
      <main className={styles.page}>
        <div className={styles.heading}>
          <h1 className={styles.head1}>INDABAX SUDAN <span className={styles.titleOrdange}>HACKATHON</span></h1>
          <p className={styles.par}>Join us on a wonderful IndabaX Sudan hackathon journey with multiple tracks</p>
        </div>
        <div className={styles.cardSection}>
          <Card title="Ideathon" description="Innovate,Collaborate, Create. Aims to identify high-quality, AI/ML-enabled solutions that address well-defined, real-world challenges in Sudan." 
                onTap={()=>handleCardClick("ideathon")}
                icon={RxLightningBolt}
          />
          <Card title="Problem Solving" description="Show case your problem-solving skills and innovative ideas to tackle issues in Sudan." 
                onTap={()=>handleCardClick("problem-solving")}
                icon={RxMagnifyingGlass}
                />
          <Card title="Sudan-MM 2025 Shared Task" description="A Multimodal Data Collection Challenge for Sudanese Images, Videos, Text, and Voice." 
                onTap={()=>handleCardClick("shared-task")}
                icon={FaUsersCog}
          />
        </div>

      </main>
      
    </div>
  );
}
