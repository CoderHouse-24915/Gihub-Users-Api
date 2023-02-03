import React, { useState, useEffect } from "react";
import "./CardListComponent.css";

import CardComponent from "../CardComponent/CardComponent";

const CardListComponent = () => {
  const [users, setUsers] = useState([]);

  // console.log("users", users);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => {
        return <CardComponent users={user} key={user.id} />;
      })}
    </div>
  );
};

export default CardListComponent;
