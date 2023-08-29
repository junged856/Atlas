import React from 'react'
import useStyles from './styles'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const defaultProps = {
    center: {
      lat: 35.7101033,
      lng: 139.7952885
    },
    zoom: 20
  };

  return (
    <>
      <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{key: 'AIzaSyBKlTIRa06tO_lXSCt4N0IiT4ubn1N-ICE'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            console.log(e);
            setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
          }}
        >
        </GoogleMapReact>
      </div>
  </>
  );
}

export default Map