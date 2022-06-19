import { useState } from 'react'
import styles from './styles.module.scss'
// import { NavItem } from '../NavItem'
import { ActiveLink } from '../ActiveLink'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { navList } from '../../data.json'
interface NavItemProps {
  item: NavContent
}

interface NavList {
  list?: NavContent[]
}
export function Navigation({ list = navList }: NavList) {
  const [openNav, setOpenNav] = useState(false)
  return (
    <>
      <nav
        className={
          `
          ${openNav ? styles.open : styles.closed} 
          ${styles.navigation}`}
      // className={styles.navigation}
      // animate={open ? 'open' : 'closed'}
      // transition={{ duration: 0.5 }}
      >

        <div className={styles.innerNav}>
          <ul>
            {list.map(item => {
              return (
                <NavItem item={item} key={item.id} />
              )
            })}

          </ul>
        </div>
      </nav>

      <button
        className={`${openNav ? styles.open : styles.closed} ${styles.toggle}`}
        onClick={() => setOpenNav(show => !show)}

      >
        <span ></span>
      </button>
    </>
  )
}

function NavItem({ item }: NavItemProps) {
  const [openLi, setOpenLi] = useState(false)

  if (item.list) {
    return (
      <li onClick={() => setOpenLi(show => !show)} className={`${openLi ? styles.open : styles.closed} ${styles.parent}`}>
        <p>{item.title}
          <span className={styles.pointing}>{' \u25BE'}</span>
        </p>
        {/* <p>{item.title}{item.list && <Play size={12} className={styles.seta} />}</p> */}
        <SlideDown className={'my-dropdown-slidedown'}>
          {openLi &&
            <ul className={styles.navbarDropdown}>
              {
                item.list.map(item => {
                  return (

                    <ActiveLink activeClassName={styles.active} key={item.id} href={`${item.link}`} >
                      <a className={styles.active}>
                        <li><p>{item.title}</p></li>
                      </a>
                    </ActiveLink>
                  )
                }
                )
              }
            </ul>
          }
        </SlideDown>
      </li>
    )
  }

  return (
    <ActiveLink activeClassName={styles.active} href={`${item.link}`} >
      <a className={styles.active}>
        <li className={styles.unique}>
          <p>{item.title}{item.list && <span className={styles.pointing}>{' \u25BE'}</span>}</p>
          {/* <p>{item.title}{item.list && <Play size={12} className={styles.seta} />}</p> */}
        </li>
      </a>

    </ActiveLink>
  )
}