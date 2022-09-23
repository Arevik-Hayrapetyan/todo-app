import Heading from "../Heading/Heading";
import TodoList from "../ToDoList/TodoList";
import AddForm from "../AddForm/AddForm";
import styles from "./App.module.css";
import { useState } from "react";
import { getItems } from "../../helpers/localStorage";

function App() {
  const [todos, setTodo] = useState(
    getItems("todos") === null || undefined ? [] : getItems("todos")
  );

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Heading />
        <TodoList todos={todos} setTodo={setTodo} />
        <div className={styles.line}></div>
        <AddForm todos={todos} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
