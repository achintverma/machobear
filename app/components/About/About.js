import React from 'react';
import './About.scss';

export default class About extends React.Component{
	render(){
		return(
			<div id="about" className="about">
				<h1>About Us</h1>
				<p>“Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.”</p>
				<a className="btn contact-cta">Contact Us</a>
			</div>
		);
	}
}