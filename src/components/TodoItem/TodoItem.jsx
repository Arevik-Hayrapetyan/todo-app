import React, { Fragment } from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, handleCheck, handleDelete }) {
  return (
    <Fragment>
      <li className={styles.todoItem}>
        <input
          className={todo.completed ? styles.checked : ""}
          id={todo.id}
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => handleCheck(e, todo.id)}
        />
        <p className={styles.text}> {todo.title}</p>

        <div
          className={styles.deleteIcon}
          onClick={() => handleDelete(todo.id)}
        >
          <div className={styles.icon}></div>
        </div>
      </li>
    </Fragment>
  );
}
