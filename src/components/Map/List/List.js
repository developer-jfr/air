import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { Tabs } from "antd";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  console.log(places);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Aiports</Typography>
      
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Amenities" key="1">
        <Grid container spacing={3} className={classes.list}>
            {places.length === 1 ? (
            places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))
            ) : ''} 
          </Grid>
        </TabPane>
        <TabPane tab="Nearby" key="2">
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default List;


