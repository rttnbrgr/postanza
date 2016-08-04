import React from 'react';
import Tweet from './Tweet';
import data from '../data/data-pretty';

// Get only the tweets from the data
import { isTweetFilter } from '../util/functions';

function tweetIsNotNegative(tweetObject) {
	return tweetObject.sentiment.type !== 'NEGATIVE' 
}

var tweetsArray = data.filter(isTweetFilter); 
var positiveTweets = tweetsArray.filter(tweetIsNotNegative);
var noAviTweets = positiveTweets.splice(3, 2); // 2

var SingleTweet = React.createClass({	

	// tweetsArray: data.filter(isTweetFilter),

	// test tweet keys
	// testTweet: data[7],
	noAvi: [3,4],
	unfavorable: [2],
	// testTweet: positiveTweets[4],
	testTweet: data[4],
	// testTags: '#iflyalaska #mtrainer #pacnw #seattle #kray',
	// testString: 'How nice was it for the Alaska airline worker to take my picture tonight! #alaskaairlines #alaskaair @alaskaair #iflyalaska',
	// tt: tweetsArray[0],


	tweetIsNotNeg: function(tweetObject) {
		return tweetObject.sentiment.type !== 'NEGATIVE'		
	},

	tweetToString: function(string) {
		// var regexp = new RegExp('/<(?:.|\n)*?>/gm');
		var regexp = new RegExp(/<(?:.|\n)*?>/gm);
		var convertedHTML = string.replace(regexp, '');
		// var convertedHTML = string.replace(/<(?:.|\n)*?>/gm, '');
		return convertedHTML
	},

	stripHashtags: function(string) {
		var regexp = new RegExp('#([^\\s]*)','g');
		var hashtagsArray = string.match(regexp);
		var hashtagsString = hashtagsArray.join(' ');
		return hashtagsString
	},	

	render: function() {
		{ 
			// var testHtml = this.tt.text
			// var update = testHtml.replace(/<(?:.|\n)*?>/gm, '');
			// console.log(testHtml);
			// console.log(update);
			
			
			// console.log(this.testTweet.sentiment.type);
			// var boogz = this.tweetIsNotNeg(this.testTweet);
			// console.log(boogz);
			// console.log('T E S T the F U N C S');
			
			// var jam = this.tweetToString(this.testTweet.text);
			// console.log('tweetToString = ' + jam);

			// var pb = this.stripHashtags(jam);
			// console.log('stripHashTags = ' + pb);

			// this.stripHashtags("Take my picture tonight! #alaskaairlines #alaskaair @alaskaair #iflyalaska");
			// console.log('official test');
			// var hashtagsArray = this.stripHashtags(this.testTweet.text);
			// var hashtagsString = hashtagsArray.join(' ');
			// console.log(hashtagsString);
		}
		return (
			<div className="view tweet__view" id="singleTweet">
				<Tweet 
					user={this.testTweet.user} 
					tweet={this.tweetToString(this.testTweet.text)} 
					tags={ this.stripHashtags(this.tweetToString(this.testTweet.text)) } 
					tweetsArray={this.tweetsArray} 
				/>
			</div>
		)
	}
})

export default SingleTweet;

 