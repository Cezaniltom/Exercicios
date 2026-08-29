import type { ReactNode } from 'react'
import styles from './MenuItens.module.css'

interface MenuItensProps {
    href: string
    children: ReactNode
}

export function MenuItens( {href, children}: MenuItensProps) {
    return (
        <a className={styles.menuLink} href={href}>
            {children}
        </a>
    )
}