import React from 'react';
import { motion } from 'framer-motion';

import styles from './ConfirmOverlay.module.css';
import { fadeIn } from 'animations';

function ConfirmOverlay({ toggleOverlay, clearList }) {
  const handleClearButton = () => {
    clearList();
    toggleOverlay();
  };

  return (
    <>
      <motion.div className={styles.background} {...fadeIn} />
      <motion.div className={styles.confirmdialog} {...fadeIn}>
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
