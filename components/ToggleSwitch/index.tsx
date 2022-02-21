import { useState } from 'react'
import styles from './styles.module.scss'

export function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
    return (
        <label className={styles.toggleSwitch}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className={styles.switch} />
        </label >
    );
}