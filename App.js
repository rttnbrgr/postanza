import React from 'react';
import Logo from './Logo';

var App = React.createClass({
	render: function() {
		return (
			<div className="app-wrap">
				<p>hello 2</p>
				<Logo />				
			</div>
		)
	}
})

export default App;