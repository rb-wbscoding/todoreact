import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './TodoItem.module.css';
import { ReactComponent as CheckmarkSvg } from 'assets/checkmark.svg';
import { ReactComponent as TrashSvg } from 'assets/trash.svg';

function TodoItem({ todoId, title, isDone, dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickCheckmark = () =>
    dispatch({ type: 'TOGGLE_DONE', id: todoId, value: !isDone });

  const onClickDescription = () =>
    dispatch({ type: 'SHOW_INPUT_EDIT', id: todoId });

  const onClickTrash = () =>
    dispatch({ type: 'SHOW_CONFIRM_DELITEM', id: todoId });

  return (
    <article
      className={`${styles.todo} ${
        isDone ? styles.checked : styles.unchecked
      } ${isDarkmode && styles.dark}`}
    >
      <div className={styles.icon} onClick={onClickCheckmark}>
        {isDone && <CheckmarkSvg />}
      </div>
      <div className={styles.description} onClick={onClickDescription}>
        {title}
      </div>
      <div className={styles.trash} onClick={onClickTrash}>
        <TrashSvg />
      </div>
    </article>
  );
}

export default TodoItem;
