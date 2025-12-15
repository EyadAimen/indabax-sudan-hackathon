import styles from './button.module.css';

type ButtonProps = {
    name?: string;
    disabled?: boolean;
    onclick?: ()=> void;
}


function CustomButton ({ name, onclick, disabled }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onclick} disabled={disabled}>{name}</button>
    )
}


export default CustomButton;