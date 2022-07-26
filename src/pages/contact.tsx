import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
        <h2>Aproveite e tire um minuto para prestar atenção no seu corpo, arrumar a postura e desfrutar da sua respiração</h2>
        <div className={styles.logoContainer}>
          <a className={styles.logoGit} href="https://github.com/richarddeluca/">
            <FaGithub size={24} />
          </a>
          <a className={styles.logoLinkedIn} href="https://www.linkedin.com/in/richard-deluca-dev/">
            <FaLinkedin size={24} />
          </a>
        </div>
      </main>
    </>
  )
}

export default Contact
