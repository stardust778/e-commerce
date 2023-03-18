import React from 'react';
import Overlay from './components/Overlay';

import heroImageSrc from '../../assets/hero_image.webp';
import styles from './styles/Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={ styles.hero }>
      <img
        src={ heroImageSrc }
        alt='hero image'
        className={ styles.image }
      />

      <Overlay />
    </section>
  );
};

export default Hero;
