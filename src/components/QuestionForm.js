import React from 'react';
import QuestionList from './QuestionList';
import data from '../data';

const QuestionForm = ({ showScore, handleSubmit, setIsSubmitted }) => {
  return (
    <div className='question-form'>
      <div className='section'>
        <form className='form collect-form'>
          {data.map(({ category, scores, questions }, categoryIndex) => {
            return (
              <div key={categoryIndex} id={`cat${categoryIndex + 1}`}>
                <h2>{category}</h2>
                <QuestionList
                  categoryIndex={categoryIndex}
                  scores={scores}
                  questions={questions}
                  showScore={showScore}
                />
              </div>
            );
          })}

          <a
            type='submit'
            onClick={e => {
              handleSubmit(e);
              setIsSubmitted(true);
            }}
            className='btn'
          >
            submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
