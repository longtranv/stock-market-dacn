import {loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, Logout} from './userSlice'
import axios from 'axios'

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:5000/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure(error.response.data.message))
    }
}

export const register = async (dispatch, user) =>{
    dispatch(registerStart());
    try {
        const res = await axios.post('http://localhost:5000/register', user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure(error.response.data.message))
    }
}

export const logout = async (dispatch)=>{
    dispatch(Logout());
}