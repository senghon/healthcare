import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPatientinfo } from './store';

const Patient = () => {
  const { ptid } = useParams(); // URL에서 ptid 매개변수를 가져옵니다.
  const dispatch = useDispatch();
  const patientInfo = useSelector((state) => state.PatientInfo);

  useEffect(() => {
    dispatch(getPatientinfo(ptid)); // ptid를 매개변수로 getPatientinfo 액션을 dispatch합니다.
  }, [dispatch, ptid]);

  if (patientInfo.loading === 'pending') {
    return <p>Loading...</p>;
  }

  if (patientInfo.error) {
    return <p>Error: {patientInfo.error}</p>;
  }

  if (!patientInfo.data) {
    return null;
  }

  const { patientName, age, gender, address } = patientInfo.data;

  return (
    <div>
      <h1>환자 정보</h1>
      <p>이름: {patientName}</p>
      <p>나이: {age}</p>
      <p>성별: {gender}</p>
      <p>주소: {address}</p>
    </div>
  );
};

export default Patient;
