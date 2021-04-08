import React from 'react'
import { Avatar, Box, Container, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab"

const AirlineHeader = ({ attributes, reviews}) => {
    const {name, image_url, avg_score} = attributes
    const total  = reviews.length

    console.log(reviews)
    return (
<Container>
    <Avatar src={image_url} sizes="lg" alt={name}/>
    <Typography variant="h1" component="h1">
        {name}
    </Typography>
    <Typography component="p">{total} User Reviews</Typography>
    <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="airline-average-score"
            value={avg_score}
          />
        </Box>
</Container>
    )
}

export default AirlineHeader
