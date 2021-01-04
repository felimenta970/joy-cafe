import { MdLocationOn } from 'react-icons/md';

const LocationPin = ( { text }) => (
    <div className="pin">
        <MdLocationOn className="pin-icon"/>
        <p className="pin-text"> {text} </p>
    </div>
);

export default LocationPin;