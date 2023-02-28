import React, { useEffect, useState } from 'react';
import { getLevel } from '../api/getLevel';

import { Container, Stack, Nav, Navbar, Table } from 'react-bootstrap';

function AMSTable() {
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
                <th>Employee Id</th>
                <th>Login Date</th>
                <th>Login In Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vijay</td>
                <td>28/02/2023</td>
                <td>8:57</td>
              </tr>
              {
              }
            </tbody>
          </Table>
  );
}

export default AMSTable;
