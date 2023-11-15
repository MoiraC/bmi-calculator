import { createSlice } from '@reduxjs/toolkit'

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState: {
    calculations: [{userId: 1, value: 23, date: new Date()}]
  },
  reducers: {
    addCalculation: (state, action) => {
      state.calculations = [...state.calculations, {...action.payload, date: new Date()}]
    },
    removeCalculationByUser: (state, action) => {
      state.calculations = state.calculations.filter(calc => calc.userId !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCalculation, removeCalculationByUser } = calculationSlice.actions

export default calculationSlice.reducer