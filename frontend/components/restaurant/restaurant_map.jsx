import React from 'react';
import { withRouter } from 'react-router-dom';
class RestaurantMap extends React.Component {

  createMarker(latlng, map) {
    let marker = new google.maps.Marker({
      map: map,
      position: latlng,
    });
    marker.setMap(map);
  }

  renderMap() {
    
  }

  componentDidMount() {
    let mapOptions = { center: { lat: 40.745155, lng: -73.994102}, zoom: 17};
    let latlng;
    const address = this.props.address;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: address}, function(results, status) {
      if ( status === google.maps.GeocoderStatus.OK) {
        latlng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }
        mapOptions = {
          center: latlng,
          zoom: 17
        };
      }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.createMarker(latlng, this.map);
    }.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      let mapOptions = { center: { lat: 40.745155, lng: -73.994102}, zoom: 17};
      let latlng;
      const address = this.props.address;
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: address}, function(results, status) {
        if ( status === google.maps.GeocoderStatus.OK) {
          latlng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }
          mapOptions = {
            center: latlng,
            zoom: 17
          };
        }
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.createMarker(latlng, this.map);
      }.bind(this));
    }
  }
  render() {
    return(
      <div className="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default RestaurantMap;
