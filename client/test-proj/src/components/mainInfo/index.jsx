import React from 'react';
import styles from './mainInfo.module.sass';
import { Link } from 'react-router-dom';

function MainInfo() {
  return (
    <article className={styles.container}>
      <section className={styles.infoWrapper}>
        <span className={styles.namingPlatform}>
          World's #1 Project Platform
        </span>
        <h1 className={styles.title}>Click below to get started</h1>
        <p className={styles.platformInfo}>World's #1 Project Platform</p>
        <Link to="/project" className={styles.mainInfoLink}>
          <button className={styles.btnGetStarted}>Get Started</button>
        </Link>
      </section>
      <div className={styles.imageWrapper}>
        <img
          src={'./image/work.jpg'}
          alt="working"
          className={styles.imgSupportMan}
        />
      </div>
    </article>
  );
}

export default MainInfo;
