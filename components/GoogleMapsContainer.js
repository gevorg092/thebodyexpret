import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import googleMapStyles from './GoogleMapData.json';
// import googleMapIcon from '../public/assets/images/image2.svg';

const containerStyle = {
    width: '100%',
    height: '50vw',
}

const useStyles = {
    '@media (max-width: 1920px)': {
        display: 'block',
    },
    '@media (max-width: 1440px)': {
        display: 'block',
    },
    '@media (max-width: 768px)': {
        display: 'none',
    },
}

const center = {
    lat: 36.7166638,
    lng: -4.416665,
}

const googleMapIcon = '/assets/images/marker.png';

export default function GoogleMaps(){
    return (
        <div className={useStyles}>
            <LoadScript googleMapsApiKey='AIzaSyCrqp_iYoLmO8ZVhAk6zKe8Ew5fDCYnPAU'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={{
                        fullscreenControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        styles: googleMapStyles,
                    }}
                >
                    <Marker
                        position={center}
                        icon={googleMapIcon}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}