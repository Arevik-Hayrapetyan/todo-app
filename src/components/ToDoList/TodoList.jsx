import React, { Fragment } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodo }) {

  function handleCheck(e, id, title) {
    console.log(id);
    setTodo((state) =>
      state.map((obj) => {
        if (obj.id === id) {
          console.log(obj, "todo")
          return { ...obj, completed: !obj.completed };
        }
        return obj;
      })
    );
  }

  return (
    <Fragment>
      <section className="list-container">
        <ul className={styles.listItems}>
          {console.log(todos, "todosss")}
          {todos.map((todo) => {
            console.log(todo, "todo")
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                setTodo={setTodo}
                handleCheck={handleCheck}
              />
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
}
