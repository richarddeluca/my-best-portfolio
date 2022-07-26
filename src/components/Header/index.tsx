import styles from './styles.module.scss'
import { ThemeChanger } from '../ThemeChanger'
import { Navigation } from '../Navigation'
import navData from '../../../data/data.json'
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
        <Navigation list={navData.navList} />
      </div>
    </header>
  )
}