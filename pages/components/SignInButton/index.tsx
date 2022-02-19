import Image from 'next/image'
import styles from './styles.module.scss'

export function SignInButton() {
	return (
		<button type='button' className={styles.signInButton}>
			Entre com
		</button>
	)
}