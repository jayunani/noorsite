var React = require('react');
var MendhiDetails = require('MendhiDetails');
var Header = require('Header');
var Footer = require('Footer');

class Henna1 extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='event-content'>
          <MendhiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}



module.exports = Henna1;