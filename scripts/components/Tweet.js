import React from 'react';
import data from '../../data-pretty';

// tweet components
import TweetUser from './TweetUser';
import TweetBody from './TweetBody';
import TweetTags from './TweetTags';


// var TweetUser = React.createClass({
// 	testTweet: data[5],
// 	render: function() {
// 		var tweetObject = this.props.tweet;
// 		return (
// 			<div className="tweet__user-wrap">
// 				<figure className="tweet__avi-wrap">
// 					<img src={tweetObject.user.icon} alt="{tweetObject.user.full_name}" className="tweet__avi"/>
// 				</figure>
// 				<h2 className="tweet__username">{'@' + tweetObject.user.screen_name}</h2>
// 			</div>
// 		)
// 	}
// })

// var TweetBody = React.createClass({
// 	render: function() {
// 		return (
// 			<p className="tweet__text">{data[0].text}</p>			
// 		)
// 	}
// })

// var TweetTags = React.createClass({
// 	render: function() {
// 		return (
// 			<span className="tweet__hashtags">#iflyalaska #mtrainer #pacnw #seattle</span>
// 		)
// 	}
// })

// a sample tweet from the first object
var Tweet = React.createClass({
	testTweet: data[5],	

	// propTypes: {
	// 	speed: PropTypes.number
	// }


	getInitialState: console.log('getInitialState'),
	
	getDefaultProps: function() {
		console.log('getDefaultProps');
		return {
			speed: 1000
		}
	},
	
	componentWillMount: console.log('componentWillMount'),
	
	componentDidMount: function() {
		console.log('componentDidMount');
		// this.interval = setInterval(function() {
		// 	if(true) {
		// 		console.log('tic...')
		// 	} 
		// }.bind(this), 500);
	},

	render: function() {
		return (
			<div className="post post--tweet tweet__view">
				<div className="tweet__wrap">
					
					<TweetUser tweet={ data[5] } user={this.props.user} />
					<TweetBody tweet={this.props.tweet} />
					<TweetTags tags={this.props.tags} />					
					
				</div>
			</div>
		)
	}
})

export default Tweet;