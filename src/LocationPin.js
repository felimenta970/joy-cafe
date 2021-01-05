import { MdLocationOn } from 'react-icons/md';

// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ( { text }) => (
    <div className="pin">
        <MdLocationOn className="pin-icon" />
        <p className="pin-text"> {text} </p>
    </div>
);

export default LocationPin;