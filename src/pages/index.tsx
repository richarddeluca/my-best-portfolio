import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import type { NextPage } from 'next'

import Head from 'next/head'
import { FirstScreen } from '../components/FirstScreen'
import { Headlines } from '../components/Headlines'
import data from '../../data/data.json'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Deluca, Desenvolvedor</title>
        <meta name="description" content="Desenvolvedor Web Front-end com tecnologias avant-garde" />
      </Head>

      <main className={styles.main}>

        <FirstScreen />

        <Headlines split=" - ">{data.techList}</Headlines>
      </main>

    </div>
  )
}

export default Home
