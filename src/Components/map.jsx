import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      selectedPlace: {},
      activeMarker: {},

      stores: [
        {
          latitude: 48.263823,
          longitude: 2.721785,
          name: "Burger King A6 Nemours"
        },
        {
          latitude: 46.961882,
          longitude: 4.837244,
          name: "Burger King A6 Beaune"
        },
        {
          latitude: 46.135394,
          longitude: 4.767599,
          name: "Burger King A6 Lyon"
        }
      ]
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          name={store.name}
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => this.props.handleClick(store.name)}
        />
      );
    });
  };
  render() {
    return (
      <Map
        style={{ width: "50%", height: "100%" }}
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 48.263823, lng: 2.721785 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBsCQLs4BEql05-xPYJGa9zxvDhoTv0dE8"
})(MapContainer);
