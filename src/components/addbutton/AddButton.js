import React from 'react';
import styles from './AddButton.module.css';
import plussvg from '../../assets/plus.svg';

function AddButton({ action }) {
  return (
    <button class={styles.addtodo} onClick={() => action()}>
      <img src={plussvg} alt="Checkmark" />
    </button>
  );
}

export default AddButton;
