import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
