import React from 'react';
import './Work.scss';

var Work = React.createClass({
	render(){
		return(
			<div className="work">
				<img src={this.props.work.image} />
				<div className="work-overlay">
					<h5>{this.props.work.title}</h5>
					<p>{this.props.work.description}</p>
				</div>	
			</div>
		);
	}
})

module.exports = Work;
