import Image from 'next/image'
import styles from './styles.module.scss'

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Image src="https://picsum.photos/64" width={64} height={64} alt="LOGO" />
				<nav>
					<a href="" className={styles.active}>Home</a>
					<a href="">Posts</a>
				</nav>
			</div>
		</header>
	)
}