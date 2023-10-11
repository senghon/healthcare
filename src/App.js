import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodaypatient,getPatientinfo } from './store';
import { Route,Routes,Link,useNavigate,Outlet,useParams } from 'react-router-dom';


const TodayPatientTable = () => {
  const todayPatient = useSelector((state) => state.Todaypatient.user);
  let navigate = useNavigate()

  if (!todayPatient) {
    return <p>Loading...</p>; // 데이터 로딩 중일 때 로딩 표시를 보여줍니다.
  }

  return (
    <div className='todaypatient'>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>정보</th>
        </tr>
      </thead>
      <tbody>
        {todayPatient.map((patient) => (
          <tr >
            <td><p onClick={()=>{navigate(`/patient/${patient.ptid}/${patient.vsid}`)}}>{patient.ptname}</p></td>
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

//선택한 환자 페이지 로딩
const Selectpatient = () => {
  const {patient_id,vsid} = useParams();
  const dispatch = useDispatch();
  const selectpatient = useSelector((state) => {console.log(state.Selectpatient.user) 
    return state.Selectpatient.user});
  
  useEffect(()=>{
    dispatch(getPatientinfo({patient_id,vsid}))},
  [patient_id,vsid])

  let navigate = useNavigate()

  if (!selectpatient) {
    return <p>Loading...</p>; // 데이터 로딩 중일 때 로딩 표시를 보여줍니다.
  }

  return (
    <div>
    <p>subject</p>
    <p>{selectpatient.subject}</p>
    <p>{selectpatient.bloodtest.map((blood)=>(
      <tr>
        <td>{blood.name}</td>
        <td>{blood.result}</td>
      </tr>
    ))}</p>
    </div>
  );
};


const App = () => {
  const dispatch = useDispatch();
  const todayPatient = useSelector((state) => state.Todaypatient.user);
  const selectPatient = useSelector((state) => state.Selectpatient.user);

  useEffect(() => {
    dispatch(getTodaypatient()); // getTodaypatient thunk를 dispatch하여 데이터를 가져온다.
  }, []);

  return (
    <div className="App">
      <div className='navigationbar'> 
      <Navigation  />
      </div>
      <Routes>
        <Route path = '/' element={
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
        }></Route>
        <Route path = '/patient/:patient_id/:vsid' element={<Selectpatient />} ></Route>
      </Routes>
    </div>
  );
};

export default App;
