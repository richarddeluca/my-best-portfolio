import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ToggleSwitch } from '../ToggleSwitch'
import { ThemeChanger } from '../ThemeChanger'

export function Header() {
	const logoSize = 40
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>

				<div className={styles.logo}>
					<ToggleSwitch />
				</div>
				<nav>
					<Link href="" >
						<a className={styles.active}>
							Início
						</a>
					</Link>
					<Link href="">Sobre</Link>
					<Link href="">Projetos</Link>
					<Link href="">Contate-me</Link>
					<ThemeChanger content={'Cor'} />
				</nav>
			</div>
		</header>
	)
}