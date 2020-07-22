import React from 'react';
import styles from './ConfirmOverlay.module.css';

function ConfirmOverlay({ toggleOverlay, clearList }) {
  const handleClearButton = () => {
    clearList();
    toggleOverlay();
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
          Clear
        </button>
        <button className={styles.canceldelete} onClick={() => toggleOverlay()}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default ConfirmOverlay;
