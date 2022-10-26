import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movieDetails/${movie.id}`} state={{ detail: movie }}>
      <Card sx={{ maxWidth: 345, margin: "40px" }}>
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
          <Typography variant="body3" color="text.secondary">
            {movie.year}
          </Typography>
        </CardContent>
        <Rating name="read-only" value={movie.rating} readOnly />
      </Card>
    </Link>
  );
}
export default MovieCard;
