import React, { useState, useEffect } from 'react';
import bgWave from '../images/bg-wave.svg';

const BasicInformation = ({ showInformation }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [type, setType] = useState('');
  const [target, setTarget] = useState('');
  const [size, setSize] = useState('');
  const [pages, setPages] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    showInformation({
      name,
      author,
      year,
      publisher,
      type,
      target,
      size,
      pages,
    });
  }, [name, author, year, publisher, type, target, size, pages]);

  return (
    <div className='basic-information'>
      <div className='hero-divider'>
        <img src={bgWave} alt='' />
      </div>
      <div className='section' id='basic-information'>
        <form className='form collect-form'>
          <h2>教材基本信息</h2>
          <fieldset className='basic-information-form flow'>
            <div className='input-item'>
              <label htmlFor='name'>name</label>
              <input
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
                type='text'
                id='targetReader'
                value={target}
                onChange={e => {
                  setTarget(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='size'>size</label>
              <input
                disabled={!isEditing}
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
                disabled={!isEditing}
                type='number'
                min='0'
                value={pages}
                onChange={e => {
                  setPages(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <a
            type='submit'
            onClick={e => {
              setIsEditing(!isEditing);
            }}
            className='btn'
          >
            {isEditing ? '保存信息' : '返回修改'}
          </a>
        </form>
      </div>
    </div>
  );
};

export default BasicInformation;
