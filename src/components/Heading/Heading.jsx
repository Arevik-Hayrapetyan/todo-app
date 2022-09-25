import React, { Fragment } from "react";
import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <Fragment>
      <h1 className={styles.heading}>To Do</h1>
    </Fragment>
  );
}
