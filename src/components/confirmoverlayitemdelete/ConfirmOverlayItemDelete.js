import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './ConfirmOverlayItemDelete.module.css';
import { fadeIn } from 'animations';

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
      <motion.div className={styles.background} {...fadeIn} />
      <motion.div
        className={`${styles.confirmdialog} ${isDarkmode && styles.dark}`}
        {...fadeIn}
      >
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
      </motion.div>
    </>
  );
}

export default ConfirmOverlayItemDelete;
