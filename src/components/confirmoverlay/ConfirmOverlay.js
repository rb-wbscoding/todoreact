import React from 'react';
import styles from './ConfirmOverlay.module.css';
import { motion } from 'framer-motion';
import { fadeInBackground, fadeInOverlay } from '../../animations';

function ConfirmOverlay({ toggleOverlay, clearList }) {
  const handleClearButton = () => {
    clearList();
    toggleOverlay();
  };

  return (
    <>
      <motion.div className={styles.background} {...fadeInBackground} />
      <motion.div className={styles.confirmdialog} {...fadeInOverlay}>
        <p className={styles.confirmdialogp}>Are you sure?</p>
        <button
          className={styles.confirmdelete}
          onClick={() => handleClearButton()}
        >
          Clear
        </button>
        <button className={styles.canceldelete} onClick={() => toggleOverlay()}>
          Cancel
        </button>
      </motion.div>
    </>
  );
}

export default ConfirmOverlay;
