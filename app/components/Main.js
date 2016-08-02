import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/data-pretty';
import App from './App';

// import router

var state = {
	currentTweet: 0,
	postano: data,
}

ReactDOM.render(
	<App data={data} state={state}/>, 
	document.getElementById('app')
);