import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-message'> 
          We, Sulayman and Noor, are extremely blessed to have the love and care of all our family and friends. We so dearly appreciate all that you do and how you have affected our lives. May Allah continue to shower all of us with His Love and Blessings and always keep good people in our lives. Ameen. We'd like to also especially appreciate our immensely loving parents who will never stop helping, caring, and protecting us and whom we could never repay. We love you, Mama, Baba, Ammi, Abbz.
        </div>
        <div className='footer-section'>
          <img src='/SurahRum30-21.png' />
          <div className='footer-quote'> 
            "And one of His signs is that He has created for you, spouses from amongst yourselves so that you might take comfort in them and He has placed between you, love and mercy. In this there is surely evidence (of the truth) for the people who carefully think." (Surah 30, Verse 21)
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Footer;