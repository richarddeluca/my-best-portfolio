import { FlowerLotus } from 'phosphor-react'
import styles from './styles.module.scss'

export function FirstScreen() {
  return (
    <div className={styles.firstScreen}>

      <section className={styles.titleSection}>

        <p className={styles.subtitle1}>Sou</p>
        <h1 className={styles.title}><span className={styles.firstName}>Richard</span> <span className={styles.lastName}>Deluca</span></h1>
        <p className={styles.subtitle2}>Desenvolvedor <span className={styles.subtitle22}>front-end</span></p>
        <br />
      </section>
      <p>este site está em construção</p>
      <FlowerLotus size={40} />

    </div>
  )
}