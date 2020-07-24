import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './AddButton.module.css';
import plussvg from 'assets/plus.svg';

function AddButton({ showInputOverlay }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = (e) => {
    e.preventDefault();

    showInputOverlay('add');
  };

  return (
    <button
      className={`${styles.addtodo} ${isDarkmode && styles.dark}`}
      onClick={onClickHandler}
    >
      <img src={plussvg} alt="Checkmark" />
    </button>
  );
}

export default AddButton;
