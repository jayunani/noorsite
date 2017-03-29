var React = require('react'); 
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var Henna1 = require('Henna1');
var Mubarak12 = require('Mubarak12');
var Sajna123 = require('Sajna123');
var Mabrook23 = require('Mabrook23');
var Sulenoor3 = require('Sulenoor3');
var Nooresul2 = require('Nooresul2');
var Tchowdhry13 = require('Tchowdhry13');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="/hottamales" component={Henna1}/>
			<Route path='/kashmirichai' component={Mubarak12} />
			<Route path='/sajna' component={Sajna123} />
			<Route path='/ucsd' component={Mabrook23} />
			<Route path='/noorethaoos' component={Sulenoor3} />
			<Route path='/562925' component={Nooresul2} />
			<Route path='/villagepizza' component={Tchowdhry13} />
			<IndexRoute component={Home}/>
		</Route>
	</Router>,
	document.getElementById('app')
);



