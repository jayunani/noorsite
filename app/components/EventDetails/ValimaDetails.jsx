import React from 'react';

class ValimaDetails extends React.Component {
  render() {
    return (
      <div className='mendhi-details'>
        {/*<div className='valima-header'> Join Ibrahim, Shoaib, and Zaynab for the valima ceremony! </div>*/}
        <div className='event-details-title'> Valima </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            <div className='event-address'> 
              <div className='address-title'> Address </div>
              <div className='address-name'> Crow Canyon Country Club </div>
              <div className='address-number'> 711 Silver Lake Dr </div>
              <div className='address-city'> Danville, CA </div>
            </div>

            <div className='event-schedule'>
              <div className='schedule-title'> Schedule </div>
              <div> 11 AM: All guests </div>
            </div>

          </div>
          <div className='mendhi-map' id='map'>
            <a href='https://www.google.com/maps/place/Crow+Canyon+Country+Club/@37.7862839,-121.97088,15z/data=!4m5!3m4!1s0x808ff2e8f834a689:0x3a8c90dbd7a4743a!8m2!3d37.7862839!4d-121.9621253' target="_blank"> Map it for me! </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ValimaDetails;