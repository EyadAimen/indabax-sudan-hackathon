import styles from "./peopleCard.module.css";

type CardProps = {
    title?: string;
    peopleNames?: string[];
    peopleBio?: string[];
    peopleImages?: string[];
    onTap?: ()=> void;
}

function PeopleCard({ title, peopleNames, peopleBio, peopleImages, onTap }: CardProps) {
    return (
        <div className={styles.cardContainer} onClick={onTap}>
            <h3 className={styles.trackTitle}>{title}</h3>
            {peopleNames?.map((peron, index) => (
                <div className={styles.personContainer}>
                    <img src={peopleImages?.[index]} alt={peopleNames?.[index]} className={styles.personImage} />
                    <div>
                        <h4 className={styles.personName}>{peopleNames?.[index]}</h4>
                        <p className={`${styles.personBio} p-dark`}>{peopleBio?.[index]}</p>
                    </div>
                </div>
            ))}
            {/* <p className="p-dark">{description}</p> */}
        </div>
    )
}


export default PeopleCard;