import React, { useState, useEffect } from 'react';
import wave from '../images/wave-basic-info.svg';

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
      <div className='divider divider-basic-info'>
        <img src={wave} alt='' className='divider-img' />
      </div>
      <div className='section' id='basic-information'>
        <form className='form collect-form'>
          <h2>教材基本信息</h2>
          <fieldset
            className='basic-information-form flow'
            disabled={!isEditing}
          >
            <div className='input-item'>
              <label htmlFor='name'>教材名称</label>
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
              <label htmlFor='author'>作者</label>
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
              <label htmlFor='year'>出版时间</label>
              <input
                type='text'
                id='year'
                value={year}
                onChange={e => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='publisher'>出版单位</label>
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
              <label htmlFor='type'>教材类型</label>
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
              <label htmlFor='targetReader'>适用对象</label>
              <input
                type='text'
                id='targetReader'
                value={target}
                onChange={e => {
                  setTarget(e.target.value);
                }}
              />
            </div>
            <div className='input-item'>
              <label htmlFor='size'>开本</label>
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
              <label htmlFor='pages'>总页码</label>
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
          <a
            type='submit'
            onClick={() => {
              console.log('clicked');
              setIsEditing(!isEditing);
            }}
            className='btn btn-submit'
          >
            {isEditing ? '保存信息' : '返回修改'}
          </a>
        </form>
      </div>
    </div>
  );
};

export default BasicInformation;
