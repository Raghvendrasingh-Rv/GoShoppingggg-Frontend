import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { toast } from "react-toastify";
import { loginUser } from "./UserService";
import {login} from "./Auth/index.js"
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onFieldChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  const onFieldSubmit = (event) => {
    event.preventDefault();

    if (user.username.trim() === "" && user.password.trim() === "") {
      toast.error("credentials missing!");
      return;
    }

    loginUser(user)
      .then((data) => {
        if(data==="Invalid Username and Password!"){
          toast.error("Please enter valid credentials!")
          return;
        }
        login(data,()=>{
          navigate("/dashboard");
        });
        toast.success("Log in successfully!");
        console.log(data);
      })
      .catch((e) => {
        toast.error("Log in error");
        console.log(e);
      });
  };

  return (
    <Container style={{ marginBottom: 50 }}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card className="text-center shadow-sm mt-5 lg" color="light">
            <CardHeader>
              <h3>Log In</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={onFieldSubmit}>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label id="name" for="username">
                    Username
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    value={user.username}
                    placeholder="Enter you email"
                    onChange={(event) => onFieldChange(event, "username")}
                  ></Input>
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label id="password" for="password">
                    Username
                  </Label>
                  <Input
                    type="text"
                    id="password"
                    value={user.password}
                    placeholder="Enter you password"
                    onChange={(event) => onFieldChange(event, "password")}
                  ></Input>
                </FormGroup>
                <CardFooter>
                  <Button style={{ backgroundColor: "green" }}>Log in</Button>
                </CardFooter>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LogIn;
