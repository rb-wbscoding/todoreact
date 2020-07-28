import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './AddButton.module.css';
import { ReactComponent as PlusSvg } from 'assets/plus.svg';

function AddButton({ dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'SHOW_INPUT_ADD' });
  };

  return (
    <button
      className={`${styles.addtodo} ${isDarkmode && styles.dark}`}
      onClick={onClickHandler}
    >
      <PlusSvg />
    </button>
  );
}

export default AddButton;
