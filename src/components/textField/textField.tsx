import styles from "./textField.module.css";

type TextField = {
  label?: string,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange: (value: string) => void,
  error?: string,
  required?: boolean,
};

function TextField ( { label, placeholder, type = "text", value, onChange, error, required = false }: TextField ) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
  
    const isTextarea = type === "textarea";
    return (
      <div className={styles.textFieldContainer}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        {isTextarea ? (
          <textarea
            className={`${styles.textarea} ${error ? styles.error : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            rows={6}
          />
        ) : (
          <input
            type={type}
            className={`${styles.input} ${error ? styles.error : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
} 

export default TextField;