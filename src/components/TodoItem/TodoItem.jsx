import React, { Fragment } from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <Fragment>
      <li className={styles.todoItem}>
        <input id="checkbox" className={styles.checkbox} type="checkbox" checked={true}/>
        <label for="checkbox"></label>
        {todo}
        <p className={styles.deleteIcon}>X</p>
      </li>
    </Fragment>
  );
}
