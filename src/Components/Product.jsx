import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Container,
  Button,
} from "reactstrap";

function Product() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="m-3">
          <img
                style={{
                  width: "200px",
                  height: "150px",
                  alignItems: "center",
                  backgroundColor: "red",
                }}
                src="data:image/jpeg;base64,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"
                alt="imagea"
                className="m-2"
              />
            <CardBody>
              <h5>Product name</h5>
              <span>1</span>
              <CardText>Category Name:1</CardText>
              <CardText>
                <span>
                  price:{" "}
                  <del
                    style={{
                      fontSize: "16px",
                      marginLeft: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    200
                  </del>
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    marginLeft: "3px",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {"₹"}
                </span>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  150
                </span>
              </CardText>
              <Container style={{ display: "flex", textAlign: "center" }}>
                <Button color="info" size="sm" className="m-2">
                  View
                </Button>
                <Button color="primary" size="sm" className="m-2">
                  Buy
                </Button>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
