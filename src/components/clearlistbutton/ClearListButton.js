import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ClearListButton.module.css';

function ClearListButton({ toggleConfirmOverlay }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => {
    toggleConfirmOverlay();
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.clearlist} ${isDarkmode && styles.dark}`}
        onClick={onClickHandler}
      >
        Clear List
      </button>
    </div>
  );
}

export default ClearListButton;
