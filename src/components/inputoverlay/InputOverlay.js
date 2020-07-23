import React, { useState } from 'react';
import styles from './InputOverlay.module.css';
import closesvg from '../../assets/close.svg';

function InputOverlay({
  mode = 'add',
  addTodo,
  editTodo,
  initialValue,
  hideInputOverlay
}) {
  const [inputValue, setInputValue] = useState(
    mode === 'add' ? '' : initialValue
  );

  const onChangeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onClickSubmit = (e) => {
    e.preventDefault();

    if (mode === 'add') {
      addTodo(inputValue);
    } else {
      editTodo(inputValue);
    }

    hideInputOverlay();
    setInputValue('');
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) return;
    e.preventDefault();

    if (mode === 'add') {
      addTodo(inputValue);
    } else {
      editTodo(inputValue);
    }

    hideInputOverlay();
    setInputValue('');
  };

  const onClickCancel = () => {
    setInputValue('');
    hideInputOverlay();
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.overlay}>
        <button className={styles.cancelbutton} onClick={onClickCancel}>
          <img src={closesvg} alt="Checkmark" />
        </button>
        <div className={styles.form}>
          <h2>{mode === 'edit' ? 'Edit Todo' : 'Add Todo'}</h2>
          <textarea
            value={inputValue}
            onChange={onChangeHandler}
            onKeyDown={(e) => onKeyDownHandler(e)}
            rows="3"
          ></textarea>
          <button className={styles.submitbutton} onClick={onClickSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default InputOverlay;
