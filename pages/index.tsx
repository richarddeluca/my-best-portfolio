import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Headlines } from '../components/Headlines'
import { ThemeChanger } from '../components/ThemeChanger'
import { Card } from '../components/Card'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Deluca, Desenvolvedor</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.titleSection}>

          <p className={styles.subtitle1}>Sou</p>
          <h1 className={styles.title}><span className={styles.firstName}>Richard</span> <span className={styles.lastName}>Deluca</span></h1>
          <p className={styles.subtitle2}>Desenvolvedor <span className={styles.subtitle22}>front-end</span></p>



        </section>

        <div className={styles.grid}>
          <Card link='/' title='Sites' text='Por enquanto não há nada para mostrar. Venha ver depois' />
          <Card link='/' title='Sobre mim' text='Gosto de cachorros, de filosofia da ciência, de psicoterapia e de pastel' />
          <Card link='/' title='Repositório' text='Aqui tem boilerplates e projetos web. Algum dia terá jogos e projetos mobile' />
          <Card link='/' title='Linkedin' text='Te conheço? Bora nos conectar. Me arranja um emprego. É sério' />
        </div>

        <Headlines split=" - ">NextJS - Typescript - StyledComponents - React - Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot - NextJS - Typescript - StyledComponents - React Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot</Headlines>
      </main>

      <Footer />
    </div>
  )
}

export default Home
