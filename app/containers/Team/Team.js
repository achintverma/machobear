import React from 'react';
import { connect } from 'react-redux'

// Import Owl Slider 
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel';

import './Team.scss';
import Member from '../../components/Member/Member';
import { fetchMembers } from "../../actions/member";


class Team extends React.Component{
	constructor(){
		super();
	}

	componentWillMount(){
		this.props.dispatch(fetchMembers());
	}

	renderCarousal(){
		$('#team-carousel').owlCarousel({
			nav:true,
			loop:true,
			navText: [""],
			responsive:{
		        0:{
		            items:2,
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});
	}

	componentDidMount(){
		//this.renderCarousal();
	}

	componentDidUpdate(){
		this.renderCarousal()
	}
  
	render(){
		const members = this.props.members.map((item)=>{
			return <Member key={item.id} name={item.name} position={item.position} photo={item.photo}></Member>
		});

		return(
			<div id="team-carousel" className="owl-carousel owl-theme">
			  {members}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		members: state.members.members
	}
}

export default connect(mapStateToProps)(Team);