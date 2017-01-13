import React from 'react';
import './SectionTitle.scss';

export default class SectionTitle extends React.Component{
	constructor(){
		super();
	}

	render(){

		const sectionStyle = {
			backgroundColor: this.props.bg || "#eee",
			color: this.props.color || "#333"
		}

		return(
			<div id={this.props.id} className="section-title" style={sectionStyle}>
				<h1>{this.props.title}</h1>
				<span>{this.props.subheading}</span>
			</div>
		);
	}
}