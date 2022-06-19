import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ToggleSwitch } from '../ToggleSwitch'
import { ThemeChanger } from '../ThemeChanger'
import { MenuBox } from '../MenuBox'
import { ActiveLink } from '../ActiveLink'
import { v4 } from 'uuid'
import { useState } from 'react'
import { Navigation } from '../Navigation'
import { navList as navContent } from '../../data.json'
interface NavContent {
  id?: string,
  title: string,
  link?: string,
  list?: NavContent[]
}

interface NavItemProps {
  item: NavContent
}

const logoSize = 40

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <div className={styles.logo}>
          <ThemeChanger content={'Cor'} />
        </div>
        <Navigation list={navContent} />
      </div>
    </header>
  )
}