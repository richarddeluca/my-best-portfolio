import styles from './styles.module.scss'

interface Props {
  children: string,
  split: string
}

let textList: string[];
let chunkText: string;
let count = 0

export function Headlines(props: Props) {
  { textList = props.children.split(props.split) }
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerNews}>
        <p className={styles.tickerLine}>
          {
            textList.map((chunk) => {
              count++
              chunkText = (chunk)
              return (
                <span key={count}>
                  <span className={styles.tickerSpan}>
                    {chunkText}
                  </span>{' - '}
                </span>
              )
            })
          }

        </p>
      </div>
    </div>
  )
}