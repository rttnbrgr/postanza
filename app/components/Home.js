import React from 'react';
import AlaskaLogo from './AlaskaLogo';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="view view--home home__view">
				
				<div className="home__header">
					<AlaskaLogo />
					<h2 className="home__headline">#iFlyAlaska</h2>
				</div>
				
				<div className="home__actions">
					<Link to="/tweetview" className="home__btn">Tweet View</Link>
					<Link to="/gridview" className="home__btn">Grid View</Link>				
					
					<Link to="/singletweet" className="home__btn">Single Tweet</Link>				
				</div>
			</div>
		)
	}
})

export default Home;