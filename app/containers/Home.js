import React from 'react';
import Intro from './Intro/Intro';
import Slides from './Slides/Slides';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Works from './Works/Works';
import Team from './Team/Team';
import Contact from './Contact/Contact';

var Home = React.createClass({
	render(){
		return(
			<div>
				<Slides></Slides>
				<Intro></Intro>
				<SectionTitle id="works" title="Our Works" subheading="52 Works in total"></SectionTitle>
				<Works></Works>
				<SectionTitle id="team" title="Our Team" bg="#fff"></SectionTitle>
				<Team></Team>
				<Contact></Contact>
			</div>
		);
	}
});

module.exports = Home;