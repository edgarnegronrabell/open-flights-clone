import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, List } from "@material-ui/core";

import AirlineItem from "./AirlineItem";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get all of our airlines from api
    axios
      .get("/api/v1/airlines.json")
      .then((res) => {
        setAirlines(res.data.data);
      })
      .catch((e) => console.error(e));
    // Update airlines in our state
  }, [airlines.length]);

  return (
    <Paper
      style={{
        backgroundColor: "#fafafa",
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
      elevation={0}
    >
      <Grid container justify="center" style={{ paddingTop: "5rem" }}>
        <Grid item xs={11} md={8} lg={6}>
          <List style={{
              display: "flex",
              flexWrap: "wrap"
          }}>
            {airlines
              ? airlines.map((airline) => {
                  return (
                    <AirlineItem
                      key={airline.id}
                      airline={airline}
                    />
                  );
                })
              : null}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Airlines;
