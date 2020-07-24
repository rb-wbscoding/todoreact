import React from 'react';
import styles from './ConfirmOverlayItemDelete.module.css';

//need to get Item Id
function ConfirmOverlayItemDelete({ toggleOverlayItemDelete, todoIdDel, deleteTodo }) {
  const handleClearButton = () => {
    deleteTodo(todoIdDel);
    toggleOverlayItemDelete();
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.confirmdialog}>
        <p className={styles.confirmdialogp}>Are you sure?</p>
        <button
          className={styles.confirmdelete}
          onClick={() => handleClearButton()}
        >
          Clear Todo
        </button>
        <button className={styles.canceldelete} onClick={() => toggleOverlayItemDelete()}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default ConfirmOverlayItemDelete;