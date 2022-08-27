import React from 'react';
import Question from './Question';

const QuestionList = ({ categoryIndex, scores, questions, showScore }) => {
  return (
    <div className='question-card-container flow'>
      {questions.map((question, questionIndex) => {
        return (
          <Question
            key={`${categoryIndex}${questionIndex}`}
            categoryIndex={categoryIndex}
            question={question}
            scores={scores}
            showScore={showScore}
            questionIndex={questionIndex}
          />
        );
      })}
    </div>
  );
};

export default QuestionList;
