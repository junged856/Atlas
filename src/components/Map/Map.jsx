import React from 'react'
import useStyles from './styles'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { LocationOnOutlined } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  // dummy vals
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
          {places?.map((place, i) => (
            <div 
              className={classes.markerContainer} 
              lat={Number(place.latitude)} 
              lng={Number(place.longitude)} 
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlined color="primary" fontSize="large" /> 
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
              <Typography>{place.name}</Typography>
            </div>
          ))}
        </GoogleMapReact>
      </div>
  </>
  );
}

export default Map