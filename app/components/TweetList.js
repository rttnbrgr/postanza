import React from 'react';

var NotTweet = React.createClass({
	rawMarkup: function() {
    return { __html: this.props.text };
  },
	render: function() {
		return (
			<div className="tweet--simple">
				<p dangerouslySetInnerHTML={ this.rawMarkup() } ></p>
			</div>
		)
	}
})

var TweetList = React.createClass({
	
	render: function(){
		return (
			<div className="tweets-holder">
				{
					this.props.tweetsArray.map( (tweetObject) => <NotTweet key={tweetObject.post_id} text={tweetObject.text} /> )
				}
			</div>
		)
	}
})

export default TweetList;