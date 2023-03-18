import React from 'react';
import Question from './components/Question';
import Title from './components/Title';

import questions from './data';
import styles from './styles/Accordion.module.scss';

const Accordion: React.FC = () => {
  return (
    <section className={ styles.accordion }>
      <Title text='Perguntas frequentes' />

      { questions.map((question) => (
        <Question
          key={ question.id }
          title={ question.title }
          questionText={ question.questionText }
          id={ question.id }
        />
      )) }
    </section>
  );
};

export default Accordion;
