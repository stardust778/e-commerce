import React from 'react';

import styles from '../styles/Categories.module.scss';

const Categories: React.FC = () => {
  return (
    <div className={ styles.categories }>
      <ul>
        <li><a href='#'>Categoria 1</a></li>
        <li><a href='#'>Categoria 2</a></li>
        <li><a href='#'>Categoria 3</a></li>
        <li><a href='#'>Categoria 4</a></li>
      </ul>
    </div>
  );
};

export default Categories;
