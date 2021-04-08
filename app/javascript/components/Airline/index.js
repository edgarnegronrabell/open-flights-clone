import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, FormControl } from "@material-ui/core";
import axios from "axios";

import AirlineHeader from "./Header";

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);

  console.log(airline);
  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((res) => {
        setAirline(res.data);
        setLoaded(!loaded);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container>
      <Grid container style={{ marginTop: "3rem" }}>
        <Grid item xs={11} md={4} lg={5}>
          {loaded &&
            <AirlineHeader attributes={airline.data.attributes} reviews={airline.included}/>
       }
        </Grid>
        <Grid item xs={11} md={4} lg={5}></Grid>
      </Grid>
    </Container>
  );
};

export default Airline;
