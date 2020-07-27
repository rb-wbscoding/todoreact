import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './InputOverlay.module.css';
import { slideUpOverlay, fadeIn } from 'animations';
import { ReactComponent as CloseSvg } from 'assets/close.svg';

function InputOverlay({
  mode = 'add',
  addTodo,
  editTodo,
  initialValue,
  hideInputOverlay
}) {
  const { isDarkmode } = useContext(DarkmodeContext);

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
      <motion.div className={styles.background} {...fadeIn} />
      <motion.div
        className={`${styles.overlay} ${isDarkmode && styles.dark}`}
        {...slideUpOverlay}
      >
        <button className={styles.cancelbutton} onClick={onClickCancel}>
          <CloseSvg />
        </button>
        <div className={styles.form}>
          <h2>{mode === 'edit' ? 'Edit Todo' : 'Add Todo'}</h2>
          <textarea
            value={inputValue}
            onChange={onChangeHandler}
            onKeyDown={(e) => onKeyDownHandler(e)}
            rows="3"
            autoFocus
          ></textarea>
          <button className={styles.submitbutton} onClick={onClickSubmit}>
            Save
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default InputOverlay;
