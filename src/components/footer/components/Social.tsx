import React from 'react';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

import styles from '../styles/Social.module.scss';
import Title from './Title';

const Social: React.FC = () => {
  return (
    <section className={ styles.social }>
      <Title text='Social' />
      
      <ul className={ styles.icons }>
        <li><a href='#'><IoLogoFacebook /></a></li>
        <li><a href='#'><IoLogoInstagram /></a></li>
        <li><a href='#'><IoLogoWhatsapp /></a></li>
      </ul>
    </section>
  );
};

export default Social;
