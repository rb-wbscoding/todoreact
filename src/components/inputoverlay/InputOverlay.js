import React from 'react';
import styles from './InputOverlay.module.css';
import closesvg from '../../assets/close.svg';

function InputOverlay({ mode = 'add' }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.overlay}>
        <button className={styles.cancelbutton}>
          <img src={closesvg} alt="Checkmark" />
        </button>
        <div className={styles.form}>
          <h2>{mode === 'edit' ? 'Edit Todo' : 'Add Todo'}</h2>
          <textarea rows="3"></textarea>
          <button className={styles.submitbutton}>Save</button>
        </div>
      </div>
    </>
  );
}

export default InputOverlay;
