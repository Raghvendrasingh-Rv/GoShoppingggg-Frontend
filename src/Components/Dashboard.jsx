import React, { useEffect, useState } from "react";
import { getCurrentUser, logout } from "./Auth";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(getCurrentUser());
    setUser(getCurrentUser());
  }, []);

  const logoutClick = () => {
    console.log("logout");
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <Button onClick={()=>logoutClick()}>Log out</Button>
    </div>
  );
}

export default Dashboard;
