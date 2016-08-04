import React from 'react';
import Tweet from '../components/Tweet';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import AlaskaFooter from '../components/AlaskaFooter';


// can eye pass this in via props from router?
import data from '../data/data-pretty.js'
var testTags = '#iflyalaska #mtrainer #pacnw #seattle #butthole';

// filter the data down to tweets
import { isTweetFilter } from '../util/functions';
var tweetsArray = data.filter(isTweetFilter);

// filter out negative tweets
function tweetIsNotNegative(tweetObject) {
	return tweetObject.sentiment.type !== 'NEGATIVE'		
}
var positiveTweets = tweetsArray.filter(tweetIsNotNegative);

// remove the one's without avatar; 
// MANUALLY, not positive of best way to catch these img errors
var noAviTweets = positiveTweets.splice(3, 2);


var TweetView = React.createClass({
	state: {
		currentTweet: 0,
		lastTweet: -1,
		nextTweet: 1,
		counter: 0
	},
	
	getInitialState: function() {
		return {
			currentTweet: 0,
			lastTweet: -1,
			nextTweet: 1,
			counter: 0,
			bgColor: this.setBackground(),
			interval: 5000
		}
	},

	componentDidMount: function() {
		this.interval = setInterval(function() {
			this.changeTweet();			
		}.bind(this), this.state.interval);
	},		

	changeTweet: function() {
		
		var lengthCheck = this.tweetsArray.length - 1;

		this.setState({
			lastTweet: this.state.lastTweet < lengthCheck ? this.state.lastTweet + 1 : 0,
			currentTweet: this.state.currentTweet < lengthCheck ? this.state.currentTweet + 1 : 0,
			nextTweet: this.state.nextTweet < lengthCheck ? this.state.nextTweet + 1 : 0,
			counter: this.state.counter + 1
		});

	},

	setBackground: function() {
		var bgLength = 5;
		var randomBG = (Math.floor(Math.random() * bgLength));
		var bgClass = 'ak-gradient-' + randomBG;
		return bgClass		
	},

	// set the array of tweets to only useful dataset
	tweetsArray: positiveTweets,

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
			<div className={"view tweet__view " + this.state.bgColor} onClick={this.changeTweet}>
				
				{
					this.tweetsArray.map( function(tweetNode, index) {
						
						var isActive = this.state.currentTweet === index;						
						var isNext = this.state.nextTweet === index;
						var isLast = this.state.lastTweet === index;

						return (
							<Tweet 
								active={isActive} next={isNext} last={isLast}
								key={tweetNode.post_id} user={tweetNode.user} tweet={tweetNode.text} tags={testTags} 
							/> 
						)
					}, this)
				}

				<AlaskaFooter />
				
			</div>
		)
	}
})

export default TweetView;