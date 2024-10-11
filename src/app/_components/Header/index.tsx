import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Container from '../Container';

type HeaderType = {
  children?: Readonly<React.ReactNode>
}

const Header = ({ children }: HeaderType)  => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.header__navbar}>
          <Image src="/images/audiophile.png" alt="logo" width={143} height={25} />
          <ul className={styles.header__navbar__list}>
            <li className={styles.header__navbar__list__item}>Home</li>
            <li className={styles.header__navbar__list__item}>Headphones</li>
            <li className={styles.header__navbar__list__item}>Speakers</li>
            <li className={styles.header__navbar__list__item}>Earphones</li>
          </ul>
          <Image src="/icons/cart-shop.svg" alt="shopping-cart" width="24" height="20" />
        </nav>
        { !!children && <div className={styles.header__navbar__divider}></div> }
        { children }
      </Container>
    </header>
  );
};

export default Header;
