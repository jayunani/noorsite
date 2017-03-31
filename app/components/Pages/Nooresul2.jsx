var React = require('react');
var ShaadiDetails = require('ShaadiDetails');
var Header = require('Header');
var Footer = require('Footer');

class Nooresul2 extends React.Component {
  render() {
     return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <ShaadiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Nooresul2;