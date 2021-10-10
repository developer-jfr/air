import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const center =  {lat: 59.95, lng: 30.33}
  console.log(coords)


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBoq4qT-mCxXcn5Mx77PAYVWXriJrVEY9A' }}
        defaultCenter={center}
        center={coords}
        defaultZoom={20}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length && places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            
            lat={Number(place.location.lat)}
            lng={Number(place.location.lon)}
            key={i}
          >
            {!matches
              ? <h1>hi</h1>
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}  </Typography>
                  
                </Paper>
              )}
          </div>
        ))}
       
      </GoogleMapReact>
    </div>
  );
};

export default Map;
