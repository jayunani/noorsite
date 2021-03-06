import React from 'react';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  render() {
    let codes = ['hottamales', '562925', 'noorethaoos', 'kashmirichai', 'UCSD', 'villagepizza', 'sajna'];
    let formSubmitHandler = ((e) => {
      e.preventDefault();
      let codeValue = this.refs.codeInput.value;
        if(codes.includes(codeValue)) {
          browserHistory.push('/' + codeValue)
        } else {
          browserHistory.push('/error1')
        }
    })
    return (
      <div className='home-page'>
        <div className='home-body'>
          <div className='noor-sulayman'> 
            Noor & Sulayman 
          </div>
          <form onSubmit={formSubmitHandler}> 
            <input type='text' placeholder='ENTER CODE ' ref='codeInput' className='code-input'/>
            <input type='submit' className='submit-btn' value='Go!'/>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Home;