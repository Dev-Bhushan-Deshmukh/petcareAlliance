import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    loading:true,
    error:null
}
const activitySlice=createSlice({
name:'activities',
initialState,
reducers:{
    addActivity(state,action){
        state.value.push(action.payload);
    }
}


})

const {actions,reducer}=activitySlice;
export const{addActivity}=actions;
export default reducer;