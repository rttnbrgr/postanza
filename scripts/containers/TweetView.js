import React from 'react';

// import twitter things
import TweetUser from '../components/TweetUser';
import TweetBody from '../components/TweetBody';
import TweetTags from '../components/TweetTags';

var TweetView = React.createClass({
	state: {
		currentTweet: 0
	},

	getInitialState: function() {
		console.log('getInitialState');
		return null		
	},

	render: function() {
		console.log(this.props.state);
		var tweetNodes = this.props.tweetsArray.map( function(tweetNode, index) {
			var isActive = false;
			// var isActive = this.props.state.currentTweet === index;
			return (
				<TweetNode active={isActive} key={tweetNode.post_id} user={tweetNode.user} rawText={tweetNode.text} tweet={tweetNode}/> 
			);
		});

		return (
			<div className="view view--tweets old-classes post post--tweet tweet__view">
				
				{tweetNodes}
				
			</div>
		)
	}
})

var TweetNode = React.createClass({
	testTags: '#iflyalaska #mtrainer #pacnw #seattle',
	render: function() {
		return (
			<div className="tweet__wrap">			
				<TweetUser user={this.props.user} />
				<TweetBody tweet={this.props.rawText} />
				<TweetTags tags={this.testTags} />
			</div>
		)
	}
})


export default TweetView;