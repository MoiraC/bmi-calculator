import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import calculationSlice from '../features/user/calculationSlice'

export default configureStore({
  //user ve calculation reducerlarını storea ekledim
  reducer: {
    user: userReducer,
    calculation: calculationSlice
  },
})