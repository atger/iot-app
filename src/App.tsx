import React from 'react';
import gitm from './assets/gitm.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Stack, Carousel, Nav, Navbar, Table } from 'react-bootstrap';

function App() {
  const rows = [1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Garbage Monitoring System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Stats</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack gap={3}>
        <div>
          <img
            className="d-block w-100"
            src={gitm}
            alt="First slide"
          />
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Bin Id</th>
                <th>Bin Location</th>
                <th>Bin Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Location</td>
                <td>Level</td>
              </tr>
              {
              rows.map( row => (
                <tr>
                  <td>{row}</td>
                  <td>Location</td>
                  <td>Level</td>
                </tr>
              ))
              }
            </tbody>
          </Table>
        </div>
      </Stack>
    </div>
  );
}

export default App;
