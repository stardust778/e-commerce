import React from 'react';

import logo from '../../../assets/witz_logo.png';
import styles from '../styles/Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <figure className={ styles.logo }>
      <img src={ logo } alt='logo' />
      <h1>Witz Template</h1>
    </figure>
  );
};

export default Logo;
