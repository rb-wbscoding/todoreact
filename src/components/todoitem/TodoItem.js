import React from 'react';
import styles from './TodoItem.module.css';
import checkmarksvg from '../../assets/checkmark.svg';

function TodoItem({ isChecked = false }) {
  return (
    <article
      className={`${styles.todo} ${
        isChecked ? styles.checked : styles.unchecked
      }`}
    >
      <div className={styles.icon}>
        {isChecked && <img src={checkmarksvg} alt="Checkmark" />}
      </div>
      <div className={styles.description}>Step One: Eat all the candy</div>
    </article>
  );
}

export default TodoItem;
