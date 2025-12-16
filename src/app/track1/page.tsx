"use client";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { RxInfoCircled } from "react-icons/rx";
import CustomButton from "@/components/button/button";
import { useState } from "react";



export default function Home() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  
  const delay = async (ms: number) => await setTimeout(() => {
    setDisabled(false);
  }, ms);

  return (
    <div>
      
      {/* Header of the web */}
      <Header activeID={1}/>
      <main className={styles.container}>
      <CustomButton 
        name="Test"
        onclick={!disabled ? () => {
          setDisabled(true);
          delay(3000);
        } : undefined}

        disabled={disabled}
      />

      </main>
      
    </div>
  );
}
