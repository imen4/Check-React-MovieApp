import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MovieTailer from "./MovieTailer";


const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  console.log("*params", params);
  console.log("history",state);
  const navigate = useNavigate();
  return (
    <div style={{margin:"0 20px"}}>
       <Button variant="primary" onClick={()=>navigate("/")} style={{margin:"20px 0"}}>
       Navigate to Home
      </Button>
    <div>
    <div>
    <div style={{fontWeight: "bold"}}>Movie trailer:</div>
    <MovieTailer embedId={state.detail.trailerLink} />
    </div>
    <div style={{fontWeight:"bold"}}>Movie Description:</div>
    <div>{state.detail.description}</div>
    </div>
    </div>
    );
};

export default MovieDetails;
