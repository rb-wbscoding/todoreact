import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './ClearListButton.module.css';

function ClearListButton({ dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => dispatch({ type: 'SHOW_CONFIRM_CLEARALL' });

  return (
    <button
      className={`${styles.clearlist} ${isDarkmode && styles.dark}`}
      onClick={onClickHandler}
    >
      Clear List
    </button>
  );
}

export default ClearListButton;
