import React from 'react';
import styles from './ClearListButton.module.css';

function ClearListButton({ action }) {
  return (
    <button className={styles.clearlist} onClick={() => action()}>
      Clear List
    </button>
  );
}

export default ClearListButton;
