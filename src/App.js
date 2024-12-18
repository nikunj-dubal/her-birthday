import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cake from './assets/cake.png';
import paper from './assets/paper.png';
import placeholder1 from './assets/placeholder.jpg';
import placeholder2 from './assets/placeholder 2.png';
import placeholder3 from './assets/placeholder 3.jpeg';
import placeholder4 from './assets/placeholder 4.jpeg';
import backgroundMusic from './assets/Elvis Presley - Can\'t Help Falling in Love.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';
import './css/index.css';
import './css/second.css';
import './css/third.css';
import './css/app.css';

const App = () => {
  const [letter] = useState(`Heyyy Princess, marii Bholuu happy birthday 
from your Chako,\n\ntoday is all about celebrating how special 
and how precious you are. I am sorry that i am not there 
with you on your special day but still i wanted to do this for you.\n\nYou know how beautiful 
it is to be with you and spend my life with you. You are the biggest 
and the mostspecial blessing that i have received from God.\n\nIt is so special to be with such a beautiful, 
caring and loving person, i hope that we stay together for the rest 
of our lives like this only supporting each other.\n\nI am so grateful to have you in my life I love you mari Bholu 
and babe enjoy your day.\n\n                                          ~ Your Chako❤️`);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audioEl.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.audioEl.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoPlay = () => {
    if (audioRef.current) {
      audioRef.current.audioEl.current.pause();
      setIsPlaying(false);
      toast.info('Background music paused as YouTube video started');
    }
  };

  const handleVideoPause = () => {
    if (audioRef.current) {
      audioRef.current.audioEl.current.play();
      setIsPlaying(true);
      toast.info('Background music resumed');
    }
  };

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      const leftPosition = Math.random() * window.innerWidth;
      heart.style.left = leftPosition + 'px';
      heart.style.animationDuration = Math.random() * 1 + 0.5 + 's';
      heart.innerHTML = '❤️';
      heart.style.zIndex = '-1'; // Changed to -1 to go behind the paper
      heart.style.top = '-20px';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    };

    const heartInterval = setInterval(createHeart, 150);
    
    return () => {
      clearInterval(heartInterval);
    };
  }, []);

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

  const [confettiInterval, setConfettiInterval] = useState(null);

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

  const videoUrl = 'https://youtu.be/kMObS0BLpu4';

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
        </motion.div>
      </header>

      <div className="second-page App">
        <header className="App-header">
          <div className="main-container">
            <div className="collage-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ReactPlayer
                url={videoUrl}
                controls={true}
                playing={false}
                width="800px"
                height="450px"
                style={{
                  margin: '20px auto',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  borderRadius: '8px'
                }}
                config={{
                  youtube: {
                    playerVars: { controls: 1 }
                  }
                }}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            </div>
            <p>
              <br></br>
              <br></br>
            </p>
          </div>
          <img 
            src={placeholder1}
            alt="Collage item 1"
            className="collage-item"
            style={{
              width: '200px',
              height: '150px',
              objectFit: 'contain',
              borderRadius: '10px',
              transform: 'rotate(-15deg)',
              position: 'absolute',
              top: '50px',
              left: '50px',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              border: '10px solid white',
              background: 'white',
              zIndex: 1
            }}
          />
          <img
            src={placeholder2}
            alt="Collage item 2" 
            className="collage-item"
            style={{
              width: '200px',
              height: '150px',
              objectFit: 'contain',
              borderRadius: '10px',
              transform: 'rotate(10deg)',
              position: 'absolute',
              top: '150px',
              right: '80px',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              border: '10px solid white',
              background: 'white'
            }}
          />
          <img
            src={placeholder3}
            alt="Collage item 3"
            className="collage-item"
            style={{
              width: '200px',
              height: '150px',
              objectFit: 'contain',
              borderRadius: '10px',
              transform: 'rotate(-8deg)',
              position: 'absolute',
              bottom: '100px',
              left: '150px',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              border: '10px solid white',
              background: 'white'
            }}
          />
          <img
            src={placeholder4}
            alt="Collage item 4"
            className="collage-item"
            style={{
              width: '200px', 
              height: '150px',
              objectFit: 'contain',
              borderRadius: '10px',
              transform: 'rotate(12deg)',
              position: 'absolute',
              bottom: '150px',
              right: '150px',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              border: '10px solid white',
              background: 'white'
            }}
          />
        </header>
      </div>

      <div className="second-page">
        <header className="second-header">
          <ReactAudioPlayer
            src={backgroundMusic}
            loop
            controls={false}
            ref={audioRef}
          />
          <div className="paper-container">
            <img 
              src={paper}
              alt="Paper"
              className="paper-image"
            />
            <div className="letter-text">
              {letter}
            </div>
          </div>
          <button 
            className="audio-toggle-button" 
            onClick={toggleAudio}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </header>
      </div>
    </div>
  );
};

export default App;
