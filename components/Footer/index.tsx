import Image from 'next/image'
import styles from './styles.module.scss'

export function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerContent}>
				Made by <a>me</a> with ❤️ {'&'} muita canseira{' '}
			</div>
			<div className={styles.logo}>
				<a href="https://github.com/richarddeluca/">
					<Image src="/github-icon.svg" alt="Vercel Logo" width={16} height={16} />
				</a>
				<a href="https://www.linkedin.com/in/richard-deluca-dev/">
					<Image src="/linkedin-icon.svg" alt="Vercel Logo" width={16} height={16} />
				</a>
			</div>
		</footer >
	)
}