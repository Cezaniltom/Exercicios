import { type ReactNode } from 'react'
import styles from './Heading.module.css'

interface Header{
    children: ReactNode
    header: ReactNode
}

export function Heading({children, header}: Header) {
    return <div className={styles.color}>
        <h1 className={styles.heading}>{children}</h1>
        <h1 className={styles.heading}>{header}</h1>    
    </div>
}