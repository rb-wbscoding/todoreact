import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './ConfirmOverlayItemDelete.module.css';
import { fadeIn } from 'animations';

function ConfirmOverlayItemDelete({ todoIdDel, dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const handleDeleteButton = () =>
    dispatch({ type: 'DELETE_TODO', id: todoIdDel });

  const handleCancelButton = () => dispatch({ type: 'CANCEL_OVERLAY' });

  return (
    <>
      <motion.div className={styles.background} {...fadeIn} />
      <motion.div
        className={`${styles.confirmdialog} ${isDarkmode && styles.dark}`}
        {...fadeIn}
      >
        <p className={styles.confirmdialogp}>Delete item?</p>
        <button className={styles.confirmdelete} onClick={handleDeleteButton}>
          Delete
        </button>
        <button className={styles.canceldelete} onClick={handleCancelButton}>
          Cancel
        </button>
      </motion.div>
    </>
  );
}

export default ConfirmOverlayItemDelete;
