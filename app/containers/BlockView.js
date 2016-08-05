import React from 'react';
import AlaskaFooter from '../components/AlaskaFooter';
import BackButton from '../components/BackButton';
import data from '../data/data-pretty';

import { hasSquarePhoto, isNotNegative, randomBG } from '../util/functions';

var blocksArray = data.filter(hasSquarePhoto);
// console.log('blocks', blocksArray);
var positiveBlocks = blocksArray.filter(isNotNegative);
// console.log(positiveBlocks);


var Block = React.createClass({
	render: function() {
		render (
			<div className="block" bg={randomBG()} type="color" >
				<BlockPhoto />
				<BlockInfo  />
			</div>
		)
	}
})

var BlockPhoto = React.createClass({
	// post: this.props.post,
	render: function() {
		// var post2 = this.props.post2.images[0];
		// console.log(post2);
		return (
			<div className="block--photo photo">
				<figure className={"photo__wrap " + this.props.bg }>
					<img src={this.props.post.images[0].url} alt="" className="photo__src photo__card"/>
					<img src={positiveBlocks[1].images[0].url} alt="" className="photo__src photo__card photo__card--back"/>
				</figure>
			</div>
		)
	}
})

var BlockInfo = React.createClass({
	render: function() {
		return (
			<div className="block--info info">
				
					<img src={this.props.post.user.icon} alt="" className="info__avi-src info__avi"/>
					<span className="info__username">{this.props.post.user.screen_name}</span>

			</div>
		)
	}
})



var BlockView = React.createClass({
	
	blocks: positiveBlocks,
	
	setBackground: randomBG,
	
	randomPicture: function() {
		var lengthTester = positiveBlocks.length;
		var random = (Math.floor(Math.random() * lengthTester));
		return positiveBlocks[random]
	},

	render: function() {
		var bgClass = this.setBackground();		
		var pic1 = this.randomPicture();
		var pic2 = this.randomPicture();
		var pic3 = this.randomPicture();


		return (
			<div className="grid__view view view--grid block__view">
				<div className="block__wrapper">
					
					<div className="block block--double">	
						<BlockPhoto post={ pic1 } another={ this.blocks[4] } bg={ bgClass } />
						<BlockInfo  post={ pic1 } post2={data[4]} />
					</div>
					<div className="block block--colors">	
						<BlockPhoto post={ pic3 } addons="test" bg={bgClass} />
						<BlockInfo  post={ pic3 } />
					</div>
					
				</div>

				<BackButton />
				<AlaskaFooter />

			</div>
		)
	}
})

export default BlockView;