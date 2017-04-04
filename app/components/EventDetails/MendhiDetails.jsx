import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

class MendhiDetails extends React.Component {

  render() {
    let event = {
      title: 'Mehndi - Noor & Sulayman',
      description: 'Please arrive on time! Ladies only arrive earlier at 5pm.',
      location: 'Diamond Bar Center, 1600 Grand Ave, Diamond Bar, CA',
      startTime: '2017-07-03T18:30:00-07:00',
      endTime: '2017-07-03T23:00:00-07:00'
    }
    return (
      <div className='mendhi-details'>
        <div className='event-details-title'> 
          Mehndi 
          <span className='mendhi-date'> - 7.3.17 </span>
          </div>
        <div className='mendhi-content'>
          <div className='event-details'>

            <div className='event-address'> 
              <img src='./map-pin.png' />
              <div className='address-name'> Diamond Bar Center </div>
              <div className='address-number'> 1600 Grand Ave. </div>
              <div className='address-city'> Diamond Bar, CA </div>
              <a href='https://www.google.com/maps/place/Diamond+Bar+Center/@33.9986695,-117.7999005,17z/data=!3m1!4b1!4m5!3m4!1s0x80c32ce8e2ae8d11:0xdce3ea98d1d8016b!8m2!3d33.9986695!4d-117.7977118' target="_blank" className='mendhi-map'> Map it for me! </a>
            </div>

            <div className='event-schedule'>
              <img src='./schedule.png' />
              <div> 5 PM: Ladies Only </div>
              <div> 6:30 PM: All guests </div>
            </div>
          <AddToCalendar event={event}/>
          </div>
          <div className='rsvp-form'>
            <img src='./rsvp.png' />
            <div className='event-form'>
              <iframe id='collapsed-form-mendhi' className='collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLScjffUYeNEWlK9JijhzoS7i3orOCBf7P3cQgcgAukZoQlgSZg/viewform?embedded=true" width="450" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

module.exports = MendhiDetails;
