import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../../app/reducers/menu';
import Categories from './components/Categories';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Social from './components/Social';

import styles from './styles/Header.module.scss';

const Header: React.FC<{ withoutCategories?: boolean }> = (props) => {
  const { withoutCategories } = props;

  const dispatch = useDispatch();

  const closeMenu = () => {
    if (window.innerWidth >= 768) {
      dispatch(setIsMenuOpen(false));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <>
      <header className={ styles.header }>
        <div className={ styles.wrapper }>
          <Social />
          <Logo />
          <Navigation />
        </div>

        <Menu />
      </header>

      { !withoutCategories && <Categories /> }
    </>
  );
};

export default Header;
