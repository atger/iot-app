import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import gitm from '../assets/gitm.png';

const Home = () => {
  return (
    <div>
      <Stack gap={5}>
        <div>
          <img
            className="d-block w-100"
            src={gitm}
            alt="First slide"
          />
        </div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h3>Welcome To Device Monitoring Page</h3>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}

export default Home;
