import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import axios from "axios";



// 추천 더미 20201006
//오늘의 환자 목록 로딩
export const getTodaypatient = createAsyncThunk(
  "get/todaypatient",
  async (date) => {
    date = 20221006
    let res = await axios.get(`http://localhost:8000/request_today_patient/${date}`).then(a => a.data);
    console.log('오늘의 환자-server')
    return res;
  }
);

//각 환자 정보 로딩
export const getPatientinfo = createAsyncThunk(
    'get/patientinfo',
    async ({patient_id,vsid})=> {
        console.log('개별환자 서버 접근')
        let res = await axios.get(`http://localhost:8000/patient/${patient_id}/${vsid}`).then(a=>a.data);
        console.log('개별환자')
        return res;
      }
)


//오늘의 환자정보 슬라이스
const TodaypatientSlice = createSlice({
  name: "Todaypatient",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getTodaypatient.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getTodaypatient.fulfilled, (state, action) => {
      state.loading = "suceed";
      state.user = action.payload;
    });
  },
});

//각 환자 정보 슬라이스
const SelectpatientSlice = createSlice({
  name: "Selectpatient",
  initialState: {
    laoding: "idle",
    user:null
  },
  extraReducers: (builder) => {
    builder.addCase(getPatientinfo.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getPatientinfo.fulfilled, (state, action) => {
      state.loading = "suceed";
      state.user = action.payload;
    });
  },
});

const store = configureStore({
  reducer: {
    Todaypatient: TodaypatientSlice.reducer,
    Selectpatient : SelectpatientSlice.reducer
  },
});

export default store;