import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import data from './data-pretty';



var samplePost = React.createClass({
	render: <li>hi</li>
});

var Post = React.createClass({
	render: function() {
		return (
			<div className="post">

			</div>
		)
	}
})

var thing = data[1].images[0].url;

// for(var i=0; i < data.length; i++ ) {

// }

console.log(data[1].source_type);

var App = React.createClass({
	render: function() {
		return (
			<div className="app-wrapper">
				<p>hello 3</p>
				<img src={thing} alt=""/>
				

				
			</div>
		)
	}
})





ReactDOM.render(
	<App/>, 
	document.getElementById('app')
);