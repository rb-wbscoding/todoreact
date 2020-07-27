import React from 'react';
import styles from './TodoItem.module.css';
import checkmarksvg from '../../assets/checkmark.svg';
import trashsvg from '../../assets/trash.svg';

function TodoItem({
  isDone,
  title,
  todoId,
  toggleDone,
  showInputOverlay,
  toggleConfirmOverlayItemDelete,
  dragStart
}) {
  const onClickCheckmark = () => toggleDone(todoId);

  const onClickDescription = () => showInputOverlay('edit', todoId);

  const onClickTrash = () => {
    toggleConfirmOverlayItemDelete(todoId);}

  const dragStarted = () => {
    
    dragStart(todoId)};

  return (
    <article draggable="true" onDragStart={dragStarted}
      className={`${styles.todo} ${isDone ? styles.checked : styles.unchecked}`}
    >
      <div className={styles.icon} onClick={onClickCheckmark}>
        {isDone && <img src={checkmarksvg} alt="Checkmark" />}
      </div>
      <div className={styles.description} onClick={onClickDescription}>
        {title}
      </div>
      <div className={styles.icon} onClick={onClickTrash}>
        <img src={trashsvg} alt="Trash" />
      </div>
    </article>
  );
}

export default TodoItem;
