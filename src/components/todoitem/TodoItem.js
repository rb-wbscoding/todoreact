import React from 'react';
import styles from './TodoItem.module.css';
import checkmarksvg from '../../assets/checkmark.svg';
import trashsvg from '../../assets/trash.svg';

function TodoItem({ isDone, title, todoId, toggleDone }) {
  return (
    <article
      className={`${styles.todo} ${isDone ? styles.checked : styles.unchecked}`}
    >
      <div className={styles.icon} onClick={() => toggleDone(todoId)}>
        {isDone && <img src={checkmarksvg} alt="Checkmark" />}
      </div>
      <div className={styles.description}>{title}</div>
      <div className={styles.icon}>
        <img src={trashsvg} alt="Trash" />
      </div>
    </article>
  );
}

export default TodoItem;
