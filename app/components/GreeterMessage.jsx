var React = require('react');

var GreeterMessage = (props) => {
	var name = props.name;
		var message = props.message;
		return (
			<div>
				<h1> Hello {name} </h1>
				<p> {message} </p>
			</div>
		)
}

module.exports = GreeterMessage; 