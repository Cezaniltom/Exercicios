import styles from './Logo.module.css'
import { TimerIcon } from 'lucide-react'

export function Logo() {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href="#">
                <TimerIcon />
                <span>Teste</span>
            </a>
        </div>
    )
}