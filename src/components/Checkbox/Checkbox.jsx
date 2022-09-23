import React from 'react'
import styles from "./Checkbox.module.css"

export default function Checkbox({label,id,  isChecked, setTodo}) {

    function handleCheck(e, id) {
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
    <div className="checkbox-wrapper">
    <label>
      <input type="checkbox" checked={isChecked} onChange={(e) =>handleCheck(e, id) }/>
      <span>{isChecked?"Chekced":"unchecked"}</span>
    </label>
  </div>
  )
}
