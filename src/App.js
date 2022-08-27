import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BasicInformation from './components/BasicInformation';
import QuestionForm from './components/QuestionForm';
import Footer from './components/Footer';
import GeneratedReport from './components/GeneratedReport';
import './index.css';

const App = () => {
  const [scoreList, setScoreList] = useState([]);
  const [basicInformation, setBasicInformation] = useState({});
  const [total, setTotal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const showInformation = info => {
    setBasicInformation(info);
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
    <>
      {!isSubmitted && <Navbar />}
      {!isSubmitted && <Header />}
      {!isSubmitted && (
        <main>
          <BasicInformation showInformation={showInformation} />
          <QuestionForm
            showScore={showScore}
            handleSubmit={handleSubmit}
            setIsSubmitted={setIsSubmitted}
          />
        </main>
      )}
      {!isSubmitted && <Footer />}
      {isSubmitted && (
        <GeneratedReport
          info={basicInformation}
          total={total}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </>
  );
};

export default App;
