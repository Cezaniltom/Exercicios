import type { ReactNode } from 'react'
import styles from './MenuItens.module.css'

interface MenuItensProps {
    href: string
    title: string
    children: ReactNode
}

export function MenuItens( {href, title, children}: MenuItensProps) {
    return (
        <a className={styles.menuLink} title={title} href={href}>
            {children}
        </a>
    )
}