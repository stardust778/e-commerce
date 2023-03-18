import React from 'react';

import styles from '../styles/DepartmentCard.module.scss';

interface IDepartmentCard {
  image: string;
  name: string;
}

const DepartmentCard: React.FC<IDepartmentCard> = (props) => {
  const { image, name } = props;

  return (
    <a
      href='#'
      className={ styles.department_card }
    >
      <img
        src={ image }
        className={ styles.image }
      />

      <h3 className={ styles.name }>{ name }</h3>
    </a>
  );
};

export default DepartmentCard;
