import React from 'react';
import styles from '../styles/Title.module.scss';

const Title: React.FC<{text: string}> = (props) => {
  const { text } = props;
  return (
    <div className={ styles.title }>
      <h3>{ text }</h3>
    </div>
  );
};

export default Title;
