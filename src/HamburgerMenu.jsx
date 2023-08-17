import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;


