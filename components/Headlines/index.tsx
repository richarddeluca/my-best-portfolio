import styles from './styles.module.scss'

interface Props {
    children: string,
    split: string
}

let textList: string[];
let chunkText: string;

export function Headlines(props: Props) {
    { textList = props.children.split(props.split) }
    return (
        <div className={styles.ticker}>
            <div className={styles.tickerNews}>
                <p className={styles.tickerLine}>
                    {
                        textList.map((chunk) => {
                            chunkText = (" - " + chunk)
                            return (
                                <span key={chunk} className={styles.tickerSpan}>{chunkText}</span>
                            )
                        })
                    }
                </p>
            </div>
        </div>
    )
}