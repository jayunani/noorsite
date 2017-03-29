import React from 'react';

class ShaadiDetails extends React.Component {
  render() {
    return (
      <div className='mendhi-details'>
        {/*<div className='shaadi-header'> Join Ibrahim, Shoaib, and Zaynab for the shaadi ceremony! </div>*/}
        <div className='event-details-title'> Shaadi </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            {/*<div className='event-message'> 
              The Abbas Family graciously thanks you for taking the time to RSVP. 
              We would be honored to have you share this joyous occasion with us. May Allah
              put Barakah in our time and families. Ameen!
            </div>*/}
            <div className='event-address'> 
              <div className='address-title'> Address </div>
              <div className='address-name'> Hotel Irvine </div>
              <div className='address-number'> 17900 Jamboree Rd </div>
              <div className='address-city'> Irvine, CA </div>
            </div>

            <div className='event-schedule'>
              <div className='schedule-title'> Schedule </div>
              <div> 6 PM: All guests</div>
            </div>

          </div>
          <div className='mendhi-map' id='map'>
            <a href='https://www.google.com/maps/place/Hotel+Irvine/@33.6779948,-117.842502,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcde85dee606c7:0x84a9c455ba214a57!8m2!3d33.6779948!4d-117.8403133' target="_blank"> Map it for me! </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ShaadiDetails;