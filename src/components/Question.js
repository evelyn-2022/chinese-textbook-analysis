import { React, useState, useEffect } from 'react';
import '../css/Question.css';

const Question = ({
  categoryIndex,
  question,
  scores,
  showScore,
  questionIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState(undefined);
  const [score, setScore] = useState(0);

  useEffect(() => {
    showScore({ categoryIndex, questionIndex, score });
  }, [score]);

  return (
    <div>
      <h2>Question {questionIndex + 1}</h2>
      <h3>{question}</h3>

      {scores.map((item, index) => {
        return (
          <div
            key={index}
            className={`btn ${activeIndex === index && 'active'}`}
            data-score={item}
            onClick={e => {
              setScore(e.target.dataset.score);
              setActiveIndex(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Question;
