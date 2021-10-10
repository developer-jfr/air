import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';

import Rating from '@mui/material/Rating';


import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <span>{place.icao}</span>
        <br />
        <span>{place.iata}</span>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
