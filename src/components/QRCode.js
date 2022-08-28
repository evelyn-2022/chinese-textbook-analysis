import React from 'react';
import code from '../images/code.png';

const QRCode = ({ setIsOpenQR }) => {
  return (
    <div>
      <div className='overlay' onClick={() => setIsOpenQR(false)}></div>
      <div className='code-container absolute-center'>
        <img src={code} alt='QR code' className='code-img' />
        <div className='btn' onClick={() => setIsOpenQR(false)}>
          关闭
        </div>
      </div>
    </div>
  );
};

export default QRCode;
