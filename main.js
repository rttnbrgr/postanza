import React from 'react';
import ReactDOM from 'react-dom';
var PropTypes = React.PropTypes;
// import App from './App';
import data from './data-pretty';

// import our components
import AlaskaFooter from './scripts/components/AlaskaFooter';
import TweetView from './scripts/containers/TweetView';
import Tweet from './scripts/components/Tweet';
import { isTweetFilter } from './scripts/utility-functions';
// don't need these
import GridView from './scripts/components/GridView';
import TweetList from './scripts/components/TweetList';




// utility functions
import { getPhotos, countThePostTypes, tweetsWithPhotos } from './scripts/utility-functions';
// getPhotos(data);
// countThePostTypes(data);
// tweetsWithPhotos(data);

// a sample tweet from the first object
var Tweettttttt = React.createClass({
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
					
					<div className="tweet__user-wrap">
						<figure className="tweet__avi-wrap">
							<img src={this.testTweet.user.icon} alt="{this.testTweet.user.full_name}" className="tweet__avi"/>
						</figure>
						<h2 className="tweet__username">{'@' + data[0].user.screen_name}</h2>
					</div>

					<p className="tweet__text">{data[0].text}</p>
					<span className="tweet__hashtags">#iflyalaska #mtrainer #pacnw #seattle</span>				
					
				</div>
			</div>
		)
	}
})

var state = {
	currentTweet: 0,
	postano: data,
}

var App = React.createClass({
	// some style testing
	colors: {
		average: data[1].images[0].average_color,
		main: data[1].images[0].dominant_color
	},

	state: state,

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
		
		var style = {
			borderRight: '10px solid ' + this.colors.main,
			borderBottom: '10px solid ' + this.colors.average
		};
		
		return (
			<div className="app-wrapper">
				<TweetView tweetsArray={ this.props.data.filter(this.isTweetFilter) } state={this.props.state} />
				
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


ReactDOM.render(
	<App data={data} state={state}/>, 
	document.getElementById('app')
);