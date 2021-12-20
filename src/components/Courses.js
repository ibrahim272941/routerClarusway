import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  return (
    <div className="text-center mt-4 ">
      <h1>Sehenwürdichkeits</h1>

      <Container className="mb-3 d-flex justify-content-center">
        <Row className="text-center">
          {data.map((e, i) => {
            return (
              <Col
                key={i}
                className="mb-3 d-flex justify-content-center"
                xs={12}
                md={6}
                lg={4}
              >
                <MyCard {...e} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
