import {configureStore} from '@reduxjs/toolkit'
import reducer from './slices/activitySlice'
const store=configureStore({
reducer:{
activity:reducer

}

})
export default store;