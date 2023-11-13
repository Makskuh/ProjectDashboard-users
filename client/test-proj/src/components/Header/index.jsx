import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';


function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.headerUl}>
          <li className={styles.headerLi}>
            <Link to="/" className={styles.headerLink}>Home</Link>
          </li>
          <li>
            <Link to="/login" className={styles.headerLink}>Login</Link>
          </li>
          <li>
            <Link to="/registration" className={styles.headerLink}>Registration</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
