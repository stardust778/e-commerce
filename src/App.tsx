import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Departments from './components/departments/Departments';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

import styles from './styles/App.module.scss';

const App: React.FC = () => {
  return (
    <main className={ styles.app }>
      <Header />
      <Hero />
      <Featured />
      <Departments />
      <Accordion />
      <Footer />
    </main>
  );
};

export default App;
