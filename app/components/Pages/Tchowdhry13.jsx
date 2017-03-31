var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ValimaDetails = require('ValimaDetails');
var Header = require('Header');
var Footer = require('Footer');

class Tchowdhry13 extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <MendhiDetails />
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Tchowdhry13;