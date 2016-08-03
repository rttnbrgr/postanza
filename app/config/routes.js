import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router'
// components
import Main from '../components/Main';
import Home from '../components/Home';
import TweetView from '../containers/TweetView';
import GridView from '../components/GridView';
import SingleTweet from '../components/SingleTweet';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path='/tweetView' component={TweetView} />
			<Route path='/gridView' component={GridView} />
			<Route path='/singletweet' component={SingleTweet} />
		</Route>
	</Router>
)

export default routes;
