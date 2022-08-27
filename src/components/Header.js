import React from 'react';
import headerImg from '../images/header-img.png';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='section header-container'>
          <div className='header-description'>
            <h1 className='header-description-title'>对外汉语教材评估一览表</h1>
            <div className='header-description-text'>
              说明：本评估表共设评估项目55项，每项分为A、B、C、D四个等级。1-45项
              A为4分、B为3分、C为2分、D为1分。46-55项A为2分、B为1分、C为0.5分、D为0.25分。前45项满分为180分，后10项满分为20分，总满分为200分。
              累积得分170分以上者为优秀教材，150-169分之间者为良好教材，120-149分之间者
              为一般教材，119分以下者为较差的教材。
              请评估者根据自己的判断，在该教材符合的等级上打“”。谢谢合作。
            </div>
            <a className='btn' href='#basic-information'>
              Take the test
            </a>
          </div>
          <img src={headerImg} className='header-img' />
        </div>
      </header>
    </>
  );
};

export default Header;
