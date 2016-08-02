import React from 'react';
import ReactDOM from 'react-dom';
var PropTypes = React.PropTypes;
// import App from './App';
import data from './data-pretty';
import App from './scripts/components/App';

// import router

var state = {
	currentTweet: 0,
	postano: data,
}


ReactDOM.render(
	<App data={data} state={state}/>, 
	document.getElementById('app')
);