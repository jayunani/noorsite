import React from 'react';
import { browserHistory } from 'react-router';

class Error1 extends React.Component {
  render() {
    let redirectToHome = (() => {
      browserHistory.push('/')
    })
    return (
      <div className='error1-page'>
        <img src='/flower_line-1.png' />
        <div className='error1-title'> Oops! Did you enter the wrong code? </div>
        <button onClick={redirectToHome}> Try again! </button>
    <div className='error1-text'> Issues? Contact us at <a href="mailto:noorandsul@gmail.com">noorandsul@gmail.com </a></div>
      </div>
    );
  }
}

module.exports = Error1;