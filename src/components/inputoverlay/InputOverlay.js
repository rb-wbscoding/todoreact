import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './InputOverlay.module.css';
import { slideUpOverlay, fadeIn } from 'animations';
import { ReactComponent as CloseSvg } from 'assets/close.svg';

function InputOverlay({ mode = 'add', editId = null, initialValue, dispatch }) {
  const { isDarkmode } = useContext(DarkmodeContext);

  const [inputValue, setInputValue] = useState(
    mode === 'add' ? '' : initialValue
  );

  const onChangeHandler = (e) => setInputValue(e.currentTarget.value);

  const onClickSubmit = (e) => {
    e.preventDefault();

    if (mode === 'add') dispatch({ type: 'ADD_TODO', value: inputValue });
    else dispatch({ type: 'EDIT_TODO', id: editId, value: inputValue });

    setInputValue('');
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) return;
    e.preventDefault();

    if (mode === 'add') dispatch({ type: 'ADD_TODO', value: inputValue });
    else dispatch({ type: 'EDIT_TODO', id: editId, value: inputValue });

    setInputValue('');
  };

  const onClickCancel = () => {
    setInputValue('');
    dispatch({ type: 'CANCEL_OVERLAY' });
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
