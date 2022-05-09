import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import type { NextPage } from 'next'

import Head from 'next/head'
import { FirstScreen } from '../components/FirstScreen'
import { Header } from '../components/Header'
import { Headlines } from '../components/Headlines'
import { Footer } from '../components/Footer'
import { MenuBox } from '../components/MenuBox'
import { GridSection } from '../components/GridSection'
import { SpendingsController } from '../components/SpendingsController'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Deluca, Desenvolvedor</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>

      <Header />

      <main className={styles.main}>

        <FirstScreen />
        <SpendingsController />
        <GridSection />

        <Headlines split=" - ">NextJS - Typescript - StyledComponents - React - Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot - NextJS - Typescript - StyledComponents - React Github - HTML - CSS - Javascript - Figma - NodeJS - Testes - Jest - Authentication - Godot</Headlines>
      </main>

      <Footer />
    </div>
  )
}

export default Home
