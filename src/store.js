import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import axios from "axios";

//오늘의 환자 목록 로딩
export const getTodaypatient = createAsyncThunk(
  "get/todaypatient",
  async () => {
    let res = await axios.get("http://localhost:8000/request_today_patient/20211113").then(a => a.data);
    return res;
  }
);

//각 환자 정보 로딩
export const getPatientinfo = createAsyncThunk(
    'get/patientinfo',
    async (patientid,vsid)=> {
        let res = await axios.get(`http://localhost:8000/${patientid}/${vsid}`)
    }
)

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

const store = configureStore({
  reducer: {
    Todaypatient: TodaypatientSlice.reducer,
  },
});

export default store;