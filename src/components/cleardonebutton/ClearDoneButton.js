import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ClearDoneButton.module.css';

function ClearDoneButton({ toggleConfirmOverlayDone }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => {
    toggleConfirmOverlayDone();
  };

  return (
    <button
      className={`${styles.clearlist} ${isDarkmode && styles.dark}`}
      onClick={onClickHandler}
    >
      Clear Done
    </button>
  );
}

export default ClearDoneButton;
