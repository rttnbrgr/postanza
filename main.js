import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import data from './data-pretty';

function getPhotos(dataSet) {
	
	var thePhotos = [];

	console.log(dataSet.length);	
	
	for(var i=0; i < dataSet.length; i++) {
		if ( dataSet[i].images.length !== 0 ){
			// console.log( dataSet[i].images[0].url );
			thePhotos.push(dataSet[i].images[0].url);
		}
	}

	console.log( thePhotos );
}
// getPhotos(data);


function countThePostTypes() {
	var photos = 0;
	var vines = 0;
	var tweets = 0;
	var postType = '';

	for(var i=0; i < data.length; i++) {
		postType = data[i].source_type;
		if(postType === 'instagram') {
			photos += 1;
		} else if (postType === 'vine') {
			vines += 1;
		} else if (postType === 'twitter') {
			tweets += 1;
		}
	}

	console.log('ig-photos = ' + photos);
	console.log('vines = ' + vines);
	console.log('tweets = ' + tweets);
} 
// countThePostTypes();

function tweetsWithPhotos() {
	var tweetsWithPic = 0;
	
	for(var i=0; i < data.length; i++) {
		data[i].source_type === 'twitter' && data[i].images.length !==0 ? tweetsWithPic++ : console.log('no');
	}

	console.log('tweets with photos = ' + tweetsWithPic);
}
// tweetsWithPhotos();




// test the tweet string
var testTweet = data[0].text;
console.log(testTweet);
// var PostTweet = React.createClass({
// 	render: function() {

// 	}
// })


// twitter test
function isTweet(obj) {
	// obj.source_type === 'instagram' ? true : false;
	
	if( obj.source_type === "twitter" ) {
		return true;
	} else {
		return false;
	}
}

var tweetsObject = data.filter(isTweet);
console.log('tweets objects array', tweetsObject);

var TweetHolder = React.createClass({
	// tweetsArray: props.data.filter(isTweet),
	// getIn	
	render: function(){
		console.log(this.props.tweetsArray);
		return (
			<div>
				{
					this.props.tweetsArray.map( (tweetObject) => <NotTweet key={tweetObject.post_id} text={tweetObject.text} /> ) 
					// console.log(this.props.data)
					// var testArray = this.props.data.filter(isTweet)
					// console.log('inside react' + tweetsObject)
					// tweetsObject.map( (obj) => <NotTweet title="newtitle" /> )	
				}

			</div>
		)
	}
})

var NotTweet = React.createClass({
	rawMarkup: function() {
    return { __html: this.props.text };
  },
	render: function() {
		return (
			<div className="tweet--no">
				<p dangerouslySetInnerHTML={ this.rawMarkup() } ></p>
			</div>
		)
	}
})

// a sample tweet from the first object
var Tweet = React.createClass({
	render: function() {
		return (
			<div className="post post--tweet">
				<h1>#iFlyAlaska</h1>
				<p className="tweet__text">{data[0].text}</p>
				<span className="tweet__hashtags">#iflyalaska #mtrainer #pacnw #seattle</span>				
				<h2 className="tweet__username">@{data[0].user.screen_name}</h2>
			</div>
		)
	}
})








var thing = data[1].images[0].url;

var App = React.createClass({
	render: function() {
		var theColors = {
			average: data[1].images[0].average_color,
			main: data[1].images[0].dominant_color
		};
		var black = 'black';
		var styleTest = {			
			borderRight: '10px solid ' + theColors.main,
			borderBottom: '10px solid ' + theColors.average
		};
		return (
			<div className="app-wrapper">
				<p>hello 3</p>
				<img src={thing} alt="" style={styleTest} />
				<span>{testTweet}</span>
				<Tweet />
				<TweetHolder tweetsArray={ this.props.data.filter(isTweet) }  data={this.props.data}/>				
				
			</div>
		)
	}
})





ReactDOM.render(
	<App data={data}/>, 
	document.getElementById('app')
);