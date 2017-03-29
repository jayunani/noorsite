var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Footer = require('Footer');

class Tchowdhry13 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
          <ValimaDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
              <button className='form-title' data-toggle='collapse' data-target='.collapsed-form-mendhi'> 
                *click* to RSVP
              </button>
            <iframe
            className='collapsed-form-mendhi collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLScMJ0I2GvcFR9GjOL42iWjFbLv3eUpqv7Iwxn6U8sB5RHItEw/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Tchowdhry13;