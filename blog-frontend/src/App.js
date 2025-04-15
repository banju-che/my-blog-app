
import './App.css';
import React, { useState } from 'react'
import PostList from './components/PostList'
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <PostList /> 
        <Footer />
    </div>
  );
}

export default App;
