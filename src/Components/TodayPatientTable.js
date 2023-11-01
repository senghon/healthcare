import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TodayPatientTable  ()  {
    const todayPatient = useSelector((state) => state.Todaypatient.user);
    let navigate = useNavigate()
  
    if (!todayPatient) {
      return <p>Loading...</p>; // 데이터 로딩 중일 때 로딩 표시를 보여줍니다.
    }
  
    return (
      <div className='todaypatient'>
      <table>
        <thead>
        </thead>
        <tbody>
          {todayPatient.map((patient) => (
            <tr onClick={()=>{navigate(`/patient/${patient.ptid}/${patient.vsid}`)}} className='todaypatient_box'>
              <td>
                <div className='test-box'><p>검사중</p></div>
              </td> 
              <td>
                <div className='todaypatient_patientinfo'>
                <p><strong>{patient.ptname}{patient.hplrdt}{patient.ptid}</strong></p>
                <p><strong>성별:</strong> {patient.ptsxid}</p>
                <p><strong>품종:</strong> {patient.ptbrid}</p>
                <p><strong>보호자:</strong> {patient.ptclid}</p>
                <p><strong>담당 수의사:</strong> {patient.emname}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };