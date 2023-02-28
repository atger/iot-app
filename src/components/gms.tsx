import React, { useEffect, useState } from 'react';
import { getLevel } from '../api/getLevel';

import { Container, Stack, Nav, Navbar, Table } from 'react-bootstrap';

function GMSTable() {
  const [level, setLevel] = useState(0);
  const rows = [1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]
  const retrieveLevelData = async () => {
    const res = await getLevel();
    setLevel(res);
  }
  useEffect(() => {
    const interval = setInterval(() => retrieveLevelData(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
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
                <td>GITAM, ECE Department, Room No. 134</td>
                <td>{ level }</td>
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
  );
}

export default GMSTable;
