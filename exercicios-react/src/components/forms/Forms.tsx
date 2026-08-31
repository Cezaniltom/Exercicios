import { type ReactNode } from 'react'
import styles from './Forms.module.css'

interface FormContainerProps {
    children: ReactNode
}

export function FormContainer({children}: FormContainerProps) {
    return (
        <section className={styles.form}>
            {children}
        </section>
    )
}