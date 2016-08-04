import React from 'react';
import data from '../data/data-pretty';

// import our components
import { isTweetFilter } from '../util/functions';
import TweetView from '../containers/TweetView';
import Tweet from './Tweet';
import TweetList from './TweetList';
import GridView from './GridView';
import AlaskaFooter from './AlaskaFooter';
import Home from './Home';

var App = React.createClass({
	
	thing: data[2].images[0].url,

	componentDidMount: function(){
		console.log('componentDidMount');
		var isTweet = function(obj){
			if( obj.source_type === "twitter" ) {
				return true;
			} else {
				return false;
			}
		};
	},

	// this filters the tweets
	isTweetFilter: isTweetFilter,
 
	// test tweet keys
	testTweet: data[7],
	testTags: '#iflyalaska #mtrainer #pacnw #seattle #kray',

	render: function() {

		return (
			<div className="app-wrapper">

				<Home />

				<TweetView tweetsArray={ this.props.data.filter(this.isTweetFilter) } />
				
				<div className="post post--tweet tweet__view">
					<Tweet user={this.testTweet.user} tweet={this.testTweet.text} tags={this.testTags} />
				</div>

				<TweetList tweetsArray={ this.props.data.filter(this.isTweetFilter) }  data={this.props.data}/>
				<GridView />
				<AlaskaFooter />

			</div>
		)
	}
})

export default App;