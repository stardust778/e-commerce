import React from 'react';
import { TbTruckDelivery, TbCreditCard, TbLocation, TbLock } from 'react-icons/tb';
import FeaturedCard from './components/FeaturedCard';

import styles from './styles/Featured.module.scss';

const featured = [
  {
    id: 1,
    title: 'Frete Grátis',
    icon: <TbTruckDelivery />,
  },
  {
    id: 2,
    title: 'Pague em até 12x',
    icon: <TbCreditCard />,
  },
  {
    id: 3,
    title: 'Atendimento Exclusivo',
    icon: <TbLocation />,
  },
  {
    id: 4,
    title: 'Compra segura',
    icon: <TbLock />,
  }
];

const Featured: React.FC = () => {
  return (
    <div className={ styles.featured }>
      <section className={ styles.wrapper }>
        { featured.map((feature) => (
          <FeaturedCard
            key={ feature.id }
            title={ feature.title }
            icon={ feature.icon }
          />
        )) }
      </section>
    </div>
  );
};

export default Featured;
