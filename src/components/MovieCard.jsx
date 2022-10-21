import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function MovieCard({movie}) {
  return (
    <Card sx={{ maxWidth: 345, margin:"40px" }}>
      <CardMedia
        component="img"
        height="270"
        image={movie.image}
        alt="Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {movie.year}
        </Typography>
      </CardContent>
      <Rating name="read-only" value={movie.rating} readOnly />
    </Card>
  );
}
export default MovieCard
