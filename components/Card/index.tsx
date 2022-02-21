import styles from './styles.module.scss'

interface Props {
	link: string,
	title: string,
	text: string,
}
export function Card(props: Props) {
	return (
		<a href={props.link} className={styles.card}>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</a>
	)
}