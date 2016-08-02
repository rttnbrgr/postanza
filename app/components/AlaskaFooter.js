import React from 'react';
import AlaskaLogo from './AlaskaLogo';

var AlaskaFooter = React.createClass({
	render: function() {
		return (
			<footer>
				<h2 className="footer__tagline">#iFlyAlaska</h2>
				<div className="footer__logo">
					<AlaskaLogo />
				</div>
			</footer>
		)
	}
})

export default AlaskaFooter;