import React, { Fragment } from "react";
import styles from "./TodoItem.module.css";
import Checkbox from "../Checkbox/Checkbox";

export default function TodoItem({ id, todo, setTodo, handleCheck }) {
  return (
    <Fragment>
      <li className={styles.todoItem}>

        <label htmlFor={todo.id}>
          <input
            className={todo.completed ? styles.checked : ""}
            id={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => handleCheck(e, todo.id, todo.title)}
          />
        </label>
        {todo.title}

        <div className={styles.deleteIcon}>
          <div className={styles.icon}></div>
        </div>
      </li>
    </Fragment>
  );
}
