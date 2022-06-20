import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, InvalidEvent, MouseEventHandler, useEffect, useState } from 'react';

import { Airplane, AirplaneInFlight, ClipboardText, PaperPlane, Trash } from "phosphor-react";
import styles from '../styles/Todo.module.scss'
import { Task } from '../components/Task';
import { Navigation } from '../components/Navigation';

interface TaskData {
  key: string,
  title: string,
  text: string,
  isCompleted: boolean,
  tag?: 'yellow' | 'red' | 'blue' | 'green',
  dateCreated?: Date,
  prazo?: Date
}


export default function App() {

  const [listaDeTarefas, setListaDeTarefas] = useState<TaskData[]>([
    { key: uuidv4(), isCompleted: false, title: 'Estudos', text: 'Ler algumas páginas do livro Rápido e Devagar' },
    { key: uuidv4(), isCompleted: true, title: 'Web Dev', text: 'Terminar de desenvolver ToDo App (produto mínimo viável) e postar no LinkedIn' },
    { key: uuidv4(), isCompleted: false, title: 'Meditação', text: 'Praticar um exercício do livro A Liberated Mind' },
    { key: uuidv4(), isCompleted: false, title: 'Lazer', text: 'Acorda o Pedrinho, que hoje tem chocolate. Vem dançar calipso, vai ver cotio colhátio. don-don, dig-ri-don, don-don-don dig-dig-don, don , dig-ri-don, don-don-don dig-dig. - (John Lennon ft. Belchior)' },
  ])
  const [numDeTarefas, setNumDeTarefas] =
    useState({ concluidas: 0, existentes: 0 })

  const [todoText, setTodoText] = useState<string>('')
  const [todoTitle, setTodoTitle] = useState<string>('')
  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()
    const novaTarefa = { key: uuidv4(), isCompleted: false, title: todoTitle, text: todoText }
    setListaDeTarefas([novaTarefa, ...listaDeTarefas])
    setTodoText('')
    setTodoTitle('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTodoText(event.target.value)
  }

  function handleCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('preenchimento obrigatório')
  }

  function handleNewTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTodoTitle(event.target.value)
  }

  function handleTitleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('preenchimento obrigatório')
  }

  function removeTask(taskKey: string) {
    const todoListAfterDelete = listaDeTarefas.filter(task => {
      if (task.key !== taskKey) {
        return task
      }
    })
    setListaDeTarefas(todoListAfterDelete)
    contarNumDeTarefas()
  }

  function concludeTask(taskKey: string) {
    const todoListAfterConclude = listaDeTarefas.filter(task => {
      if (task.key !== taskKey) {
        return task
      }
      else if (task.key === taskKey) {
        task.isCompleted = !task.isCompleted
        return task
      }
    })
    setListaDeTarefas(todoListAfterConclude)
    contarNumDeTarefas()
  }

  function contarNumDeTarefas() {
    let count = 0
    function iterarPorCompleted(task: TaskData) {
      if (task.isCompleted == true) {
        count++
      }
    }
    listaDeTarefas.forEach(task => iterarPorCompleted(task))
    setNumDeTarefas({ concluidas: count, existentes: listaDeTarefas.length })
  }
  contarNumDeTarefas

  useEffect(() => {
    contarNumDeTarefas();
  }, [listaDeTarefas]);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <AirplaneInFlight size={32} className={styles.headerLogo} />
          <h2 className={styles.a}>ToDo</h2>
        </div>
      </header>

      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleCreateNewTodo}>
          <input
            className={styles.inputTitle}
            name="title"
            placeholder="dê um título (max 18 caracteres)"
            type="text"
            maxLength={12}

            onChange={handleNewTitleChange}
            onInvalid={handleTitleInvalid}
            required
            value={todoTitle}
          />
          <input
            className={styles.inputText}

            name="text"
            placeholder="descreva a tarefa a ser feita"
            type="text"
            maxLength={288 * 2}
            onChange={handleNewCommentChange}
            onInvalid={handleCommentInvalid}
            required
            value={todoText}
          />
          <button>criar</button>
        </form>

        <header>
          <p>Tarefas criadas: <span className={styles.numTarefas}>{numDeTarefas.existentes}</span></p>
          <p>
            <span className={styles.num}>{numDeTarefas.concluidas}</span>
            {' '}de <span className={styles.numTarefas}>{numDeTarefas.existentes}</span> Concluídas
          </p>
        </header>
        <section className={listaDeTarefas.length < 1 ? styles.noTask : styles.hasTask}>
          {listaDeTarefas.length < 1 ?
            <>
              <PaperPlane />
              <p>
                Não há tarefas cadastradas
              </p>
              <p>Crie tarefas e organize suas ações ao longo do dia</p>
            </>
            : (

              listaDeTarefas.map(task => {
                return <Task
                  title={task.title}
                  text={task.text}
                  key_={task.key}
                  key={task.key}
                  isCompleted={task.isCompleted}
                  onDeleteTask={removeTask}
                  onCompleteTask={removeTask}
                />
              }),
              listaDeTarefas.map(task => {
                return < Task
                  title={task.title}
                  text={task.text}
                  key_={task.key}
                  key={task.key}
                  isCompleted={task.isCompleted}
                  onDeleteTask={removeTask}
                  onCompleteTask={concludeTask}
                />
              })
            )
          }
        </section>
      </main>

    </div>
  )
}

