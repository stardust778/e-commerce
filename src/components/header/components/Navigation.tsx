import React from 'react';
import { IoMenuOutline, IoCloseOutline, IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { IMenuState, setIsMenuOpen } from '../../../app/reducers/menu';
import { IUserState, setIsUserAuthenticated } from '../../../app/reducers/user';

import styles from '../styles/Navigation.module.scss';

const Navigation: React.FC = () => {
  const { isMenuOpen } = useSelector((state: IMenuState) => state.menu);
  const { isUserAuthenticated } = useSelector((state: IUserState) => state.user);
  const dispatch = useDispatch();

  const onOpenOrCloseMenu = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const onAuth = () => {
    dispatch(setIsUserAuthenticated(true));
  };

  return (
    <nav className={ styles.navigation }>
      { isUserAuthenticated && (
        <ul>
          <li><IoPersonOutline /></li>
          <li><IoCartOutline /></li>
        </ul>
      ) }

      { !isUserAuthenticated && (
        <ul>
          <li><a href='#' onClick={ onAuth }>Entrar</a></li>
          <li><a href='#' onClick={ onAuth }>Registrar</a></li>
        </ul>
      ) }

      { isMenuOpen
        ? <IoCloseOutline onClick={ onOpenOrCloseMenu } />
        : <IoMenuOutline onClick={ onOpenOrCloseMenu } />
      }
    </nav>
  );
};

export default Navigation;
