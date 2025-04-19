import { createSlice } from "@reduxjs/toolkit";



const initialState=[];


const notificationSlice=createSlice({
    name:"notification",
    initialState,

reducers:{

newNotification(state,action){

    state.unshift(action.payload);
},
expireNotification(state){

    state.pop();
}






}




});

 const {actions,reducer}=notificationSlice;
export const {newNotification,expireNotification}=actions;
export default reducer;