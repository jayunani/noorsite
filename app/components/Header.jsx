var React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className='title'>
        <div className='title-content'>
          <img src='/noorpic.jpeg' className='noor-pic'/>
          <div className='header-graphic'>
            <img src='/bismillah8.png' className='bismallah'/>
            <div className='event'> Noor & Sulayman </div>
          </div>
          <img src='/sulpic.jpeg' className='sul-pic'/>
        </div>
      </div>
    );
  }
}



module.exports = Header;