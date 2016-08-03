import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var NewMain = React.createClass({
	render: function() {
		return (
			// <div className="app-wrapper">
				<ReactCSSTransitionGroup
					transitionName="appear"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}					
				</ReactCSSTransitionGroup>
			// </div>
		)
	}
})

export default NewMain;