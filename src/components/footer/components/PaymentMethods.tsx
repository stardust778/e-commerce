import React from 'react';
import Title from './Title';
import { SiPagseguro, SiVisa, SiMastercard } from 'react-icons/si';
import { TiDocumentText } from 'react-icons/ti';
import styles from '../styles/PaymentMethods.module.scss';

const PaymentMethods: React.FC = () => {
  return (
    <section className={ styles.payment }>
      <Title text='Payment Methods' />
      
      <div className={ styles.icons }>
        <SiPagseguro />
        <SiVisa />
        <SiMastercard />
        <TiDocumentText />
      </div>
    </section>
  );
};

export default PaymentMethods;
