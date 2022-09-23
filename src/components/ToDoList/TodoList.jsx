import React, { Fragment } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodo }) {
  function handleCheck(e, id) {
    setTodo((state) =>
      state.map((obj) => {
        if (obj.id === id) {
          return { ...obj, completed: !obj.completed };
        }
        return obj;
      })
    );
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodo(filteredTodos);
  }

  return (
    <Fragment>
      <section className={styles.listContainer}>
        <ul className={styles.listItems}>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
}
