import React from 'react';
import './header.scss';

import $ from 'jquery';

var Header = React.createClass({

	componentDidMount(){
		$('a[href^="#"]').on('click', function(event) {

		    var target = $(this.getAttribute('href'));

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        }, 1000);
		    }

		});
	},
	render(){
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-2 col-sm-3 col-xs-12 logo-container"><span className="logo">MACHO</span></div>
						<div className="col-md-10 col-sm-9 col-xs-12 nav-container">
						<ul className="nav nav-pills nav-alignment">
						  <li role="presentation" className="active"><a href="#slide-carousel">Product</a></li>
						  <li role="presentation"><a href="#works">Works</a></li>
						  <li role="presentation"><a href="#team">Team</a></li>
						  <li role="presentation"><a href="#about">About</a></li>
						  <li role="presentation"><a href="#gmap">Contact</a></li>
						</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = Header;