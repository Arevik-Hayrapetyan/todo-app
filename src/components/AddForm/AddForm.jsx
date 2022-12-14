import React, { Fragment, useState, useEffect } from "react";
import { setItems } from "../../helpers/localStorage";
import { nanoid } from "nanoid";
import styles from "./AddForm.module.css";

export default function AddForm({ todos, setTodo }) {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setItems("todos", todos);
  });

  function handleChangeValue(event) {
    setTitle(event.target.value);
  }

  function add() {
    if (title.trim().length === 0) {
      setErrorMessage("Input value cant be empty!");
      return;
    }
    setErrorMessage(null);
    setTitle("");
    setTodo((prevState) => {
      return [
        ...prevState,
        {
          title,
          id: nanoid(),
          completed: false,
        },
      ];
    });
  }

  function handleAddTodo() {
    add();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      add();
    }
  }

  return (
    <Fragment>
      <section className={styles.formContainer}>
        <input
          className={styles.submitedValue}
          value={title}
          onChange={(e) => handleChangeValue(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          type="text"
          placeholder="Lorem Ipsum"
        />
        <span className={styles.errorMessage}>{errorMessage}</span>
        <button className={styles.addBtn} onClick={() => handleAddTodo()}>
          add
        </button>
      </section>
    </Fragment>
  );
}
