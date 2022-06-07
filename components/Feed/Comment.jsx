import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({ comment, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeClick() {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(comment)
  }
  return (
    <div className={styles.comment}>
      <Avatar />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Roberto</strong>
              <time title='wewewewewe' dateTime='2022-06-03 23-:13:16'>Cerca de 1h</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.text}</p>
        </div>

        <footer>
          <button onClick={handleLikeClick}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>

  )
}