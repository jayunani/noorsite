var React = require('react');
var ValimaDetails = require('ValimaDetails');
var Header = require('Header');
var Footer = require('Footer');

class Sulenoor3 extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Sulenoor3;