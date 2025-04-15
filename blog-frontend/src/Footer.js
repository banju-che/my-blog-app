
import React from 'react';
import './App.css'; // or your main CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
