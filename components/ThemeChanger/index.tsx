import styles from './styles.module.scss'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Props {
  content: string
}

export function ThemeChanger(props: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isToggled, setIsToggled] = useState(theme == 'dark');
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const onToggle = () => setIsToggled(!isToggled);
  function handleClick() {
    onToggle()
    isToggled ? setTheme('light') : setTheme('dark')

  }
  return (
    <div className={styles.container}>

      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={theme == 'dark'} onChange={handleClick} />
        <span className={styles.switch} />

      </label >
      {/* <p>{String(isToggled)}</p> */}
    </div>
  )
}

