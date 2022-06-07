import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://picsum.photos/100" alt="logotipo" />
      <h2 className={styles.title}>Feed</h2>
    </header>
  )
}