var React = require('react');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Header = require('Header');
var Footer = require('Footer');

class Mabrook23 extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <ShaadiDetails />
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Mabrook23;