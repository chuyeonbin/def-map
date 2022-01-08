import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(() => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>요소수 맵</h1>
    </header>
  );
});

export default Header;
