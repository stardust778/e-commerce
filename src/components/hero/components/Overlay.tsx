import React from 'react';

import styles from '../styles/Overlay.module.scss';

const Overlay: React.FC = () => {
  return (
    <div className={ styles.overlay }>
      <h2 className={ styles.title }>Witz E-Commerce Template</h2>
    </div>
  );
};

export default Overlay;
