import { createSlice } from '@reduxjs/toolkit'

export const allUsers = [{id: 1, name:"test@weg.com", password:"123"}, {id: 2, name:"ayşe2", password:"124"}];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserId: -1,
    name: '',
  },
  reducers: {
    logout: (state) => {
        state.currentUserId = -1;
        state.name = "";
    },
    login: (state, action) => {
      state.currentUserId = action.payload;
      state.name = allUsers.find(p => p.id === action.payload).name
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer