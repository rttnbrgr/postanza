import React from 'react';
// import PropTypes from React.PropTypes;

function TweetTags(props){
	return (
		<span className="tweet__hashtags react-sfc">{props.tags}</span>
	)
}

// TweetTags.propTypes = {
// 	tags: PropTypes.string
// }

export default TweetTags;