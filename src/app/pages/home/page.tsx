import React from 'react';
import Header from '@components/Header';
import styles from '@pages/home/page.module.scss';

const HomePage = () => (
  <main className={styles.home}>
    <Header>
      <div className={styles.header}>
        <h2 className={styles.header_subtitle}>
          New Product
        </h2>
        <h1 className={styles.header_title}>
          XX99 Mark II HeadphoneS
        </h1>
        <p className={styles.header_content}>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <button type="button" className={styles.header_button}>
          See Product
        </button>
      </div>
    </Header>
  </main>
);

export default HomePage;
