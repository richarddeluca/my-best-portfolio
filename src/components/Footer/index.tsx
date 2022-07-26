import Image from 'next/image'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import styles from './styles.module.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        Made by <a href='https://www.linkedin.com/in/richard-deluca-dev/'>me</a> com ❤️ {'&'} paciência{' '}
      </div>
      <p>site em construção</p>
      <div className={styles.logoContainer}>
        <a className={styles.logoGit} href="https://github.com/richarddeluca/">
          <FaGithub size={24} />
        </a>
        <a className={styles.logoLinkedIn} href="https://www.linkedin.com/in/richard-deluca-dev/">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer >
  )
}