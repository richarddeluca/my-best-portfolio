import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/About.module.scss'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre Richard Deluca</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>
      <main className={styles.main}>
        <h1>Por enquanto não há nada por aqui</h1>
        <h2>Aproveite e tire um minuto para prestar atenção no seu corpo, arrumar a postura e desfrutar da sua respiração</h2>
      </main>
    </>
  )
}

export default About
