import styles from './styles.module.scss'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Props {
    content: string
}

export function ThemeChanger(props: Props) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className={styles.container}>
            <button onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}>{props.content}</button>
        </div>
    )
}