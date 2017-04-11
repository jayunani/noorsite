import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

class ValimaDetails extends React.Component {
  render() {
    let event = {
      title: 'Valima - Noor & Sulayman',
      description: 'Please arrive on time!',
      location: 'Crow Canyon Country Club, 711 Silver Lake Dr, Danville, CA',
      startTime: '2017-07-08T11:00:00-07:00',
      endTime: '2017-07-08T15:30:00-07:00'
    }
    return (
      <div className='mendhi-details'>
        <div className='event-details-title'> 
          Valima 
          <span className='mendhi-date'> - 7.8.17 </span>
          </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            <div className='event-address'>
              <img src='./map-pin.png' /> 
              <div className='address-name'> Crow Canyon Country Club </div>
              <div className='address-number'> 711 Silver Lake Dr </div>
              <div className='address-city'> Danville, CA </div>
              <a href='https://www.google.com/maps/place/Crow+Canyon+Country+Club/@37.7862839,-121.97088,15z/data=!4m5!3m4!1s0x808ff2e8f834a689:0x3a8c90dbd7a4743a!8m2!3d37.7862839!4d-121.9621253' target="_blank" className='mendhi-map'> Map it for me! </a>            
            </div>

            <div className='event-schedule'>
              <img src='./schedule.png' />
              <div> 11 AM: All guests </div>
            </div>
            <AddToCalendar event={event}/>
          </div>
          <div className='rsvp-form'>
            <img src='./rsvp.png' />
            <div className='event-form'>
              <iframe id='collapsed-form-mendhi' className='collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLSebmX7zdgl3Xoncz4iYtD3Bf2kbGzJUO_HDHcqxFhmzLEJlhg/viewform?embedded=true about:blank" width="450" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

module.exports = ValimaDetails;
