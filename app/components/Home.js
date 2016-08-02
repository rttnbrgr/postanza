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
					<Link to="/tweetView" className="home__btn">Tweet View</Link>
					<Link to="/gridView" className="home__btn">Grid View</Link>				
				</div>
			</div>
		)
	}
})

export default Home;