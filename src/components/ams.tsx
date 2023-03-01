import React, { useEffect, useState }from 'react';
import { Table } from 'react-bootstrap';
import { getAttendanceData } from '../api/getAttendanceData';

function AMSTable() {
  const [data, setData] = useState([]);
  const retrieveAttendanceData = async () => {
    const res = await getAttendanceData();
    setData(res);
  }
  useEffect(() => {
    const interval = setInterval(() => retrieveAttendanceData(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(data)
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
              {
               data.map(d => (
                 <tr>
                   <td>{d["name"]}</td>
                   <td>{d["date"]}</td>
                   <td>{d["time"]}</td>
                 </tr>
               ))
              }
            </tbody>
          </Table>
  );
}

export default AMSTable;
