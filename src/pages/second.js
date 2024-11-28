import React from 'react';
import './css/second.css';
import { Link } from 'react-router-dom';
import PageChangeAnimation from '../components/pageChange';
import ReactPlayer from 'react-player';
import video from '../assets/vid.webm';

const Second = () => {
  return (
    <PageChangeAnimation>
      <div className="App">
        <header className="App-header">
          <div className="main-container">
            <div style={{ width: '80vw', maxWidth: '1000px', margin: '20px auto' }}>
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
                config={{
                  file: {
                    attributes: {
                      controlsList: 'download',
                      disablePictureInPicture: true
                    }
                  }
                }}
              />
            </div>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
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
        </header>
      </div>
    </PageChangeAnimation>
  );
};

export default Second;