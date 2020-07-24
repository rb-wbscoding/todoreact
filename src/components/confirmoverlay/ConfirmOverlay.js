import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './ConfirmOverlay.module.css';
import { fadeIn } from 'animations';

function ConfirmOverlay({ toggleOverlay, clearList }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const handleClearButton = () => {
    clearList();
    toggleOverlay();
  };

  const handleCancelButton = () => {
    toggleOverlay();
  };

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

export default ConfirmOverlay;
