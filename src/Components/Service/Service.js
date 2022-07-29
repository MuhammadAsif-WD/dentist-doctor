import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { description, img, name, price } = service;
  const [seeMore, setSeeMore] = useState(false);
  const navigate = useNavigate(description);
  const navigateToServiceDetails = (description) => {
    navigate(`/service/${description}`);
  };
  return (
    <div className="p-10 ps-0">
      <Card
        style={{ width: "18rem", backgroundColor: "#444e66", color: "white" }}
      >
        <Card.Img
          className="m-3"
          variant="top"
          style={{ width: "50px", height: "50px", color: "white" }}
          src={img}
        />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Price: {price}</Card.Title>
          <Card.Text>
            {seeMore ? description : description.slice(0, 100)}
            <button onClick={() => setSeeMore(!seeMore)}>
              <span className="text-blue-500">see more..</span>
            </button>
          </Card.Text>
          <Button
            onClick={() => navigateToServiceDetails(description)}
            className="btn btn-primary"
            variant="top"
            src="holder.js/primary"
          >
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
