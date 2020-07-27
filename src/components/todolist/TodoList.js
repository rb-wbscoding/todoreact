import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './TodoList.module.css';
import { slideItems, fadeIn } from 'animations';
import TodoItem from 'components/todoitem';

function TodoList({
  todos,
  toggleDone,
  deleteTodo,
  showInputOverlay,
  toggleConfirmOverlayItemDelete
}) {
  return (
    <motion.main key="main" className={styles.container} layout>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div key={todo.id} {...slideItems} layout>
            <TodoItem
              todoId={todo.id}
              title={todo.title}
              isDone={todo.isDone}
              toggleDone={toggleDone}
              showInputOverlay={showInputOverlay}
              deleteTodo={deleteTodo}
              toggleConfirmOverlayItemDelete={toggleConfirmOverlayItemDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>

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
    </motion.main>
  );
}

export default TodoList;
