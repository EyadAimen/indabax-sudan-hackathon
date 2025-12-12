"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { RxInfoCircled } from "react-icons/rx";



export default function Home() {
  const router = useRouter();
  
  
  return (
    <div>
      
      {/* Header of the web */}
      <Header activeID={1}/>
      <main className={styles.page}>
        <h1>Track 1: <span className={styles.titleOrdange}>AI ML</span></h1>
        <p className={`p-dark ${styles.pMargin}`}>AI and ML - create intelligent solutions leveraging artificial intelligence and data science</p>
        <hr className={styles.line}/>
        <div>
          <div className={styles.subtitle}>
            <div className={styles.circle}><RxInfoCircled color="white" size={20} /></div>
            <h2>About Track</h2>
          </div>
          <p className={`p-dark ${styles.pMargin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <hr className={styles.line}/>
        <div>
          <div className={styles.subtitle}>
            <div className={styles.circle}></div>
            <h2>Instructions</h2>
          </div>
          <p className={`p-dark ${styles.pMargin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
      
    </div>
  );
}
