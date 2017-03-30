import React from 'react';

class MendhiDetails extends React.Component {
  render() {
    return (
      <div className='mendhi-details'>
        {/*<div className='mendhi-header'> Join Ibrahim, Shoaib, and Zaynab for the Mendhi ceremony! </div>*/}
        <div className='event-details-title'> Mendhi </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            <div className='event-address'> 
              <div className='address-title'> Address </div>
              <div className='address-name'> Diamond Bar Center </div>
              <div className='address-number'> 1600 Grand Ave. </div>
              <div className='address-city'> Diamond Bar, CA </div>
            </div>

            <div className='event-schedule'>
              <div className='schedule-title'> Schedule </div>
              <div> 5 PM: Ladies Only </div>
              <div> 6:30 PM: All guests </div>
              <a href='https://www.google.com/maps/place/Diamond+Bar+Center/@33.9986695,-117.7999005,17z/data=!3m1!4b1!4m5!3m4!1s0x80c32ce8e2ae8d11:0xdce3ea98d1d8016b!8m2!3d33.9986695!4d-117.7977118' target="_blank" className='mendhi-map'> Map it for me! </a>
            </div>

          </div>

          {/*<div className='mendhi-map' id='map'>
     
          </div>*/}
        </div>
      </div>
    );
  }
}

module.exports = MendhiDetails;