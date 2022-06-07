import { Pencil } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://picsum.photos/500" alt="foto de perfil" />
      <div className={styles.profile}>
        <Avatar hasBorder />
        <strong>Ricahrd Deluca</strong>
        <span>web dev</span>
      </div>
      <footer>
        <a href="#">
          <Pencil size={20} />
          Editar seu perfil
        </a>
      </footer>
      <section className={styles.boxPerfil}>
        <img src="https://picsum.photos/150" alt="Foto de Richard, imagem de perfil" />
        <h1>Richard Deluca</h1>
        <p>Desenvolvedor Web</p>
      </section>

      <section className={styles.boxContato}>
        <article>
          <a href="">
            <img src="https://picsum.photos/20" alt="ícone localização" />
            <p>Brasil</p>
          </a>
          <a href="">
            <img src="https://picsum.photos/20" alt="ìcone linkedin" />
            <p>richard-deluca-dev</p>
          </a>
          <a href="">
            <img src="https://picsum.photos/20" alt="ícone github" />
            <p>richard-deluca</p>
          </a>
          <a href="">
            <img src="https://picsum.photos/20" alt="ícone site" />
            <p>richarddeluca.com</p>
          </a>
          <a href="">
            <img src="https://picsum.photos/20" alt="ícone e-mail" />
            <p>richard.deluca.dev@gmail.com</p>
          </a>
        </article>
      </section>

      <section className={styles.boxTecnologias}>
        <h2>Tecnologias</h2>
        <article className={styles.techList}>
          <div>Javascript</div>
          <div>Javascript</div>
          <div>Javascript</div>
          <div>Javascript</div>
          <div>Javascript</div>
          <div>Javascript</div>
          <div>Javascript</div>
        </article>
      </section>
      <section className={styles.boxExperiencias}>
        <h2>Experiências</h2>
        <article>
          <ul>
            <li>
              <h3>Nada</h3>
              <p>2121 - atualmente</p>
              <p>sambando</p>
            </li>
            <li>
              <h3>Anvisa</h3>
              <p>2014-2014</p>
              <p>técnico em regulação</p>
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.boxEducacao}>
        <h2>Educação</h2>
        <article>
          <ul>
            <li>
              <h3>Rocketseat</h3>
              <p>2022 - atualmente</p>
              <p>ignite pro</p>
            </li>
            <li>
              <h3>Rocketseat</h3>
              <p>2021 - 2021</p>
              <p>Discover</p>
            </li>
            <li>
              <h3>UnB</h3>
              <p>2015 - atualmente</p>
              <p>Psicologia</p>
            </li>
          </ul>
        </article>
      </section>
    </aside>
  )
}