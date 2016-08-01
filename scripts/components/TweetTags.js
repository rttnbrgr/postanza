import React from 'react';

var TweetTags = React.createClass({
	render: function() {
		return (
			<span className="tweet__hashtags">{this.props.tags}</span>
		)
	}
})

export default TweetTags;