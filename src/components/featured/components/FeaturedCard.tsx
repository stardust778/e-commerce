import React from 'react';

import styles from '../styles/FeaturedCard.module.scss';

interface IFeaturedCard {
  title: string;
  icon: React.ReactNode;
}

const FeaturedCard: React.FC<IFeaturedCard> = (props) => {
  const { title, icon } = props;

  return (
    <div className={ styles.featured_card }>
      { icon }
      <h3 className={ styles.title }>{ title }</h3>
    </div>
  );
};

export default FeaturedCard;
