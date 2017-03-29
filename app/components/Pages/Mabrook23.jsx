var React = require('react');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Footer = require('Footer');

class Mabrook23 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event'> Event Details </div>
        </div>
        <div className='event-content'>
          <ShaadiDetails />
          <ValimaDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
              <button className='form-title' data-toggle='collapse' data-target='.collapsed-form-mendhi'> 
                *click* to RSVP
              </button>
              <iframe
              className='collapsed-form-mendhi collapse collapsed-div' 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdWp7rY-285inz6jDQ0f9ryeF4NGiibzw90bcPfdlNfoBgxXA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>          
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Mabrook23;