import React, { Component } from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

class Mapi extends Component {
  constructor() {
    super();
    this.state = {
      position: [3.4516, -76.5320],
      movingMarker: [3.4616, -76.5000],
      pos: []
    };
  }

  action = e => {
    this.setState({ movingMarker: [e.latlng.lat, e.latlng.lng] });
  }

  newPoint = () => {
    this.setState({ pos: [...this.state.pos, this.state.movingMarker] });
  }

  render() {

    const myicon = new L.Icon({
      iconUrl: require('./flag.png'),
      shadowUrl: '',
      iconAnchor: [10, 50],
      popupAnchor: [10, -50],
      iconSize: new L.Point(40, 50),
    });
    
    const allMarkers = this.state.pos.map((ele, i) => (
      <Marker position={ele} key={i}>
        <Popup>Marker: {i}<br></br>Lat: {ele[0]}<br></br>Lng: {ele[1]}</Popup>
      </Marker>)
    );

    return (
      <Map className="amapa" center={this.state.position} zoom={13} onClick={this.action}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={this.state.movingMarker} icon={myicon}>
          <Popup><button onClick={this.newPoint}>New Point</button></Popup>
        </Marker>
        {allMarkers}
      </Map>
    )
  }
}

export default Mapi;