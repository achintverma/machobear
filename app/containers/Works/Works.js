import React from 'react';
import { connect } from 'react-redux'
import Work from '../../components/Work/Work';

import './Works.scss';
import { fetchWorks } from "../../actions/works";

class Works extends React.Component{

	constructor(){
		super();
	}

	componentWillMount(){
		this.props.dispatch(fetchWorks());
	}

	render(){
		const works = this.props.works.map((item) => {
			return <Work key={item.id.toString()} work={item}></Work>
		});

		return(
			<div className="works-container">
				{works}		
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		works: state.works.works
	};
}

export default connect(mapStateToProps)(Works)