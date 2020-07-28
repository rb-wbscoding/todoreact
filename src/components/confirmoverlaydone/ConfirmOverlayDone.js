import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './ConfirmOverlayDone.module.css';
import { fadeIn } from 'animations';

function ConfirmOverlayDone({ dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const handleClearButton = () => dispatch({ type: 'CLEAR_DONE' });

  const handleCancelButton = () => dispatch({ type: 'CANCEL_OVERLAY' });

  return (
    <>
      <motion.div className={styles.background} {...fadeIn} />
      <motion.div
        className={`${styles.confirmdialog} ${isDarkmode && styles.dark}`}
        {...fadeIn}
      >
        <p className={styles.confirmdialogp}>Are you sure?</p>
        <button className={styles.confirmdelete} onClick={handleClearButton}>
          Clear
        </button>
        <button className={styles.canceldelete} onClick={handleCancelButton}>
          Cancel
        </button>
      </motion.div>
    </>
  );
}

export default ConfirmOverlayDone;
