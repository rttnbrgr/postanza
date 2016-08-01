import React from 'react';

var TweetBody = React.createClass({
	rawMarkup: function() {
    return { __html: this.props.tweet };
  },
	render: function() {
		return (
			<p className="tweet__text" dangerouslySetInnerHTML={ this.rawMarkup() } ></p>
		)
	}
})

export default TweetBody;