import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from '../data/data-nav';
import logo from '../images/logo.svg';

const Navbar = ({ setIsOpenQR }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState('');
  const [hoverIndex, setHoverIndex] = useState('');
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.clientHeight;
    if (isOpen) {
      linksContainerRef.current.style.height = `${linksHeight + 10}px `;
    } else {
      linksContainerRef.current.style.height = 0;
    }
  }, [isOpen]);

  return (
    <nav>
      <div className='nav-center section'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <a className='nav-title' href='#'>
            对外汉语教学
          </a>
          <button className={`nav-toggle ${isOpen && 'nav-toggle-active'}`}>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </button>
        </div>

        {/* We need to wrap the ul in a div, otherwise when we check the height, it will always be 0
        and we won't be able to adjust the height by the links */}
        <div className={`links-container`} ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((item, index) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a
                    className={`${index === activeIndex && 'active-link'} ${
                      index === hoverIndex && 'hovered-link'
                    }`}
                    href={url}
                    onMouseEnter={() => {
                      setHoverIndex(index);
                    }}
                    onMouseLeave={() => {
                      setHoverIndex('');
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsOpen(false);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
            <li key={'7'}>
              <a
                className={`${activeIndex === 7 && 'active-link'} ${
                  hoverIndex === 7 && 'hovered-link'
                }`}
                onMouseEnter={() => {
                  setHoverIndex(7);
                }}
                onMouseLeave={() => {
                  setHoverIndex('');
                }}
                onClick={() => {
                  setActiveIndex(7);
                  setIsOpen(false);
                  setIsOpenQR(true);
                }}
              >
                扫码填写
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
