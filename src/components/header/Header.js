import React, { useContext } from 'react';

import { DarkmodeContext } from 'context';

import styles from './Header.module.css';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';
import { ReactComponent as TitleSvg } from 'assets/title.svg';
import { ReactComponent as MoonSvg } from 'assets/moon.svg';
import { ReactComponent as SunSvg } from 'assets/sun.svg';

function Header() {
  const { isDarkmode, toggleDarkmode } = useContext(DarkmodeContext);

  const onClickHandler = () => toggleDarkmode();

  return (
    <header className={`${styles.header} ${isDarkmode && styles.dark}`}>
      <div className={styles.container}>
        <LogoSvg className={styles.logo} />
        <TitleSvg className={styles.title} />
        <div className={styles.iconcontainer} onClick={onClickHandler}>
          {isDarkmode ? <SunSvg /> : <MoonSvg />}
        </div>
      </div>
    </header>
  );
}

export default Header;
