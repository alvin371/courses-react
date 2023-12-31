import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true  
        }
    }
})
export default configureStore({
    reducer: {
        auth: authSlice,
      },
})