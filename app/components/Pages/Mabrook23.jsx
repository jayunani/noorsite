var React = require('react');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Footer = require('Footer');

class Mabrook23 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/bismillah8.png' className='bismallah'/>
          <div className='event'> Event Details </div>
        </div>
        <div className='event-content'>
          <ShaadiDetails />
          <ValimaDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
              <div className='rsvp'> RSVP </div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkJilckA5Ldg9jzMLWwntquGT17lR9KnnLglCkKO6IEC2aBA/viewform?embedded=true" width="380" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebmX7zdgl3Xoncz4iYtD3Bf2kbGzJUO_HDHcqxFhmzLEJlhg/viewform?embedded=true" width="380" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>          
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Mabrook23;