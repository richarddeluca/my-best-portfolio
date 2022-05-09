import { Card } from '../Card'
import styles from './styles.module.scss'

export function GridSection() {
	return (
		<div className={styles.grid}>
			<Card link='/' title='Sites' text='Por enquanto não há nada para mostrar. Venha ver depois' />
			<Card link='/' title='Sobre mim' text='Gosto de cachorros, de filosofia da ciência, de psicoterapia e de pastel' />
			<Card link='/' title='Repositório' text='Aqui tem boilerplates e projetos web. Algum dia terá jogos e projetos mobile' />
			<Card link='/' title='Linkedin' text='Te conheço? Bora nos conectar. Me arranja um emprego. É sério' />
		</div>
	)
}