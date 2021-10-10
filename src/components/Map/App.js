import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';
import {useSelector} from 'react-redux';
import { getPlacesData, getWeatherData } from '../../api/travelAdvisorAPI';
import Header from './../Navbar/index';
import List from './List/List';
import Map from './Map/Map';
import {mapAPI} from './../../api/api'

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
const air = useSelector(state => state.map.searchMap)
console.log(air)

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
 

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCoords({lan: air[0]?.location.lat, lng: air[0]?.location.lon})
  }, [air]);



 


  const feching = () => {
  
  }


  return (
    <>
      <CssBaseline />
      <Header  />
      
      <Grid container spacing={3} style={{ width: '100%' , paddingTop: '100px'}}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={air}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={air}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <button onClick={() => feching()}>click</button>
    </>
  );
};

export default App;
