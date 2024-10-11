import React from 'react';
import styles from './style.module.scss';

type ContainerType = {
  children: Readonly<React.ReactNode>
}

const Container = ({ children }: ContainerType) => {
  return (
    <div className={styles.container}>
      { children }
    </div>
  );
};

export default Container;
