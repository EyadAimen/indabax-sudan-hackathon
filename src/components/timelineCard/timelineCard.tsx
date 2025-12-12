import { RxCalendar } from "react-icons/rx";
import styles from "./timelineCard.module.css";

type CardProps = {
    
    timeline?: {date: string, description: string, addInfo: string}[];
    
}

function TimelineCard({ timeline }: CardProps) {
    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.trackTitle}><RxCalendar color="#ef7205" size={22}/> Timeline</h3>
            <h4 className={styles.trackTitle}>Competition Period: 20 - 23 DEC</h4>
            <div className={styles.timelineContainer}>
                <div className={styles.verticalLine}></div>
                <ul className={styles.timelineList}>
                    {timeline?.map((tl) => (
                        <li className={styles.personContainer}>
                            <div>
                                <p className={styles.date}>{tl?.date}</p>
                                <p className={`${styles.description} p-dark`}>{tl?.description}</p>
                                <p className={`${styles.personBio} p-dark`}>{tl?.addInfo}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default TimelineCard;