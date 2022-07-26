import styles from './styles.module.scss'

import Link from 'next/link'
import { useState } from 'react';

export function MenuSide() {

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.navlogo}>[BrandLogo]</a>
        </Link>
        <ul className={isOpen === false ?
          styles.navmenu : styles.navmenu + ' ' + styles.active}>
          <li className={styles.navitem}>
            <Link href='/'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/about'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>About</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/contact'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Contact</a>
            </Link>
          </li>
        </ul>
        <button className={isOpen === false ?
          styles.hamburger : styles.hamburger + ' ' + styles.active}
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  )
}