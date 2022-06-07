import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/About.module.scss'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contate Richard Deluca</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>
      <main className={styles.main}>
        <h1>Por enquanto não há nada por aqui</h1>
        <h2>Aproveite e tire um minuto para prestar atenção no seu corpo e desfrutar da sua respiração</h2>
      </main>
    </>
  )
}

export default Contact
