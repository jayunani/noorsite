var React = require('react');
var MendhiDetails = require('MendhiDetails');
var Footer = require('Footer');

class Henna1 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/bismillah8.png' className='bismallah'/>
          <div className='event'> Noor & Sulayman </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}



module.exports = Henna1;