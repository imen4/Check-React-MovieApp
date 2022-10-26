import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


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
    <strong>Movie Description:</strong>
    <div>{state.detail.description}</div>
    <strong>Movie trailer:</strong>
    <a href={state.detail.trailerLink}>{state.detail.trailerLink}</a>
    </div>
    </div>
    );
};

export default MovieDetails;
