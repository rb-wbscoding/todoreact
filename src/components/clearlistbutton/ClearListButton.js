import React from 'react';
import styles from './ClearListButton.module.css';

function ClearListButton({ toggleConfirmOverlay }) {
  const onClickHandler = () => {
    toggleConfirmOverlay();
  };

  return (
    <button className={styles.clearlist} onClick={onClickHandler}>
      Clear List
    </button>
  );
}

export default ClearListButton;
