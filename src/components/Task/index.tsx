import { AirplaneInFlight, Check, Tag, Trash } from "phosphor-react";
import styles from './styles.module.scss'
interface TaskProps {
  key_: string,
  text: string,
  title: string,
  isCompleted: boolean,
  onDeleteTask: (taskKey: string) => void,
  onCompleteTask: (taskKey: string) => void
}

export function Task({ key_, title, text, isCompleted = false, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleRemoveTask() {
    onDeleteTask(key_)
  }

  function handleCompleteTask() {
    onCompleteTask(key_)
  }
  return (
    <article className={isCompleted ? `${styles.completed} ${styles.task}` : styles.task}>
      {/* <div className={styles.tag}>
        <Tag size={20} />
      </div> */}
      <div className={styles.ok}>
        <span onClick={handleCompleteTask}><Check size={9} /></span>
      </div>
      <p className={styles.textTitle}><strong>{title}</strong></p>
      <div className={styles.text}>
        <p className={styles.textContent}>
          {text}
        </p>
      </div>
      <div className={styles.delete}>
        <button onClick={handleRemoveTask} >
          <Trash size={24} />
        </button>
      </div>
    </article >
  )
}