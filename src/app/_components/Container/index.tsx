import React from 'react';
import styles from './style.module.scss';

type ContainerType = {
  children: Readonly<React.ReactNode | React.ReactNode[]>,
  fullwidth?: Readonly<boolean>,
  className?: Readonly<string>,
}

const Container = ({ children, fullwidth = false, className }: ContainerType) => (
  <div className={`${styles.container} ${fullwidth ? styles.container_fluid : ''} ${className}`}>
    { children }
  </div>
);

export default Container;
