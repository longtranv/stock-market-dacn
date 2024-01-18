import {loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, Logout, refreshToken} from './userSlice'
import axios from 'axios'

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure(error.response.data.message))
    }
}

export const register = async (dispatch, user) =>{
    dispatch(registerStart());
    try {
        const res = await axios.post('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/register', user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure(error.response.data.message))
    }
}

export const logout = async (dispatch, token)=>{
    try {
        await axios.post('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/logout', {
            refreshToken: token
        })
    } catch (error) {
        
    }
    dispatch(Logout());

}

export const RefreshToken = async (dispatch, token)=>{
    try {
        const res = await axios.post('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/refresh-tokens', {
            refreshToken: token
        })
        dispatch(refreshToken(res.data));
    } catch (error) {
        
    }
}