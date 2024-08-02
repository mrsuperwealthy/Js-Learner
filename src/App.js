import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <>
      <Router>
        <div className={`App ${darkMode ? 'App-dark' : 'App-light'}`}>
          <Navbar title="TextUtils" mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} />
          <Alert alert="Free to use" />
          <Routes>
            <Route exact path="/" element={<Textform heading="Enter the Text to analyse" />} />
            <Route path="/about" element={<About mode={darkMode ? 'dark' : 'light'} />} />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;