import React from 'react';
import Header from '../../components/header';
import MainInfo from '../../components/mainInfo';
import styles from './mainPage.module.sass';
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <MainInfo />
      </div>
    </div>
  );
};

export default HomePage;
