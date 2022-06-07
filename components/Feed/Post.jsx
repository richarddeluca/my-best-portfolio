import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt, { locale: ptBR, addSuffix: true }
  )
  const publishedISOString = publishedAt.toISOString()

  const [newComment, setNewComment] = useState({})

  const [comments, setComments] = useState([{
    text: 'fera, você é fera',
    id: '01'
  }
  ])

  const isNewCommentEmpty = newComment.text == undefined || newComment.text.length == 0
  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewComment({ text: event.target.value, id: String(event.timeStamp) })
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity('preenchimento obrigatório')
  }

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newComment])
    console.log(newComment.id)
    console.log(newComment.text)

    setNewComment({ text: '' })
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedISOString}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <a key={line.content} href={`https://${line.content}`}>{line.content}</a>
            }
          })
        }

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newComment.text}
          required
          onInvalid={handleCommentInvalid}
          placeholder='Deixe um comentário'
        >
        </textarea>
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment comment={comment} key={comment.id} onDeleteComment={deleteComment} />
          )
        })}
      </div>
    </article>
  )
}