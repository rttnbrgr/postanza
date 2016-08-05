import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router'
// components
import Main from '../components/Main';
import Home from '../components/Home';
import TweetView from '../containers/TweetView';
import BlockView from '../containers/BlockView';
import Video from '../components/Video';
import SingleTweet from '../components/SingleTweet';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path='/tweetView' component={TweetView} />
			<Route path='/blockview' component={BlockView} />
			<Route path='/thoughts' component={Video} />
		</Route>
	</Router>
)

export default routes;
