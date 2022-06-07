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
import data from '../data.json'
const Home: NextPage = () => {
  console.log(data.techList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Deluca, Desenvolvedor</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>

      <main className={styles.main}>

        <FirstScreen />

        <Headlines split=" - ">{data.techList + data.techList + data.techList}</Headlines>
      </main>

    </div>
  )
}

export default Home
