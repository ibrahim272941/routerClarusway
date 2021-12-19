import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCard = ({ name, text, img, link }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }} className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button onClick={() => navigate(`/${link}`)} variant="danger">
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
