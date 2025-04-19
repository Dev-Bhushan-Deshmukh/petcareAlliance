import {configureStore} from '@reduxjs/toolkit'
import reducer from './slices/activitySlice'
import invoiceReducer from './slices/invoices';
import toastReducer from './slices/notification'
const store=configureStore({
reducer:{
activity:reducer,
invoice:invoiceReducer,
toast:toastReducer,

}

})
export default store;