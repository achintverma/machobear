var React = require('react');
var HeaderContainer = require('./Header/Header.js');
var Footer = require('./Footer/Footer.js');
import Home from './Home'; 

export default class Main extends React.Component{
	render(){
		return(
		<div>
			<HeaderContainer />
			<Home />
			<Footer />
		</div>);
	}
}
