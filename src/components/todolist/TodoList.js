import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../todoitem';

function TodoList({ todos, toggleDone }) {
  return (
    <main className={styles.container}>
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todoId={todo.id}
              title={todo.title}
              isDone={todo.isDone}
              toggleDone={toggleDone}
            />
          ))
        : 'Nothing to do 🤷‍♂️'}
    </main>
  );
}

export default TodoList;
