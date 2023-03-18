import React from 'react';
import Title from './Title';
import styles from '../styles/Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section className={ styles.contact }>
      <Title text='Fale Conosco' />
      
      <div className={ styles.container }>
        <p>555-555-5555</p>
        <p>
          <a href='mailto:example@gmail.com'>
            example@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
