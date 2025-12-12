"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  
  const handleCardClick = (route: string)=> {
    router.push(route);
  }
  return (
    <div className={styles.page}>
      
      {/* Header of the web */}
      <Header />
      <main className={styles.page}>
        <div className={styles.heading}>
          <h1 className={styles.head1}>INDABAX SUDAN <span className={styles.titleOrdange}>HACKATHON</span></h1>
          <p className={styles.par}>Join us on a wonderful IndabaX Sudan hackathon journey with multiple tracks</p>
        </div>
        <div className={styles.cardSection}>
          <Card title="Track 1" description="AI and ML - create intelligent solutions leveraging artificial intelligence and data science" onTap={()=>handleCardClick("track1")}/>
          <Card title="Track 1" description="AI and ML - create intelligent solutions leveraging artificial intelligence and data science" onTap={()=>handleCardClick("track1")}/>
          <Card title="Track 1" description="AI and ML - create intelligent solutions leveraging artificial intelligence and data science" onTap={()=>handleCardClick("track1")}/>
          <Card title="Track 1" description="AI and ML - create intelligent solutions leveraging artificial intelligence and data science" onTap={()=>handleCardClick("track1")}/>
          <Card title="Track 1" description="AI and ML - create intelligent solutions leveraging artificial intelligence and data science" onTap={()=>handleCardClick("track1")}/>

        </div>

      </main>
      
    </div>
  );
}
