import React, { Fragment } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import styles from  "./TodoList.module.css"

export default function TodoList() {
    let data =["todo1", "todo2", "todo3"]
  return (
    <Fragment>
        <section className='list-container'>
            <ul className={styles.listItems}>
            {
               data.map((todo) => <TodoItem todo={todo}/>)
            }
            </ul>
        </section>
    </Fragment>
  )
}
