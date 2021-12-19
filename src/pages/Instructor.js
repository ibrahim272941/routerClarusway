import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://api.github.com/users";
const Instructor = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await axios.get(baseUrl);
    console.log(data.data);
    setUser(data.data);
  };
  return (
    <div className="text-center">
      <h1>Instructor</h1>
      {user.map((e, i) => {
        const { id, login, avatar_url } = e;
        return (
          <div key={i}>
            <h3>{login}</h3>
            <img
              src={avatar_url}
              width="400px"
              onClick={() => navigate(`/instructor/${e.login}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Instructor;
