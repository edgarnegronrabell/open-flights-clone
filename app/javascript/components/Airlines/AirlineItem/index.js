import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const AirlineItem = ({ airline }) => {
  return (
    <Card style={{ margin: "2rem", padding: "2rem" }}>
      <CardContent>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Avatar
            src={airline.attributes.image_url}
            alt={airline.attributes.name}
          />
          <Typography variant="h5" component="h2">
            {airline.attributes.name}
          </Typography>
        </Container>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="airline-average-score"
            value={airline.attributes.avg_score}
          />
        </Box>
        <Link
          to={`/airlines/${airline.attributes.slug}`}
          style={{
            backgroundColor: "#83C3A5",
            borderRadius: "5px",
            color: "white",
            maxWidth: "50%",
            padding: "1rem 2rem",
            textDecoration: "none"
          }}
        >{`${airline.attributes.name}'s Homepage`}</Link>
      </CardContent>
    </Card>
  );
};

export default AirlineItem;
