import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuestionList from './components/QuestionList';
import data from './data';
import './css/index.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const App = () => {
  const [scoreList, setScoreList] = useState([]);
  const [total, setTotal] = useState(0);

  const showScore = object => {
    if (scoreList.length <= 0) {
      setScoreList([object]);
      return;
    }

    let indexInList = scoreList.findIndex(
      item =>
        item.questionIndex === object.questionIndex &&
        item.categoryIndex === object.categoryIndex
    );

    let newList = scoreList;
    if (indexInList >= 0) {
      newList[indexInList].score = object.score;
    } else {
      newList = [...newList, object];
    }

    setScoreList(newList);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (scoreList.length > 0) {
      let sumValues = 0;

      scoreList.forEach(item => {
        sumValues += parseFloat(item.score);
      });

      setTotal(sumValues);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />

      {data.map(({ category, scores, questions }, categoryIndex) => {
        return (
          <div key={categoryIndex} id={`cat${categoryIndex + 1}`}>
            <h1>
              {category} {categoryIndex + 1}
            </h1>
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
      <button type='submit' onClick={e => handleSubmit(e)}>
        submit
      </button>
      {total}
    </div>
  );
};

export default App;
