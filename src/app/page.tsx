import Image from "next/image";
import styles from "./page.module.css";
import logo from "../assets/ixs-logo.png";


export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Image 
          src={logo} 
          alt="IndabaX Sudan logo"
          
        />
        <nav>
          <ul>
            <li>Track 1</li>
            <li>Track 2</li>
            <li>Track 3</li>
            <li>Track 4</li>
            <li>Track 5</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
