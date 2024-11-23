import React from 'react';
import './css/second.css';
import { Link } from 'react-router-dom';
import PageChangeAnimation from '../components/pageChange';

const Second = () => {
  return (
    <PageChangeAnimation>
      <div className="App">
        <header className="App-header">
          <div className="main-container">
            <h1 className="birthday-text">Page 2</h1>
            <h1 className="birthday-text">           </h1>
            
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