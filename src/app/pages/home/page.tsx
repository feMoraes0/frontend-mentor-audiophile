import React from 'react';
import Header from '@components/Header';
import Container from '@components/Container';
import styles from '@pages/home/page.module.scss';
import Image from 'next/image';
import HeadphonesShoppingImg from '@public/images/shopping/headphones.png';
import EarphonesShoppingImg from '@public/images/shopping/earphones.png';
import SpeakersShoppingImg from '@public/images/shopping/speakers.png';

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
    <Container className={styles.shopping}>
      <article className={styles.shopping_item}>
        <Image
          src={HeadphonesShoppingImg}
          alt="headphones"
          className={styles.shopping_item_image}
        />
        <div className={styles.shopping_item_content}>
          <h3 className={styles.shopping_item_content_title}>
            Headphones
          </h3>
          <a href="/" className={styles.shopping_item_content_link}>
            Shop
          </a>
        </div>
      </article>
      <article className={styles.shopping_item}>
        <Image
          src={SpeakersShoppingImg}
          alt="speaker"
          className={styles.shopping_item_image}
        />
        <div className={styles.shopping_item_content}>
          <h3 className={styles.shopping_item_content_title}>
            Speakers
          </h3>
          <a href="/" className={styles.shopping_item_content_link}>
            Shop
          </a>
        </div>
      </article>
      <article className={styles.shopping_item}>
        <Image
          src={EarphonesShoppingImg}
          alt="earphones"
          className={styles.shopping_item_image}
        />
        <div className={styles.shopping_item_content}>
          <h3 className={styles.shopping_item_content_title}>
            Earphones
          </h3>
          <a href="/" className={styles.shopping_item_content_link}>
            Shop
          </a>
        </div>
      </article>
    </Container>
  </main>
);

export default HomePage;
