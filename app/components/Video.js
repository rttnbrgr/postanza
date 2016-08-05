import React from 'react';
import BackButton from './BackButton';

var Video = React.createClass({	
	render: function() {
		return (
			<div className="view video__view ak-gradient-0">
				<div className="video__wrap">
					<div className="video">
						<iframe width="640" height="480" src="https://www.youtube.com/embed/qExIWQKu5pI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>	

				<BackButton />
			</div>
		)
	}
})

export default Video;