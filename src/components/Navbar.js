import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data-nav';
import logo from '../images/logo-1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.clientHeight;
    if (isOpen) {
      linksContainerRef.current.style.height = `${linksHeight + 20}px `;
    } else {
      linksContainerRef.current.style.height = 0;
    }
  }, [isOpen]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <p className='nav-title'>Lorem, ipsum dolor.</p>
          <button className='nav-toggle'>
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
            {links.map(item => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          <button className='btn'>take the test</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
