import React from 'react';
import Social from './components/Social';
import Contact from './components/Contact';
import Logo from './components/Logo';
import Service from './components/Service';
import PaymentMethods from './components/PaymentMethods';
import CompanyCopyRight from './components/CompanyCopyRight';
import styles from './styles/Footer.module.scss';

const Footer: React.FC = () => {

  return (
    <footer className={ styles.footer }>
      <section className={ styles.top }>
        <Contact />
        <Social />
        <Logo />
        <Service />
        <PaymentMethods />
      </section>
      <hr />
      <section className={ styles.bottom }>
        <CompanyCopyRight />
      </section>
    </footer>
  );
};

export default Footer;
