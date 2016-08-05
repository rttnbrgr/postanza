import React from 'react';
import ReactRouter, { IndexLink } from 'react-router';

var BackButton = React.createClass({
	render: function() {
		return (
			<IndexLink to="/" className="home__btn btn--back" >&lt; Back</IndexLink>
		)
	}
})

export default BackButton;