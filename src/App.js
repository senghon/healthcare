import { Container, Row, Col, Table, Badge, ListGroup } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodaypatient } from './store.js';
import { Link, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  let Todaypatient = useSelector((state) => state.Todaypatient)
  // let todaypatient = useQuery(['result'], () =>
  //   axios.get('http://127.0.0.1:8000/api/today_patients')
  //   .then((a)=>{
  //     return a.data
  //   }))
  // let result
  // let Todaypatient

  //오늘의 환자 data를 불러오는 Mount 트리거(새로고침).
  useEffect(() => {
    dispatch(fetchTodaypatient())
  }, [dispatch])

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row>
          <Col>
            <div className='todaytitle'>
              <p>Today</p>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>info</th>
                </tr>
              </thead>
              <tbody>
     
                  {Todaypatient.map(function (patient) {
                    return (
                      <tr>
                        <td>{patient.ptname}</td>
                        <td>{patient.ptid}</td>
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
                  )
                  }
                
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
