import React from 'react';
// tweet components
import TweetUser from './TweetUser';
import TweetBody from './TweetBody';
import TweetTags from './TweetTags';

var Tweet = React.createClass({

	getInitialState: function() {

		// console.log('tweet - getInitialState'),
		return {
			currentTweet: 0
		}
	},
	
	getDefaultProps: function() {
		// console.log('tweet - getDefaultProps');
		return {
			speed: 1000
		}
	},
	
	// componentWillMount: console.log('tweet - componentWillMount'),	

	componentDidMount: function() {
		// console.log('tweet - componentDidMount');
		var counter = 0;
		var tweetArrayLength = 11;
		//
		// this.interval = setInterval(function() {
		// 	if(counter < tweetArrayLength) {
		// 		console.log('tweet ' + counter);
		// 		counter++;
		// 	} else {
		// 		console.log('tweet ' + counter);
		// 		counter = 0;
		// 	}
		// }.bind(this), 1000);
	},

	objList: 5,

	componentWillUpdate: function() {
		// console.log('cwu');
		// console.log(this.objList);
		// console.log(this.state);
	},

	changeTweet: function() {
		console.log('changeTweet', this.state.currentTweet)

		this.setState({
			currentTweet: this.state.currentTweet + 1
		})
	},	

	// normalize the text
	tweetToString: function(string) {
		var regexp = new RegExp(/<(?:.|\n)*?>/gm);
		var convertedHTML = string.replace(regexp, '');
		return convertedHTML
	},

	// get the hashtags
	stripHashtags: function(string) {
		var regexp = new RegExp('#([^\\s]*)','g');
		var hashtagsArray = string.match(regexp);
		var hashtagsString = hashtagsArray.join(' ');
		return hashtagsString
	},

	render: function() {
		{
			var tweetString = this.tweetToString(this.props.tweet);
			var tweetHashtags = this.stripHashtags(tweetString);			
		}
		return (
			<div className={
					(this.props.active ? 'active' : (this.props.next ? 'next' : (this.props.last ? 'last' : 'hidden')))  + " tweet__wrap"
				} 
				onClick={this.changeTweet} >
				<TweetUser user={this.props.user} />
				<TweetBody tweet={tweetString} />
				<TweetTags tags={tweetHashtags} />				
			</div>			
		)
	}
})

export default Tweet;