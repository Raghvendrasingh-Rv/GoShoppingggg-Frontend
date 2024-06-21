import React, { useEffect, useState } from "react";
import { checkLogin, getCurrentUser, logout } from "./Auth";
import { Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

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
      {
        (checkLogin())?
        <div>
          <h1>{user.name}</h1>
        <Button onClick={()=>logoutClick()}>Log out</Button>
        </div>
        : <Navigate to="/login"/>
      }
    </div>
  );
}

export default Dashboard;
