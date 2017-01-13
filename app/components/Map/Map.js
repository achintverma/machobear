import React from 'react';
import './Map.scss';

export default class Map extends React.Component{

	constructor(){
		super();
		this.state = {
			key: "AIzaSyAZQ5yymm1bXQZJuryWIyECLrIjyQGNe98",
			lat: 49.2774286,
			lng: -123.2242682,
			address: {
				street: "22 Bear Street",
				city: "Vancouver",
				state: "BC",
				zip: 10001
			},
			phone: "(800) 123-1234",
			email: "hello@machobear.com"
		};	
	}

	componentDidMount(){
		var map = new google.maps.Map(document.getElementById('gmap'), {
          center: {lat: this.state.lat, lng: this.state.lng},
          zoom: 12,
          scrollwheel: false
        });

        var contentString = '<div>'+this.state.address.street+'<br/>'+this.state.address.city+', '+this.state.address.state+', '+this.state.address.zip+' <br/><br/> '+this.state.email+'<br/> '+this.state.phone+'</div>';
        
        // var marker = new google.maps.Marker({
        //   position: {lat: this.state.lat, lng: this.state.lng},
        //   map: map,
        //   title: this.state.address.city
        // });

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          position: {lat: this.state.lat, lng: this.state.lng}
        });

        //marker.addListener('click', function() {
          infowindow.open(map);
        //});
	}

	render(){
		return(<div id="gmap" className="map-box"></div>);	
	}
}
