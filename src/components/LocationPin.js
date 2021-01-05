import { MdLocationOn } from 'react-icons/md';

const LocationPin = ( { text }) => (
    // Div para conter o pin
    <div className="pin">

        {/* Ícone do pin */}
        <MdLocationOn className="pin-icon" />
        <p className="pin-text"> {text} </p>
    </div>
);

export default LocationPin;