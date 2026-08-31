import styles from './InputForm.module.css'

type InputFormProps = {
    name: string
    label?: string
    type: string
    error?: string
} & React.ComponentProps<'input'> //Usado para obter todos os resultados de um elemento/atributo

export function InputForm({name, label, type, error}: InputFormProps) {
    return (
        <div>
            {label ? <label htmlFor={name} className={styles.label}>{label}</label> : ''}
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