import React from 'react';
import styles from './AddButton.module.css';
import plussvg from '../../assets/plus.svg';

function AddButton({ showInputOverlay }) {
  const onClickHandler = (e) => {
    e.preventDefault();

    showInputOverlay('add');
  };

  return (
    <button class={styles.addtodo} onClick={onClickHandler}>
      <img src={plussvg} alt="Checkmark" />
    </button>
  );
}

export default AddButton;
