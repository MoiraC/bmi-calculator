import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserId: -1,
    name: '',
    allUsers: [
      { id: 1, name: "aysenur@aysenur.com", password: "123" },
    ]
  },
  reducers: {
    // Statedeki user bilgilerini temizledim.
    logout: (state) => {
      state.currentUserId = -1;
      state.name = "";
    },
    // Girilen id yi şuanki user idsine eşitledim ve bu idye karşılık gelen ismi state de güncelledim
    login: (state, action) => {
      state.currentUserId = action.payload;
      state.name = state.allUsers.find(p => p.id === action.payload).name
    },
    // Bütün kullanıcılara girilen isim ve şifre ile yeni bir kullanıcı ekledim. Id olarak da listenin uzunluğunun bir fazlasını verdim.
    register: (state, action) => {
      state.allUsers = [...state.allUsers, { id: state.allUsers.length + 1, name: action.payload.name, password: action.payload.password }]
    },
  },
})
// Reducerlarımı export ettim
export const { login, logout, register } = userSlice.actions

export default userSlice.reducer