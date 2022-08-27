import React from 'react';

const GeneratedReport = ({ info, total, setIsSubmitted }) => {
  return (
    <div className='report form'>
      <div className='overlay'></div>
      <div className='modal'>
        <h3>对外汉语教材评估报告</h3>
        <table>
          <tbody>
            <tr>
              <td>教材名称</td>
              <td>{info?.name}</td>
              <td>作者</td>
              <td>{info?.author}</td>
            </tr>
            <tr>
              <td>出版时间</td>
              <td>{info?.year}</td>
              <td>出版单位</td>
              <td>{info?.publisher}</td>
            </tr>
            <tr>
              <td>教材类型</td>
              <td>{info?.type}</td>
              <td>适用对象</td>
              <td>{info?.target}</td>
            </tr>
            <tr>
              <td>开本</td>
              <td>{info?.size}</td>
              <td>总页码</td>
              <td>{info?.pages}</td>
            </tr>
            <tr>
              <td colSpan={2}>{total}</td>
            </tr>
          </tbody>
        </table>
        <a href='' className='btn' onClick={() => setIsSubmitted(false)}></a>
      </div>
    </div>
  );
};

export default GeneratedReport;
