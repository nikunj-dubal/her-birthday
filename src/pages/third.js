import React, { useState, useEffect } from 'react';
import './css/third.css';
import paper from '../assets/paper.png';
import { Link } from 'react-router-dom';
import PageChangeAnimation from '../components/pageChange';
import ReactAudioPlayer from 'react-audio-player';
import backgroundMusic from '../assets/Elvis Presley - Can\'t Help Falling in Love.mp3';

const Third = () => {
  const [letter] = useState(`Heyyy Princess, marii Bholuu happy birthday 
from your Chako,\n\ntoday is all about celebrating how special 
and how precious you are. I am sorry that i am not there 
with you on your special day but still i wanted to do this for you.\n\nYou know how beautiful 
it is to be with you and spend my life with you. You are the biggest 
and the mostspecial blessing that i have received from God.\n\nIt is so special to be with such a beautiful, 
caring and loving person, i hope that we stay together for the rest 
of our lives like this only supporting each other.\n\nI am so grateful to have you in my life I love you mari Bholu 
and babe enjoy your day.\n\n                                          ~ Your Chako❤️`);

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

  return (
    <PageChangeAnimation>
      <div className="second-page">
        <header className="second-header">
          <ReactAudioPlayer
            src={backgroundMusic}
            autoPlay
            loop
            controls={false}
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
            <div className="navigation-section" style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3
            }}>
              <Link to="/2" style={{ textDecoration: 'none' }}>
                <button className="next-button">
                  ←
                </button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </PageChangeAnimation>
  );
};

export default Third;
