var React = require('react');

var Main = (props) => {
	return (
		<div>	
      <div className="row">
        <div className="column small-center medium-6 large-4">
          {props.children}
        </div>
      </div>
		</div> 
	);
}

module.exports = Main;