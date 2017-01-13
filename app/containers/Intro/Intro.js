import React from 'react';
import './Intro.scss';

var Intro = React.createClass({
	render(){
		return(
			
			<div className="intro-section">
				<div className="container">
					<div className="flex-wrapper">
						<div className="flex-50">
							<h2>The Macho App</h2>
							<p>Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
							<p>Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean.</p>

							<a className="btn button-primary cta">Download the App</a>

						</div>
						<div className="flex-50">
							<img className="phone" src="./images/iPhone_6.png" />
						</div>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Intro;
