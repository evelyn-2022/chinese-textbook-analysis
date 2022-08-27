import React, { useState } from 'react';
import bgWave from '../images/bg-wave.svg';

const BasicInformation = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [type, setType] = useState('');
  const [targetReader, setTargetReader] = useState('');
  const [size, setSize] = useState('');
  const [pages, setPages] = useState('');

  return (
    <div className='basic-information'>
      <div className='hero-divider'>
        <img src={bgWave} alt='' />
      </div>
      <div className='section' id='basic-information'>
        <form>
          <h2>教材基本信息</h2>
          <fieldset className='basic-information-form flow'>
            <div className='input-item'>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='author'>author</label>
              <input
                type='text'
                id='author'
                value={author}
                onChange={e => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='year'>year</label>
              <input
                type='number'
                min='1800'
                max='2099'
                step='1'
                id='year'
                value={year}
                onChange={e => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='publisher'>publisher</label>
              <input
                type='text'
                id='publisher'
                value={publisher}
                onChange={e => {
                  setPublisher(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='type'>type </label>
              <input
                type='text'
                id='type'
                value={type}
                onChange={e => {
                  setType(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='targetReader'>target</label>
              <input
                type='text'
                id='targetReader'
                value={targetReader}
                onChange={e => {
                  setTargetReader(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='size'>size </label>
              <input
                type='text'
                id='size'
                value={size}
                onChange={e => {
                  setSize(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='pages'>pages</label>
              <input
                type='number'
                min='0'
                value={pages}
                onChange={e => {
                  setPages(e.target.value);
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BasicInformation;
