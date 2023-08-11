import React from 'react'
import useStyles from './styles'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = {lat: 0, long: 0 };

  return (
    <>
      <div style={{height: '500px', width: '500px'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{key: 'AIzaSyBKlTIRa06tO_lXSCt4N0IiT4ubn1N-ICE'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
        </GoogleMapReact>
    </div>
    <div>
      <h1>hi</h1>
    </div>
  </>


    
  )
}

export default Map