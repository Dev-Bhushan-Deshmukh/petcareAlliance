import { createSlice } from "@reduxjs/toolkit";

let initialState=[]

const invoiceSlice=createSlice({
    name:"invoice",

initialState,
reducers:{

addNew(state,action){
console.log('add')
// action.payload.quantity +=1;
// console.log({...action.payload})
let newEntry={...action.payload}
newEntry.quantity +=1;
newEntry.total=newEntry.price;
state.push(newEntry);

},
increaseQuantity(state,action){


state[state.findIndex((item)=>item.id==action.payload)].quantity +=1;

state[state.findIndex((item)=>item.id==action.payload)].total +=state[state.findIndex((item)=>item.id==action.payload)].price;
// temp[temp.findIndex(((item)=>item.id===action.payload))].quantity +=1;
//   state=temp;
    
    },
    decreaseQuantity(state,action){

        if(state[state.findIndex((item)=>item.id==action.payload)].quantity==1 ){

state.splice(state.findIndex((item)=>item.id==action.payload),1);
        }
        else{
            
state[state.findIndex((item)=>item.id==action.payload)].quantity -=1;

state[state.findIndex((item)=>item.id==action.payload)].total -=state[state.findIndex((item)=>item.id==action.payload)].price;

        }
       
        
        }



}


})

const{actions,reducer}=invoiceSlice;
export const{addNew,increaseQuantity,decreaseQuantity}=actions;
export default reducer;