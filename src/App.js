import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Second from './pages/second';
import Third from './pages/third';
import './pages/css/index.css';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import cake from './assets/cake.png';

const App = () => {
  const [confettiInterval, setConfettiInterval] = useState(null);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      heart.innerHTML = '❤️';
      heart.style.zIndex = '1';
      heart.style.top = '-20px';
      document.body.appendChild(heart);

      const mainContainer = document.querySelector('.main-container');
      const containerRect = mainContainer.getBoundingClientRect();

      const checkBlur = () => {
        const heartRect = heart.getBoundingClientRect();
        heart.style.filter = (
          heartRect.bottom > containerRect.top &&
          heartRect.top < containerRect.bottom &&
          heartRect.right > containerRect.left &&
          heartRect.left < containerRect.right
        ) ? 'blur(5px)' : 'none';
      };

      const intervalId = setInterval(checkBlur, 16);
      setTimeout(() => {
        clearInterval(intervalId);
        heart.remove();
      }, 1500);
    };

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff69b4', '#ffffff']
    });

    const heartInterval = setInterval(createHeart, 150);
    return () => clearInterval(heartInterval);
  }, []);

  const createConfetti = () => {
    confetti({
      particleCount: 15,
      spread: 60,
      origin: { y: 0.3 },
      colors: ['#ff69b4', '#ff1493', '#ff69b4', '#ffffff'],
      zIndex: 1
    });
  };

  const MainContent = () => (
    <header className="App-header">
      <motion.div
        className="main-container"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 0.15,
            bounce: 0.2
          }
        }}
      >
        <img
          src={cake}
          alt="Birthday Cake"
          className="cake-image"
          onMouseEnter={() => setConfettiInterval(setInterval(createConfetti, 50))}
          onMouseLeave={() => {
            clearInterval(confettiInterval);
            setConfettiInterval(null);
          }}
          onClick={createConfetti}
        />

        <h1 className="birthday-text">Happy 16 Mi amor!</h1>
        <h1 className="birthday-text"> </h1>
        <p>
          <br></br>
          <br></br>
        </p>
        <div className="navigation-section">
          <Link to="/2" style={{ textDecoration: 'none' }}>
            <button className="next-button">Next Page</button>
          </Link>
        </div>
      </motion.div>
    </header>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/2" element={<Second />} />
          <Route path="/3" element={<Third />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
