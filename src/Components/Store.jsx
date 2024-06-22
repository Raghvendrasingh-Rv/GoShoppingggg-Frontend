import React from "react";
import Sidebar from "./Sidebar";
import './Store.css'
import Product from "./Product";
import { Col, Row } from "reactstrap";

function Store() {
  return (
    <>
    <div className="store">
      <Sidebar/>
      <div className="storeContainer">
        <Row md={3}>
          {
            [1,1,1,1,1,1].map((index,product)=>(
              <Col>
              <Product key={index}/>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
    <div className="footer">Footer</div>
    </>
  );
}

export default Store;
