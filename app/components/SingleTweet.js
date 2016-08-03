import React from 'react';
import Tweet from './Tweet';
import data from '../data/data-pretty';

var SingleTweet = React.createClass({	
	// test tweet keys
	testTweet: data[7],
	testTags: '#iflyalaska #mtrainer #pacnw #seattle #kray',

	stripHashtags: function(string) {
		var regexp = new RegExp('#([^\\s]*)','g');
		var hashtags = string.match(RegExp);
		console.log(hashtags);
	},

	render: function() {
		{ 
			console.log(this.testTweet.text);
			console.log(this.stripHashtags.hashtags);
			this.stripHashtags("Take my picture tonight! #alaskaairlines #alaskaair @alaskaair #iflyalaska");
		}
		return (
			<div className="view tweet__view">
				<Tweet user={this.testTweet.user} tweet={this.testTweet.text} tags={this.testTags} />
			</div>
		)
	}
})

export default SingleTweet;