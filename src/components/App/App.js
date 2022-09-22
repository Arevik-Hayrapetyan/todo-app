import Heading from '../Heading/Heading';
import TodoList from '../ToDoList/TodoList';
import styles from  './App.module.css';

function App() {
  return (
    <div className={styles.app}>
     <div className={styles.wrapper}>
      <Heading/>
      <TodoList/>
      {/* heading
      ListItems
      AddForm */}
      </div>     
    </div>
  );
}

export default App;
