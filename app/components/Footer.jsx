import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-section'>
          <img src='/noor-sulayman.jpg' className='noor-sul'/>
          <div className='footer-quote'>
            <img src='/SurahRum30-21.png' className='surah'/>
            <div> 
              "And one of His signs is that He has created for you, spouses from amongst yourselves so that you might take comfort in them and He has placed between you, love and mercy. In this there is surely evidence (of the truth) for the people who carefully think." (Surah 30, Verse 21)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Footer;