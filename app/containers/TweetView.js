import React from 'react';
import Tweet from '../components/Tweet';
import BackButton from '../components/BackButton';
// import ReactCSSTransitionGroup = from 'react-addons-css-transition-group';
import AlaskaFooter from '../components/AlaskaFooter';

// can eye pass this in via props from router?
import data from '../data/data-pretty.js'
import { isTweetFilter, isNotNegative } from '../util/functions';
// filter the data down to tweets
var tweetsArray = data.filter(isTweetFilter);
// filter out negative tweets
var positiveTweets = tweetsArray.filter(isNotNegative);

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
		var interval = setInterval(function() {
			this.changeTweet();			
		}.bind(this), this.state.interval);
	},

	componentWillUnmount: function() {
		console.log('unmount the interval! d:3');		
		// unmount the interval
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
								key={tweetNode.post_id} user={tweetNode.user} tweet={tweetNode.text}
							/> 
						)
					}, this)
				}

				<BackButton />
				<AlaskaFooter />
				
			</div>
		)
	}
})

export default TweetView;