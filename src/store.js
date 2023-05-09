import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import axios from "axios";

// let todaypatient = useQuery(['result'], () =>
//     axios.get('http://127.0.0.1:8000/api/today_patients')
//     .then((a)=>{
//       return a.data
//     }))

// 비동기적으로 서버에서 오늘 환자 데이터를 get 한다.
const fetchTodaypatient = createAsyncThunk(
    "todaypatient가져온다",
    async()=>{
        let response = await axios.get('http://127.0.0.1:8000/api/today_patients').then((a)=>{return a.data})
        return response
    }
)

// 오늘의 환자 데이터 state를 만든다.
let Todaypatient = createSlice({
    name : 'Todaypatient',
    initialState : [],
    extraReducers : (builder) =>{
        builder
        .addCase(fetchTodaypatient.fulfilled,(state,action) =>{
            return action.payload;})
        }
    }
)


export default configureStore({
    reducer:{
        Todaypatient : Todaypatient.reducer,
    }
})

export {fetchTodaypatient} 
