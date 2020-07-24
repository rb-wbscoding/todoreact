import React from 'react';

import styles from './Header.module.css';
import logosvg from 'assets/logo.svg';
import titlesvg from 'assets/title.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logosvg} className={styles.logo} alt="todo logo" />
        <img src={titlesvg} alt="todo list title" />
      </div>
    </header>
  );
}

export default Header;
