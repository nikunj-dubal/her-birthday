import React, { useEffect } from 'react';
import './css/index.css';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import cake from '../assets/cake.png';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      const leftPosition = Math.random() * window.innerWidth;
      heart.style.left = leftPosition + 'px';
      heart.style.animationDuration = Math.random() * 1 + 0.5 + 's';
      heart.innerHTML = '❤️';
      heart.style.zIndex = '1';
      heart.style.top = '-20px';
      document.body.appendChild(heart);

      const mainContainer = document.querySelector('.main-container');
      const containerRect = mainContainer.getBoundingClientRect();

      const checkBlur = () => {
        const heartRect = heart.getBoundingClientRect();

        if (
          heartRect.bottom > containerRect.top &&
          heartRect.top < containerRect.bottom &&
          heartRect.right > containerRect.left &&
          heartRect.left < containerRect.right
        ) {
          heart.style.filter = 'blur(5px)';
        } else {
          heart.style.filter = 'none';
        }
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

  const [confettiInterval, setConfettiInterval] = React.useState(null);

  const handleCakeClick = () => {
    createConfetti();
  };

  const containerVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.15,
        bounce: 0.2
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.div 
          className="main-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <img
            src={cake}
            alt="Birthday Cake"
            className="cake-image"
            onMouseEnter={() => {
              const interval = setInterval(createConfetti, 50);
              setConfettiInterval(interval);
            }}
            onMouseLeave={() => {
              if (confettiInterval) {
                clearInterval(confettiInterval);
                setConfettiInterval(null);
              }
            }}
            onClick={handleCakeClick}
          />
          
          <h1 className="birthday-text">Happy 16 Mi amor!</h1>
          <h1 className="birthday-text">           </h1>

          <div className="navigation-section">
            <Link to="/2" style={{ textDecoration: 'none' }}>
              <button className="next-button">
                Next Page
              </button>
            </Link>
          </div>

        </motion.div>
      </header>
    </div>
  );
};

export default Home;
