import React from 'react';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

import styles from '../styles/Social.module.scss';

const Social: React.FC = () => {
  return (
    <ul className={ styles.social }>
      <li><a href='#'><IoLogoFacebook /></a></li>
      <li><a href='#'><IoLogoInstagram /></a></li>
      <li><a href='#'><IoLogoWhatsapp /></a></li>
    </ul>
  );
};

export default Social;
