import { IconType } from 'react-icons';
import styles from "./card.module.css";

type CardProps = {
    title?: string;
    description?: string;
    onTap?: ()=> void;
    icon?: IconType;
}

function Card({ title, description, onTap, icon: Icon }: CardProps) {
    return (
        <div className={styles.cardContainer} onClick={onTap}>
            <h3 className={styles.trackTitle}>{Icon && <Icon color="#ef7205" size={24} />} {title}</h3>
            <p className={styles.trackDescription}>{description}</p>
        </div>
    )
}


export default Card;