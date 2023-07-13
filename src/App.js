import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodaypatient } from './store';
import { Route,Routes,Link,useNavigate,Outlet } from 'react-router-dom';

const TodayPatientTable = () => {
  const todayPatient = useSelector((state) => state.Todaypatient.user);
  let navigate = useNavigate()

  if (!todayPatient) {
    return <p>Loading...</p>; // 데이터 로딩 중일 때 로딩 표시를 보여줍니다.
  }

  return (
    <div className='todaypatient'>
    <table> className='patient-table'
      <thead>
        <tr>
          <th>이름</th>
          <th>정보</th>
        </tr>
      </thead>
      <tbody>
        {todayPatient.map((patient) => (
          <tr key={patient.ptid} onClick={()=>{navigate(`${patient.ptid}/${patient.vsid}`)}}>
            <td>{patient.ptname}</td>
            <td>
              <p><strong>일자:</strong> {patient.hplrdt}</p>
              <p><strong>성별:</strong> {patient.ptsxid}</p>
              <p><strong>품종:</strong> {patient.ptbrid}</p>
              <p><strong>보호자:</strong> {patient.ptclid}</p>
              <p><strong>담당 수의사:</strong> {patient.emname}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

const PastRecordsTable = () => {
  return (
    <div className='pastrecords'>
    <table className='past-records-table'>
      <thead>
        <tr>
          <th>일자</th>
          <th>이름</th>
          <th>정보</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>sasdf</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>asdf</td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const todayPatient = useSelector((state) => state.Todaypatient.user);

  useEffect(() => {
    dispatch(getTodaypatient()); // getTodaypatient thunk를 dispatch하여 데이터를 가져온다.
  }, []);

  return (
    <div className="App">
      <div className='navigationbar'> 
      <Navigation  />
      </div>
      <div>
      <Container className='containerbox'>
        <Row>
          <Col md={6}>
            <div className='section-title'>
              <p>오늘의 환자</p>
            </div>
            <TodayPatientTable />
          </Col>
          <Col md={6}>
            <div className='section-title'>
              <p>지난 기록</p>
            </div>
            <PastRecordsTable />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default App;
