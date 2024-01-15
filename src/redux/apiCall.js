import {loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, Logout} from './userSlice'
import axios from 'axios'

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post('https://market-stock.onrender.com/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure(error.response.data.message))
    }
}

export const register = async (dispatch, user) =>{
    dispatch(registerStart());
    try {
        const res = await axios.post('https://market-stock.onrender.com/register', user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure(error.response.data.message))
    }
}

export const logout = async (dispatch, token)=>{
    try {
        await axios.post('https://market-stock.onrender.com/logout', {
            refreshToken: token
        })
    } catch (error) {
        
    }
    dispatch(Logout());

}