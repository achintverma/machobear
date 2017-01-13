import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Member.scss';

export default class member extends React.Component{

	constructor(){
		super();
	}

	render(){
		
		// const memberStyle = {
		// 	backgroundImage:'url('+this.props.photo+')'
		// };
		
		return(
			
			<div className="member item">
				<img src={this.props.photo} />
				<span className="member-overlay">
					<h5>{this.props.name}</h5>
					<p>{this.props.position}</p>
				</span>
			</div>
		);
	}

}