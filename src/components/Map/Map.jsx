import React from 'react'
import useStyles from './styles'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = {lat: 0, long: 0 };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{key: 'AIzaSyBKlTIRa06tO_lXSCt4N0IiT4ubn1N-ICE'}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
  </>
  );
}

export default Map