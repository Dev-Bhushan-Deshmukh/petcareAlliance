import {configureStore} from '@reduxjs/toolkit'
import reducer from './slices/activitySlice'
import invoiceReducer from './slices/invoices';
const store=configureStore({
reducer:{
activity:reducer,
invoice:invoiceReducer

}

})
export default store;