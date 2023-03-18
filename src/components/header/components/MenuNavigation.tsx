import React, { useState } from 'react';
import { IoCaretDownOutline, IoCaretForwardOutline } from 'react-icons/io5';

import styles from '../styles/MenuNavigation.module.scss';

const categories = [
  {name: 'Categoria 1', href: '#'},
  {name: 'Categoria 2', href: '#'},
  {name: 'Categoria 3', href: '#'},
  {name: 'Categoria 4', href: '#'},
];

const MenuNavigation: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);

  const onShowCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <ul className={ styles.menu_navigation }>
      <li><a href='#'>Perfil</a></li>

      <li><a href='#'>Carrinho</a></li>

      <li
        onClick={ onShowCategories }
      >
        Categorias
        &nbsp;
        { showCategories ? <IoCaretDownOutline /> : <IoCaretForwardOutline /> }
      </li>

      { showCategories && (
        <div className={ styles.categories }>
          { categories.map(({ name, href }) => (
            <a key={ name } href={ href }>{ name }</a>
          )) }
        </div>
      ) }

      <li><a href='#'>Sair</a></li>
    </ul>
  );
};

export default MenuNavigation;
