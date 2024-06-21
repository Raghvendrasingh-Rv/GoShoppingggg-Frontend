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
import { createUser } from "./UserService";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    about: "",
    address: "",
  });

  const onFieldChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  const onFieldSubmit = (event) => {
    event.preventDefault();
    if (user.name.trim() === "") {
      alert("Name is required");
    }
    if (user.email.trim() === "") {
      alert("Name is required");
    }
    if (user.password.trim() === "") {
      alert("Name is required");
    }
    if (user.phone.trim() === ""||user.phone.trim()<1000000000) {
      alert("Name is required");
    }
    if (user.address.trim() === "") {
      alert("Name is required");
    }
    if (user.gender.trim() === "") {
      alert("Name is required");
    }
    if (user.about.trim() === "") {
      alert("Name is required");
    }

    createUser(user).then(data=>{
      alert("sign up done");
      console.log(data);
      navigate("/login")
    }).catch(e=>{
      alert("error");
      console.log(e);
    })

  };

  // const onFieldReset = ()=>{
  //   useState({name:'',email:'',password:'',phone:'',gender:'',about:'',address:''});
  // }

  return (
    <Container style={{ marginBottom: 50 }}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card className="text-center shadow-sm mt-5 lg" color="light">
            <CardHeader>
              <h3>Sign Up</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={onFieldSubmit}>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="name">Name</Label><b><Label style={{color:'red'}}>*</Label></b>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    required
                    id="name"
                    value={user.name}
                    onChange={(event) => onFieldChange(event, "name")}
                  ></Input>
                  {user.name?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    required
                    id="email"
                    value={user.email}
                    onChange={(event) => onFieldChange(event, "email")}
                  ></Input>
                  {user.email?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="password">Password</Label>
                  <Input
                    type="text"
                    placeholder="Enter your password"
                    required
                    id="password"
                    value={user.password}
                    onChange={(event) => onFieldChange(event, "password")}
                  ></Input>
                  {user.password?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="phone">Mobile Number</Label>
                  <Input
                    type="number"
                    placeholder="Enter your mobile number"
                    required
                    id="phone"
                    value={user.phone}
                    onChange={(event) => onFieldChange(event, "phone")}
                  ></Input>
                  {user.phone?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="gender">Gender</Label>
                  <Input
                    type="select"
                    id="gender"
                    value={user.gender}
                    onChange={(event) => onFieldChange(event, "gender")}
                  >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Input>
                  {user.gender?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="password">Address</Label>
                  <Input
                    type="textarea"
                    placeholder="Enter your address"
                    required
                    id="address"
                    value={user.address}
                    onChange={(event) => onFieldChange(event, "address")}
                  ></Input>
                  {user.address?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                  <Label for="about">About</Label>
                  <Input
                    type="textarea"
                    placeholder="Enter your about"
                    required
                    id="about"
                    value={user.about}
                    onChange={(event) => onFieldChange(event, "about")}
                  ></Input>
                  {user.about?"":<span style={{color:'red',marginLeft:'10px', marginTop:'0px'}}>Name is required</span>}
                </FormGroup>
                <CardFooter>
                  <Button>Submit</Button>
                  <Button>Reset</Button>
                </CardFooter>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
