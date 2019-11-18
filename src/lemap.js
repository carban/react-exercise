import React, { Component } from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class Mapi extends Component{
    constructor(){
        super();
        this.state = {position: [51.505, -0.09], position2: [51.505, -0.11]};
    }
    render(){
        return(
            <Map className="amapa" center={this.state.position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={this.state.position}>
              <Popup>Custom Message!!.<br />Easily customizable.</Popup>
            </Marker>
            <Marker position={this.state.position2}>
              <Popup>Grimes.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
        )
    }
}

export default Mapi;