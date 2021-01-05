import React from 'react';
import GoogleMapReact from 'google-map-react';

import LocationPin from './LocationPin.js'

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const Map = ({ location, zoomLevel }) => (
    <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys = {{key: API_KEY}}
            defaultCenter = {location}
            defaultZoom = {zoomLevel}
        >
            <LocationPin
                lat = {location.lat}
                lng = {location.lng}
                text = {location.address}
            />
        </GoogleMapReact>
    </div>
);

export default Map;