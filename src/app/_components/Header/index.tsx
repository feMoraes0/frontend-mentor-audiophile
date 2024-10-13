import React from 'react';
import styles from '@components/Header/style.module.scss';
import Image from 'next/image';
import Container from '@components/Container';

type HeaderType = {
  children: Readonly<React.ReactNode | null>
}

const Header = ({ children = null }: HeaderType) => (
  <header className={styles.header}>
    <Container fullwidth>
      <nav className={styles.navbar}>
        <Image className={styles.menuIcon} src="/icons/menu.svg" alt="menu" width="16" height="15" />
        <Image className={styles.logo} src="/images/audiophile.png" alt="logo" width="143" height="25" />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Home
          </li>
          <li className={styles.listItem}>
            Headphones
          </li>
          <li className={styles.listItem}>
            Speakers
          </li>
          <li className={styles.listItem}>
            Earphones
          </li>
        </ul>
        <Image src="/icons/cart-shop.svg" alt="shopping-cart" width="24" height="20" />
      </nav>
      { !!children && <div className={styles.divider} /> }
      { children }
    </Container>
  </header>
);

export default Header;
