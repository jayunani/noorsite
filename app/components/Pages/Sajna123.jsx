var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ShaadiDetails = require('ShaadiDetails');
var ValimaDetails = require('ValimaDetails');
var Header = require('Header');
var Footer = require('Footer');

class Sajna123 extends React.Component {
  render() {
     return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <MendhiDetails />
          <ShaadiDetails />
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Sajna123;