import React from 'react';
import data from '../data/data-pretty';

var Block = React.createClass({
	render: function() {
		render (
			<div className="block">
				<BlockPhoto />
				<BlockInfo  />
			</div>
		)
	}
})

var BlockPhoto = React.createClass({
	// post: this.props.post,
	render: function() {
		return (
			<div className="block--photo photo">
				<figure className="photo__wrap">
					<img src={this.props.post.images[0].url} alt="" className="photo__src"/>
				</figure>
			</div>
		)
	}
})

var BlockInfo = React.createClass({
	render: function() {
		return (
			<div className="block--info info">
				<div className="info__userblock">
					<figure className="info__avi">
						<img src={this.props.post.user.icon} alt="" className="info__avi-src"/>
					</figure>
					<span className="info__username">{this.props.post.user.screen_name}</span>
				</div>
				<p className="info__text">{this.props.post.text}</p>
			</div>
		)
	}
})

var GridView = React.createClass({
	render: function() {
		return (
			<div className="grid__view view view--grid">
				
				<div className="block__wrapper">
					<div className="block">					
						<BlockPhoto post={data[0]} />
						<BlockInfo post={data[0]}  />					
					</div>

					<div className="block">
						<BlockPhoto post={data[1]} />						
						<BlockInfo post={data[1]} />						
					</div>

					<div className="block">
						<BlockPhoto post={data[2]} />
						<BlockInfo post={data[2]} />
					</div>
				</div>

			</div>
		)
	}
})

export default GridView;