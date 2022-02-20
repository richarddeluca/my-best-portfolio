import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Headlines } from './components/Headlines'
import { SignInButton } from './components/SignInButton'
import { ThemeChanger } from './components/ThemeChanger'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Deluca Developer</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.titleSection}>

          <h2 className={styles.subtitle1}>Sou</h2>
          <h1 className={styles.title}>Richard Deluca</h1>
          <h2 className={styles.subtitle2}>Desenvolvedor front-end</h2>

          <ThemeChanger />

        </section>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Sites &rarr;</h2>
            <p>Por enquanto não há nada para mostrar</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Sobre mim</h2>
            <p>Gosto de cachorros, de filosofia da ciência e de pastel</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Repositório</h2>
            <p>Por enquanto boilerplates e projetos web. </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Linkedin</h2>
            <p>
              Bora nos conectar. Te conheço? Me arranja um emprego.
            </p>
          </a>
        </div>

        <Headlines split=" - ">NextJS - Typescript - StyledComponents - React - Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot - NextJS - Typescript - StyledComponents - React Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot</Headlines>
      </main>

      <Footer />
    </div>
  )
}

export default Home
