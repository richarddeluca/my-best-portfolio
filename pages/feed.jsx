import { Header } from "../components/Feed/Header"
import { Sidebar } from "../components/Feed/Sidebar"
import styles from './../styles/Feed.module.css'
import { Post } from "../components/Feed/Post"

const posts = [
  {
    author: {
      avatarUrl: 'https://picsum.photos/90',
      name: 'Alexandre de Lima',
      role: 'Padeiro'
    },
    content: [
      { type: 'paragraph', content: 'Nossa' },
      { type: 'paragraph', content: 'muito legal isso aí, cabra' },
      { type: 'link', content: 'wikipedia.com' }
    ],
    publishedAt: new Date('2022-06-04 15:45:21')
  },
  {
    author: {
      avatarUrl: 'https://picsum.photos/80',
      name: 'Sandra Cristina',
      role: 'Cozinheira'
    },
    content: [
      { type: 'paragraph', content: 'maravilha' },
      { type: 'paragraph', content: 'muito legal isso aí, bananinha' },
      { type: 'link', content: 'google.com' }
    ],
    publishedAt: new Date('2022-06-03 16:45:21')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.publishedAt}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App