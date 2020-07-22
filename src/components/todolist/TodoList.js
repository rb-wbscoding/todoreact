import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../todoitem';

function TodoList() {
  return (
    <main className={styles.container}>
      <TodoItem isChecked />
      <TodoItem />
      <TodoItem />
    </main>
  );
}

export default TodoList;
