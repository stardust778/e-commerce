import React from 'react';
import Title from './Title';
import styles from '../styles/Service.module.scss';

const Service: React.FC = () => {
  return (
    <section className={ styles.service }>
      <Title text='Atendimento' />
      
      <div className={ styles.availability }>
        <p>Seg à Sab</p>
        <p>9h às 15h</p>
        <p>1234 Main St, Anytown, USA</p>
      </div>
    </section>
  );
};

export default Service;
