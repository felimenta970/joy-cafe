// Imports React
import React from 'react';
import GoogleMapReact from 'google-map-react';

// Import do pin
import LocationPin from './LocationPin.js'

// Chamamos a chave
const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const Map = ({ location, zoomLevel }) => (
    // Div usado para conter o mapa
    <div className="google-map">

        {/* Chamamos o componente de mapa, que recebe a chave do Google Maps, o centro padrão e o zoom */}
        <GoogleMapReact
            bootstrapURLKeys = {{key: API_KEY}}
            defaultCenter = {location}
            defaultZoom = {zoomLevel}
        >
            
            {/* O pin, com seu texto, latitude e longitude */}
            <LocationPin
                lat = {location.lat}
                lng = {location.lng}
                text = {location.address}
            />
        </GoogleMapReact>
    </div>
);

export default Map;