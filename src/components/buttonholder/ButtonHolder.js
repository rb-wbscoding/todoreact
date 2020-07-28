import React from 'react';
import ClearListButton from 'components/clearlistbutton';
import ClearDoneButton from 'components/cleardonebutton';

import styles from './ButtonHolder.module.css';

function ButtonHolder({ dispatch }) {
  return (
    <div className={styles.buttonholder}>
      <ClearDoneButton dispatch={dispatch} />
      <ClearListButton dispatch={dispatch} />
    </div>
  );
}

export default ButtonHolder;
