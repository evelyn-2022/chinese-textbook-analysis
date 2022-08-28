import React from 'react';
import QuestionList from './QuestionList';
import wave from '../images/wave-questions.svg';
import data from '../data/data-questions';

const QuestionForm = ({ showScore, handleSubmit, setIsSubmitted }) => {
  return (
    <>
      <div className='divider divider-question-form'>
        <img src={wave} alt='' className='divider-img' />
      </div>
      <div className='question-form'>
        <div className='section'>
          <form className='form collect-form'>
            <h2>评估项目及得分</h2>
            <div className='question-categories flow'>
              {data.map(({ category, scores, questions }, categoryIndex) => {
                return (
                  <div key={categoryIndex} id={`cat${categoryIndex + 1}`}>
                    <h3>{category}</h3>
                    <QuestionList
                      categoryIndex={categoryIndex}
                      scores={scores}
                      questions={questions}
                      showScore={showScore}
                    />
                  </div>
                );
              })}
            </div>

            <a
              type='submit'
              onClick={e => {
                handleSubmit(e);
                setIsSubmitted(true);
              }}
              className='btn btn-submit'
            >
              生成报告
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
