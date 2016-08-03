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
		console.log('tweet - getDefaultProps');
		return {
			speed: 1000
		}
	},
	
	componentWillMount: console.log('tweet - componentWillMount'),
	
	componentDidMount: function() {
		console.log('tweet - componentDidMount');
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

	changeTweet: function() {
		console.log('changeTweet', this.state.currentTweet)

		this.setState({
			currentTweet: this.state.currentTweet + 1
		})
	},

	// click event test
	testClick: () => { console.log('test click' )},

	render: function() {
		return (
			<div className={(this.props.active ? 'active' : 'inactive') + " tweet__wrap"} onClick={this.changeTweet} >
				<TweetUser user={this.props.user} />
				<TweetBody tweet={this.props.tweet} />
				<TweetTags tags={this.props.tags} />				
			</div>			
		)
	}
})

export default Tweet;