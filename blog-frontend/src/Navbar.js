import React from 'react';
import './App.css';

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1>📝 My Blog</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="icon">
            {darkMode ? '🌞' : '🌚'}
        </span>
        <span className="label">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
       </button>

    </nav>
  );
};

export default Navbar;