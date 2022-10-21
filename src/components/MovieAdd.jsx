import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';


const MovieAdd = ({addMovie}) => {
  const[title,setTitle]=useState("");
  const [image,setImage]=useState("");
  const[description,setDescription]=useState("");
  const[year,setYear]=useState("");
  const[rating,setRating]=useState(0);
console.log(rating)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control type="text" placeholder="URL Image" onChange={(e)=>setImage(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control type="text" placeholder="Movie Description" onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control type="number" placeholder="rating"  onChange={(e)=>setRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" placeholder="Year" onChange={(e)=>setYear(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie({title,image,description,year,rating:Number(rating),id:Math.random()});handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieAdd;
