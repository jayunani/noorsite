var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ShaadiDetails = require('ShaadiDetails');
var Header = require('Header');
var Footer = require('Footer');

class Mubarak12 extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <MendhiDetails />
          <ShaadiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Mubarak12;