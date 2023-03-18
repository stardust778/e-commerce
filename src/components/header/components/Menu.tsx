import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMenuState } from '../../../app/reducers/menu';
import { IUserState, setIsUserAuthenticated } from '../../../app/reducers/user';
import MenuNavigation from './MenuNavigation';
import Social from './Social';

import styles from '../styles/Menu.module.scss';

const open = {
  top: '100%',
  opacity: 1,
  zIndex: 999,
};

const close = {
  top: '-1000%',
  opacity: 0,
  zIndex: -999,
  visibility: 'hidden',
};

const Menu: React.FC = () => {
  const { isMenuOpen } = useSelector((state: IMenuState) => state.menu);
  const { isUserAuthenticated } = useSelector((state: IUserState) => state.user);
  const dispatch = useDispatch();

  const onAuth = () => {
    dispatch(setIsUserAuthenticated(true));
  };

  return (
    <div
      className={ styles.menu }
      style={ isMenuOpen ? open : close }
    >

      { !isUserAuthenticated && (
        <ul>
          <li><a href='#' onClick={ onAuth }>Entrar</a></li>
          <li><a href='#' onClick={ onAuth }>Registrar</a></li>
        </ul>
      ) }

      { isUserAuthenticated && <MenuNavigation /> }

      <Social />
    </div>
  );
};

export default Menu;
