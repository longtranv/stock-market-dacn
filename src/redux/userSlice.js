import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state)=>{
            state.isFetching = true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action)=>{
            state.isFetching=false;
            state.error=true;
            state.errorMessage = action.payload
        },
        registerStart: (state)=>{
            state.isFetching = true
        },
        registerSuccess: (state, action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        registerFailure: (state, action)=>{
            state.isFetching=false;
            state.error=true;
            state.errorMessage = action.payload
        },
        Logout: (state)=>{
            return initialState;
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, Logout} = userSlice.actions;
export default userSlice.reducer;