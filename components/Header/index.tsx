import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
	const logoSize = 40
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>

				<div className={styles.logo}>
					<Image src={`https://picsum.photos/${logoSize}`} width={logoSize} height={logoSize} alt="LOGO" />
				</div>
				<nav>
					<Link href="" >
						<a className={styles.active}>
							Início
						</a>
					</Link>
					<Link href="">Trabalhos</Link>
					<Link href="">Contate-me</Link>
				</nav>
			</div>
		</header>
	)
}