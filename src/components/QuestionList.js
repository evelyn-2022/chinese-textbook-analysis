import React from 'react';
import Question from './Question';

const QuestionList = ({ categoryIndex, scores, questions, showScore }) => {
  return (
    <div>
      {questions.map((question, questionIndex) => {
        return (
          <Question
            key={questionIndex}
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
