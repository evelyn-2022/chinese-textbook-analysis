import React from 'react';
import headerImg from '../images/header-img.png';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='section header-container'>
          <div className='header-description'>
            <h1 className='header-description-title'>对外汉语教材评估表</h1>
            <p className='header-description-text'>
              本评估表共设评估项目50项，每项分为 A、B、C、D 四个等级。1-40项 A
              为4分、B为3分、C 为2分、D 为1分。41-50项 A 为 2 分、B 为 1 分、C
              为 0.5 分、D 为 0.25
              分。前40项满分为160分，后10项满分为20分，总满分为180分。累积得分150分以上者为优秀教材，130-149分之间者为良好教材，110-129分之间者为一般教材，109分以下者为较差的教材。
            </p>
            <a className='btn' href='#basic-information'>
              参与测试
            </a>
          </div>
          <img src={headerImg} className='header-img' />
        </div>
      </header>
    </>
  );
};

export default Header;
