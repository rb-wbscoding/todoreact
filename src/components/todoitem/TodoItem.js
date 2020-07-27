import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './TodoItem.module.css';
import { ReactComponent as CheckmarkSvg } from 'assets/checkmark.svg';
import { ReactComponent as TrashSvg } from 'assets/trash.svg';

function TodoItem({
  isDone,
  title,
  todoId,
  toggleDone,
  showInputOverlay,
  toggleConfirmOverlayItemDelete
}) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickCheckmark = () => toggleDone(todoId);

  const onClickDescription = () => showInputOverlay('edit', todoId);

  const onClickTrash = () => {
    toggleConfirmOverlayItemDelete(todoId);
  };

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
