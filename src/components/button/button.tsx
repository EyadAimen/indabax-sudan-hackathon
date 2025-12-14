import styles from './button.module.css';

type ButtonProps = {
    name?: string;
    onclick?: ()=> void;
}


function CustomButton ({ name, onclick }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onclick}>{name}</button>
    )
}


export default CustomButton;