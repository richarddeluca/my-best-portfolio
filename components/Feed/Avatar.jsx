import styles from './Avatar.module.css'
import Image from 'next/image'

export function Avatar({ hasBorder = false, src = "https://picsum.photos/100" }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="imagem de perfil"
    // width={40}
    // height={40}
    />
  )
}