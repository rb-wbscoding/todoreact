import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './TodoList.module.css';
import { slideItems, fadeIn } from 'animations';
import TodoItem from 'components/todoitem';

function TodoList({ todos, dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const sortTodos = (todos) => {
    const uncheckedItems = todos
      .filter((todo) => !todo.isDone)
      .sort((a, b) => new Date(a.dateAdded - new Date(b.dateAdded)));

    const checkedItems = todos
      .filter((todo) => todo.isDone)
      .sort((a, b) => new Date(b.dateDone - new Date(a.dateDone)));

    return [...uncheckedItems, ...checkedItems];
  };

  return (
    <main className={`${styles.container} ${isDarkmode && styles.dark}`}>
      {sortTodos(todos).map((todo) => (
        <motion.div key={todo.id} {...slideItems} layout>
          <TodoItem
            todoId={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            dispatch={dispatch}
          />
        </motion.div>
      ))}

      {todos.length === 0 && (
        <motion.div
          {...fadeIn}
          transition={{ delay: 1 }}
          className={styles.emptylist}
        >
          <span role="img" aria-label="emoji">
            🤷‍♂️
          </span>
          <div>Nothing to do</div>
        </motion.div>
      )}
    </main>
  );
}

export default TodoList;
