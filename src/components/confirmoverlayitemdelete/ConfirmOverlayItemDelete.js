import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ConfirmOverlayItemDelete.module.css';

//need to get Item Id
function ConfirmOverlayItemDelete({
  toggleOverlayItemDelete,
  todoIdDel,
  deleteTodo
}) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const handleClearButton = () => {
    deleteTodo(todoIdDel);
    toggleOverlayItemDelete();
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={`${styles.confirmdialog} ${isDarkmode && styles.dark}`}>
        <p className={styles.confirmdialogp}>Delete item?</p>
        <button
          className={styles.confirmdelete}
          onClick={() => handleClearButton()}
        >
          Delete
        </button>
        <button
          className={styles.canceldelete}
          onClick={() => toggleOverlayItemDelete()}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default ConfirmOverlayItemDelete;
