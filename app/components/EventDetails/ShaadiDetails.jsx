import React from 'react';

class ShaadiDetails extends React.Component {
  render() {
    return (
      <div className='mendhi-details'>
        <div className='event-details-title'> 
          Shaadi 
          <span className='mendhi-date'> - 7.4.17 </span>
          </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            <div className='event-address'> 
              <img src='./map-pin.png' />
              <div className='address-name'> Hotel Irvine </div>
              <div className='address-number'> 17900 Jamboree Rd </div>
              <div className='address-city'> Irvine, CA </div>
              <a href='https://www.google.com/maps/place/Hotel+Irvine/@33.6779948,-117.842502,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcde85dee606c7:0x84a9c455ba214a57!8m2!3d33.6779948!4d-117.8403133' target="_blank" className='mendhi-map'> Map it for me! </a>
            </div>

            <div className='event-schedule'>
              <img src='./schedule.png' />
              <div> 6 PM: All guests</div>
            </div>
            
          </div>
          <div className='rsvp-form'>
            <img src='./rsvp.png' />
            <div className='event-form'>
              <iframe id='collapsed-form-mendhi' className='collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLSdkJilckA5Ldg9jzMLWwntquGT17lR9KnnLglCkKO6IEC2aBA/viewform?embedded=true" width="450" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ShaadiDetails;
