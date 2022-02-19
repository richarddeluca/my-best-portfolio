import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SignInButton } from './components/SignInButton'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portal RPG</title>
        <meta name="description" content="Organize suas mesas, mundos, participantes e personagens de RPG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.titleSection}>

          <h1 className={styles.title}>
            Bem vinde ao <a href="https://nextjs.org">Portal RPG</a>!
          </h1>

          <h2>A aventura te espera!</h2>

          <p className={styles.description}>
            Comece criando sua conta{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <SignInButton />
        </section>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
