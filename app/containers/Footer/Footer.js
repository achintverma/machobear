import React from 'react';
import './Footer.scss';

import $ from 'jquery';

var Footer = React.createClass({
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
			<footer>
				<div className="container">
					<h3>MACHO</h3>
					<div className="row">
						<div className="col-md-8">
							<ul className="footer-nav">
								<li><a href="#slide-carousel">Product</a></li>
								<li><a href="#works">Works</a></li>
								<li><a href="#team">Team</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#gmap">Contact</a></li>
							</ul>
						</div>
						<div className="col-md-4">
							<ul className="footer-social">
								<li><a href=""><img src="images/icons/fb.svg" /></a></li>
								<li><a href=""><img src="images/icons/tw.svg" /></a></li>
								<li><a href=""><img src="images/icons/gplus.svg" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;

