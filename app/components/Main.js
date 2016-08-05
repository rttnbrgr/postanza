import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var NewMain = React.createClass({
	
	render: function() {
		var path = this.props.location.pathname;
		var segment = path.split('/')[1] || 'root';

		return (			
			// <div className="app-wrapper">
				<ReactCSSTransitionGroup
					transitionName={segment === 'root' ? 'reversePageSlide' : 'pageSlide' }
					// transitionName='pageSlide'
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}>
					{React.cloneElement(this.props.children, {key: segment })}					
				</ReactCSSTransitionGroup>
			// </div>
		)
	}
})

export default NewMain;