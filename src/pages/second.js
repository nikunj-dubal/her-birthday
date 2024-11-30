import React from 'react';
import './css/second.css';
import { Link } from 'react-router-dom';
import PageChangeAnimation from '../components/pageChange';
import ReactPlayer from 'react-player';
import video from '../assets/vid.mp4';
import placeholder1 from '../assets/placeholder.jpg';
import placeholder2 from '../assets/placeholder 2.png';
import placeholder3 from '../assets/placeholder 3.jpeg';
import placeholder4 from '../assets/placeholder 4.jpeg';

const Second = () => {
  return (
    <PageChangeAnimation>
      <div className="second-page App">
        <header className="App-header">
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
              background: 'white'
            }}
          />
          <div className="main-container">
            <div className="collage-container">
              <ReactPlayer
                url={video}
                playing={false}
                controls={true}
                width="60%"
                height="auto"
                style={{
                  margin: '10px',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}
              />
            </div>
            <div className="navigation-section">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="next-button">
                  Previous Page
                </button>
              </Link>
              <Link to="/3" style={{ textDecoration: 'none' }}>
                <button className="next-button">
                  Next Page
                </button>
              </Link>
            </div>
          </div>
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
    </PageChangeAnimation>
  );
};

export default Second;