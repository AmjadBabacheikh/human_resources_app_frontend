import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './AboutScreen.css';
const AboutScreen = () => {
  return (
    <div className='my-4'>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div className='about-section' style={props}>
            <h1>Qui Sommes Nous</h1>
            <p>Some text about who we are and what we do.</p>
            <p>
              Resize the browser window to see that this page is responsive by
              the way.
            </p>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default AboutScreen;
