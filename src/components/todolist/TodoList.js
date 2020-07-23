import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../todoitem';

function TodoList({ todos, toggleDone, deleteTodo, showInputOverlay }) {
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
              showInputOverlay={showInputOverlay}
              deleteTodo={deleteTodo}
            />
          ))
        : 'Nothing to do 🤷‍♂️'}
    </main>
  );
}

export default TodoList;
