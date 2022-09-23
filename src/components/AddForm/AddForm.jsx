import React, { Fragment, useState } from "react";
import { setItems, getItems } from "../../helpers/localStorage";
import { nanoid } from "nanoid";
import styles from "./AddForm.module.css";
import { useEffect } from "react";

export default function AddForm({ todos, setTodo }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setItems("todos", todos);
  });

  function handleChangeValue(event) {
    setTitle(event.target.value);
  }

  function handleAddTodo() {
    setTitle("")
    setTodo((prevState) => {
      console.log(prevState, "prevState");
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

  return (
    <Fragment>
      <section className={styles.formContainer}>
        <input
          className={styles.submitedValue}
          value={title}
          onChange={(e) => handleChangeValue(e)}
          type="text"
          placeholder="Lorem Ipsum"
        />
        <button className={styles.addBtn} onClick={() => handleAddTodo()}>
          add
        </button>
      </section>
    </Fragment>
  );
}
