import { Container, Row, Col, Table, Badge, ListGroup } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


function App() {
  let todaypatient = useQuery(['result'], () =>
    axios.get('http://127.0.0.1:8000/api/today_patients')
    .then((a)=>{
      return a.data
    }))

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>info</th>
                </tr>
              </thead>
              <tbody>
                {/* 동기처리 */}
                {todaypatient.data && todaypatient.data.map(function(patient){
                  return(
                    <tr>
                      <td>{patient.ptname}</td>
                      <td>
                        <p>일자 : {patient.hplrdt}</p>
                        <p>성별 : {patient.ptsxid}</p>
                        <p>품종 : {patient.ptbrid[0]}</p>
                        <p>보호자 : {patient.ptclid}</p>
                        <p>담당 수의사 :{patient.emname}</p>
                      </td>
                    </tr>
                  )
                }
                  
                )}
              
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
