import React from 'react';
import Tweet from '../components/Tweet';

// can i pass this in via props from router?
import data from '../data/data-pretty.js'
import { isTweetFilter } from '../utility-functions';
var testTags = '#iflyalaska #mtrainer #pacnw #seattle #butthole';

// var isActive = false;
// var falseState = 0;
// var isActive = falseState === index;

var TweetView = React.createClass({
	state: {
		currentTweet: 0
	},
	
	tweetsArray: data.filter(isTweetFilter),

	getInitialState: function() {

		console.log('tweet - getInitialState');
		return {
			currentTweet: 0
		}
	},	

	render: function() {
		// console.log(this.state);
		// console.log(this.state.currentTweet);
		// var tweetNodes = this.props.tweetsArray.map((tweetNode, index) =>
		// 	var falseState = 0;
		// 	var isActive = falseState === index;			
			
		// 	return (
		// 		<Tweet active={isActive} key={tweetNode.post_id} user={tweetNode.user} tweet={tweetNode.text} tags={testTags} /> 
		// 	);
		// });

		return (
			<div className="view view--tweets old-classes post post--tweet tweet__view">
				{
					this.tweetsArray.map( function(tweetNode, index) {
						
						var isActive = this.state.currentTweet === index;						
						return (
							<Tweet active={isActive} key={tweetNode.post_id} user={tweetNode.user} tweet={tweetNode.text} tags={testTags} /> 
						)
					}, this)
				}
			</div>
		)
	}
})

export default TweetView;