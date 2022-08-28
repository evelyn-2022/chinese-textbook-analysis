import { React, useState, useEffect } from 'react';
import { FaRegFrown, FaRegMeh, FaSmile, FaLaughSquint } from 'react-icons/fa';

const Question = ({
  categoryIndex,
  question,
  scores,
  showScore,
  questionIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState('');
  const [hoverIndex, setHoverIndex] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    showScore({ categoryIndex, questionIndex, score });
  }, [score]);

  return (
    <div className='question-card'>
      <h4 className='question-detail'>{question}</h4>
      <div className='answer-btn-container'>
        {scores.map((item, index) => {
          return (
            <div
              key={`${categoryIndex}${questionIndex}${index}`}
              className={`answer-btn answer-btn-${index} ${
                activeIndex === index && `answer-active-${index}`
              } ${hoverIndex === index && `answer-hovered-${index}`}`}
              data-score={item}
              onMouseEnter={() => {
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverIndex('');
              }}
              onClick={e => {
                const target = e.target.closest('.answer-btn');
                setScore(target.dataset.score);
                setActiveIndex(index);
              }}
            >
              <span className='hidden'>{item}</span>

              {index === 0 && (
                <FaRegFrown
                  className={`absolute-center answer-icon answer-icon-${index} ${
                    activeIndex === index && `answer-icon-active`
                  } ${hoverIndex === index && `answer-icon-hovered`}`}
                />
              )}

              {index === 1 && (
                <FaRegMeh
                  className={`absolute-center answer-icon answer-icon-${index} ${
                    activeIndex === index && `answer-icon-active`
                  } ${hoverIndex === index && `answer-icon-hovered`}`}
                />
              )}

              {index === 2 && (
                <FaSmile
                  className={`absolute-center answer-icon answer-icon-${index} ${
                    activeIndex === index && `answer-icon-active`
                  } ${hoverIndex === index && `answer-icon-hovered`}`}
                />
              )}

              {index === 3 && (
                <FaLaughSquint
                  className={`absolute-center answer-icon answer-icon-${index} ${
                    activeIndex === index && `answer-icon-active`
                  } ${hoverIndex === index && `answer-icon-hovered`}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
