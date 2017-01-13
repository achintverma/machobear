import React from 'react';
import './Contact.scss';
import About from '../../components/About/About';
import Map from '../../components/Map/Map';

export default class Contact extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			
			<div className="contact-section">
				<div className="flex-wrapper">
					<About></About>
					<Map></Map>
				</div>
			</div>
		);
	}
}

