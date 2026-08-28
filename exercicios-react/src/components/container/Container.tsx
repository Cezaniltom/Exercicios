import { type ReactNode } from "react";
import styles from './Container.module.css'

interface ContainerComponent {
    children: ReactNode
}

export function Container({children}: ContainerComponent) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}