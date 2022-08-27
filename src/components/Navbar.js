import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data-nav';
import logo from '../images/logo-1.svg';

const Navbar = () => {
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
          {/* <img src={logo} alt='logo' className='logo' /> */}
          <p className='nav-title'>对外汉语教学</p>
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
                <li key={index}>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
