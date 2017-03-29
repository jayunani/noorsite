var React = require('react');
var ValimaDetails = require('ValimaDetails');
var Footer = require('Footer');

class Sulenoor3 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='event-content'>
          <ValimaDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
              <button className='form-title' data-toggle='collapse' data-target='.collapsed-form-mendhi'> 
                *click* to RSVP
              </button>
              <iframe 
              className='collapsed-form-mendhi collapse collapsed-div' src="https://docs.google.com/forms/d/e/1FAIpQLSfsPu6AThjtZ9nmGFNiG8XOWF9qNe5fZ5tcJLt0CcXbsU9YSA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>    
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Sulenoor3;