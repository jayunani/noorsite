var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Footer = require('Footer');

class Sajna123 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
          <ShaadiDetails />
          <ValimaDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
              <div className='rsvp'> RSVP </div>
              <iframe className='collapsed-form-mendhi collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLScjffUYeNEWlK9JijhzoS7i3orOCBf7P3cQgcgAukZoQlgSZg/viewform?embedded=true" width="380" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

module.exports = Sajna123;