import styles from './InputForm.module.css'

interface InputFormProps {
    name: string
    label: string
    type: string
    error?: string
}

export function InputForm({name, label, type, error}: InputFormProps) {
    return (
        <div>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                className={styles.inputField}
            />

            {error && <span className={styles.span}>{error}</span>}
        </div>
    )
}