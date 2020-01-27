import React, { Component } from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer, LayersControl, FeatureGroup, Circle, LayerGroup } from 'react-leaflet';
import L from 'leaflet';

class Mapi extends Component {
  constructor() {
    super();
    this.state = {
      position: [3.4516, -76.5320],
      movingMarker: [3.4616, -76.5000],
      pos: [],
      block: true
    };
  }

  action = e => {
    this.setState({ movingMarker: [e.latlng.lat, e.latlng.lng] });
  }

  newPoint = () => {
    // console.log(LayersControl.Overlay.allthemarkers);
    this.setState({ pos: [...this.state.pos, this.state.movingMarker] });
  }

  blockMarkers = e => {
    if (e.name === "All markers"){ this.setState({ block: !this.state.block }); }
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

    const newMaker = this.state.block ? <button onClick={this.newPoint}>New Point</button> : <p>Check layer</p>;

    return (
      <Map className="amapa" center={this.state.position} zoom={13} onClick={this.action} onoverlayadd={this.blockMarkers} onoverlayremove={this.blockMarkers}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Mapnik" checked="true">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Transport">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          {/* End Layers */}


          <LayersControl.Overlay name="All markers" checked="true" onClick={this.blockMarkers}>
            <LayerGroup>
              {allMarkers}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup color="red">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[3.4316, -76.5520]} radius={2000} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
        {/* Esto sirve si no se utilizan LayersControl.BaseLayer */}
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        /> */}
        <Marker position={this.state.movingMarker} icon={myicon}>
          <Popup>{newMaker}</Popup>
        </Marker>

      </Map>
    )
  }
}

export default Mapi;