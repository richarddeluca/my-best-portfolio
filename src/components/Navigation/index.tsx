import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import navData from '../../../data/data.json'
import SlideDown from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import Link from 'next/link'

interface NavContent {
  id?: string,
  title: string,
  link?: string,
  list?: NavContent[]
}

interface NavItemProps {
  item: NavContent
}

interface NavList {
  list?: NavContent[]
}
export function Navigation({ list = navData.navList }: NavList) {
  const [openNav, setOpenNav] = useState(false)
  const [windowScrolled, setWindowScrolled] = useState(false)
  function controlNavOnScroll() {
    if (window.scrollY > 200) {
      setWindowScrolled(true)
    }
    else {
      setWindowScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',
      controlNavOnScroll)
    return () => {
      window.removeEventListener('scroll',
        controlNavOnScroll)
    }
  }, [])

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

            {openLi ?
              <ul className={styles.navbarDropdown}>
                {
                  item.list.map(item => {
                    return (

                      <Link key={item.id} href={`${item.link}`} >
                        <a className={styles.active}>
                          <li><p onClick={() => window.innerWidth < 700 ? setOpenNav(show => !show) : null}>{item.title}</p></li>
                        </a>
                      </Link>
                    )
                  }
                  )
                }
              </ul>
              : null
            }

          </SlideDown>
        </li>
      )
    }

    return (
      <Link href={`${item.link}`} >
        <a className={styles.active}>
          <li className={styles.unique}>
            <p onClick={() => window.innerWidth < 700 ? setOpenNav(show => !show) : null} >{item.title}{item.list && <span className={styles.pointing}>{' \u25BE'}</span>}</p>
            {/* <p>{item.title}{item.list && <Play size={12} className={styles.seta} />}</p> */}
          </li>
        </a>

      </Link>
    )
  }
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
        className={
          `${openNav ? styles.open : styles.closed}
          ${windowScrolled && !openNav ? styles.scrolled : ''}
          ${styles.toggle}`}
        onClick={() => setOpenNav(show => !show)}

      >
        <span ></span>
      </button>
    </>
  )
}

