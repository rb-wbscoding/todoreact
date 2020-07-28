import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ClearDoneButton.module.css';

function ClearDoneButton({ dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => dispatch({ type: 'SHOW_CONFIRM_CLEARDONE' });

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
