import React from 'react';
import ReactRouter, { Link } from 'react-router'
import AlaskaLogo from './AlaskaLogo';

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
					<Link to="/blockview" className="home__btn">Block View</Link>
					<Link to="/thoughts" className="home__btn home__btn--clean">Some Thoughts</Link>
				</div>
			</div>
		)
	}
})

export default Home;