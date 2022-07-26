import '../styles/globals.scss'
import '../styles/colors.scss'

import { ThemeProvider } from 'next-themes'

import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
