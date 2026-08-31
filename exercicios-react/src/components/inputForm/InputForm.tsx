import styles from './InputForm.module.css'

type InputFormProps = {
    name: string
    label?: string
    type: string
    error?: string
} & React.ComponentProps<'input'> //Usado para obter todos os resultados de um elemento/atributo

export function InputForm({name, label, type, error, ...rest}: InputFormProps) {
    return (
        <div>
            {/* Aqui funciona como um operador ternario, mas ao inves de usar ? e :, como o valor não tem falso, substitui por && */}
            {label && <label htmlFor={name} className={styles.label}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                className={styles.inputField}
                {...rest} // Significa que posso passar o restante dos atributos do input
            />

            {error && <span className={styles.span}>{error}</span>}
        </div>
    )
}