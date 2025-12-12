import styles from "./card.module.css";

type CardProps = {
    title?: string;
    description?: string;
    onTap?: ()=> void;
}

function Card({ title, description, onTap }: CardProps) {
    return (
        <div className={styles.cardContainer} onClick={onTap}>
            <h3 className={styles.trackTitle}>{title}</h3>
            <p className={styles.trackDescription}>{description}</p>
        </div>
    )
}


export default Card;