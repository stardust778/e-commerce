import React from 'react';
import styles from '../styles/Title.module.scss';

const Title: React.FC<{text: string}> = (props) => {
  const { text } = props;

  return (
    <h3 className={ styles.title }>{ text }</h3>
  );
};

export default Title;
