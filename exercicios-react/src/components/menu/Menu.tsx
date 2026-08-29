import { type ReactNode } from 'react'
import styles from './Menu.module.css'

interface MenuProps {
    children: ReactNode
}

export function Menu({children}: MenuProps) {
    return (
        <nav className={styles.menu}>
            {children}
        </nav>
    )
}