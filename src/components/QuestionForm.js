import React from 'react';
import QuestionList from './QuestionList';
import data from '../data';

const QuestionForm = ({ showScore, handleSubmit }) => {
  return (
    <div className='question-form'>
      <div className='section'>
        <form>
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

          {/* Submit button */}
          <a type='submit' onClick={e => handleSubmit(e)} className='btn'>
            submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
