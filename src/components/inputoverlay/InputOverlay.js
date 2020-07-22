import React from 'react';
import styles from './InputOverlay.module.css';
import closesvg from '../../assets/close.svg';

function InputOverlay({ mode = 'add', toggleOverlay }) {
  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    toggleOverlay();
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.overlay}>
        <button className={styles.cancelbutton} onClick={() => toggleOverlay()}>
          <img src={closesvg} alt="Checkmark" />
        </button>
        <div className={styles.form}>
          <h2>{mode === 'edit' ? 'Edit Todo' : 'Add Todo'}</h2>
          <textarea onKeyDown={(e) => onKeyDownHandler(e)} rows="3"></textarea>
          <button
            className={styles.submitbutton}
            onClick={() => toggleOverlay()}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default InputOverlay;
