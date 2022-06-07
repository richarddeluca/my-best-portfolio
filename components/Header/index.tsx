import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ToggleSwitch } from '../ToggleSwitch'
import { ThemeChanger } from '../ThemeChanger'
import { MenuBox } from '../MenuBox'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  const logoSize = 40
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <div className={styles.logo}>
          <MenuBox />

        </div>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/" >
            <a className={styles.active}>
              Início
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/about">
            <a className={styles.active}>Sobre</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/feed">
            <a>Projetos</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/contact">
            <a>Contate-me</a>
          </ActiveLink>
          <ThemeChanger content={'Cor'} />
        </nav>
      </div>
    </header>
  )
}