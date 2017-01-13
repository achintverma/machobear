import React from 'react';

// Import Owl Slider 
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel';

import './Slides.scss';

export default class Slides extends React.Component{
	constructor(){
		super(); 
	}

	componentDidMount(){
		$('#slide-carousel').owlCarousel({
			nav:true,
			loop:true,
			navText: [""],
			responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
	}

	render(){
		const url = "images/photo-1440439307159-c3afc8a8e4ff.jpeg";
		const slideStyle = {
			backgroundImage: 'url('+url+')'
		};

		return(
			<div id="slide-carousel" className="owl-carousel owl-theme">
			  <div className="item slide" style={slideStyle}>

			  	<span className="slide-content">
				  	<h3>Sem Tortor Mollis Aenean</h3>
				  	<p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum</p>
				  	<a href="#" className="btn slide-cta">Explore</a>
			  	</span>

			  </div>
			  <div className="item slide">
			    	<h3>Dummy Slide</h3>
			  </div>
			</div>
		);
	}
}