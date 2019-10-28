import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon } from 'google-maps-react';
import person from './personlogo.png';
import scooter from './scooterlogo.jpg';

class MapComponent extends Component { 
    constructor(props){
        super(props)
        this.state = {
            bird: null, 
            open: false
        }
    }

    componentDidMount() {
        this.getCoordinatesBird()
    }


    getCoordinatesBird =  () => {
        return fetch('./bird.json')
            .then(response => response.json())
            .then(bird => this.setState({ bird }))
    }

    displayScooterMarkers = () => {
        if(this.state.bird){
        return this.state.bird.birds.map((data, index) => {
            const coordinates = data.location;
            return (
                <Marker color="blue" key={index} id={index} position={{
                    lat: coordinates.latitude,
                    lng: coordinates.longitude
                }}
                    icon={scooter}
                    onClick={() => alert(`Battery Level: ${data.battery_level}`)} />
                )
        })
    }
}

    displayStationMarkers = () => {
        const triangleCoords = [
            { lat: 39.742043, lng: -104.991531 },
            { lat: 39.7537437, lng: -105.0015201 },
            { lat: 39.7474087, lng: -104.9904479 },
            { lat: 39.7494172, lng: -105.0108668 },
            { lat: 39.7536709, lng: -105.0155331 },
            { lat: 39.7576196, lng: -105.0069694 }
        ];
        return triangleCoords.map((data, index) => {
            return (
                <Marker key={index} id={index} position={{
                    lat: data.lat,
                    lng: data.lng
                }}
                    onClick={() => alert(`Battery Level: ${data.battery_level}`)} />
            )
        })
    }
    

    open = () => {
        this.setState({ open: true })
    }

    close = () => {
        this.setState({ open: false })
    }

    render() {

        

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 39.742043, lng: -104.991531 }}
            >
                <Marker 
                     icon={person}
                     onClick={this.open} position={{ lat: 39.7577897, lng: -105.0093545 }} 
                     />
                    {this.displayScooterMarkers()} 
                    {this.displayStationMarkers()}
                
            </Map>
        );
    }


}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAeOOioXCI_NG5xrbnOhuQu-iCfmPjHF70'
})(MapComponent);

const mapStyles = {
    width: '100%',
    height: '100%',
};

