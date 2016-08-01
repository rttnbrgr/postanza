import React from 'react';

var TweetUser = React.createClass({	
	render: function() {
		var tweetUser = this.props.user;
		return (
			<div className="tweet__user-wrap">
				<figure className="tweet__avi-wrap">
					<img src={tweetUser.icon} alt="{tweetUser.full_name}" className="tweet__avi"/>
				</figure>
				<h2 className="tweet__username">{'@' + tweetUser.screen_name}</h2>
			</div>
		)
	}
})

export default TweetUser;