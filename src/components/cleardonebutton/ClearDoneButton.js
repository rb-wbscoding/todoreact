import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ClearDoneButton.module.css';

function ClearDoneButton({ toggleConfirmOverlayDone }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => {
    toggleConfirmOverlayDone();
  };

  return (
    <div>
      <button
        className={`${styles.clearlist} ${isDarkmode && styles.dark}`}
        onClick={onClickHandler}
      >
        Clear Done
      </button>
    </div>
  );
}

export default ClearDoneButton;
