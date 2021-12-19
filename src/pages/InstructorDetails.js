import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const InstructorDetails = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { login } = useParams();
  const baseUrl = "https://api.github.com/users/" + login;

  const { avatar_url, html_url, company, location } = user;

  useEffect(() => {
    getUser();
  }, [baseUrl]);

  const getUser = async () => {
    const data = await axios.get(baseUrl);
    console.log(data.data);
    setUser(data.data);
  };
  return (
    <Container className="text-center">
      <h1>Name : {login}</h1>
      <img src={avatar_url} alt="" width="400px" />
      <h2>{company}</h2>
      <h3>{html_url}</h3>
      <h4>{location}</h4>
      <button className="bg-success" onClick={() => navigate("/instructor")}>
        Back to Instructor
      </button>
    </Container>
  );
};

export default InstructorDetails;
