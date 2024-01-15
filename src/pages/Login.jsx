import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCall';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    const {currentUser, isFetching , error, errorMessage} = useSelector((state)=>state.user);
    const navigate = useNavigate();

    useEffect(()=>{
        if(currentUser)
        navigate('/')
    },[currentUser])

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {email, password})
        if(error){
            setIsError(true);
        }
    }

    const SignupNavigate = ()=>{
        navigate('/signup')
    }


  return (
    <div className="">
            <div className="flex justify-center items-start mt-36 gap-32">
                <div className="w-full max-w-[384px]">
                    <h1>Welcome to Binance!</h1>
                    {/* <button className="btn-yellow flex items-center mt-10">
                        <img src="iconuser.png" width={24} height={24} className="" />
                        <p className="mx-auto text text-[16px]">Sign Up With Email or Phone</p>
                    </button> */}
                    <div className="mb-4">
          <label htmlFor="email" className="block text-black text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-yellow-500"
            placeholder="Enter your email"
            onChange={(e)=>{
                setEmail(e.target.value);
                setIsError(false);
            }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-yellow-500"
            placeholder="Enter your password"
            onChange={(e)=>{
                setPassword(e.target.value);
                setIsError(false);
            }}
          />
        </div>

        <button className={`bg-black hover:bg-gray-800 text-white w-full flex items-center gap-2 px-4 py-3 rounded-[8px] textbold-light mt-4 ${isFetching?'opacity-50 cursor-not-allowed':''}`}
        onClick={handleClick} disabled={isFetching}>
        {isFetching?<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>:<p className="mx-auto tracking-wide">login</p>}
        </button>
        <div className='text-red text-sm font-normal'>{isError&&errorMessage}</div>
                    <div className="flex items-center py-4">
                        <div className="w-full h-0.5 bg-[rgb(132,142,156)]" />
                        <p className="px-6 text-[rgb(132,142,156)] font-medium leading-5"> or </p>
                        <div className="w-full h-0.5 bg-[rgb(132,142,156)]" />
                    </div>
                    <button className='w-full flex items-center gap-2 bg-[#eaeaea] px-4 py-3 rounded-[8px] textbold-light'>
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" width={16} height={16} />
                        <p className="mx-auto tracking-wide"> Continue with Google</p>
                    </button>
                    <button
                        className='w-full flex items-center gap-2 bg-[#eaeaea] px-4 py-3 rounded-[8px] textbold-light mt-4'>
                        <img
                            src="ios-dark.svg"
                            width={16}
                            height={16} />
                        <p className="mx-auto tracking-wide"> Continue with Apple</p> </button>
                    <div
                        className="mt-4 inline-flex gap-1 text-[#848c9E]">
                        <p
                            className="text-bold">
                            Need an entity account?</p>
                        <button
                            onClick={SignupNavigate}
                            className="text-bold text-[#F0B90B] hover:underline underline-offset-2">
                            Sign Up</button> </div>
                </div>

                <div>
                    <img
                        src="admin-mgs-img.png"
                        className=""
                        width={379}
                        height={216}
                    />
                    <p
                        className='mt-6 text text-center text-[20px] text-[#474D57]'>
                        Sign up to get 100 USD trading fee <br/> rebate!</p>
                    <p className='mt-3 text-[#707A8A] text-center text'> Follow the registration steps to redeem your rewards <br /> and start your crypto journey with us! <button className="text text-[#c99400]">FAQ</button></p>
                </div>
            </div>
                    <div className='flex justify-center items-center'>
                        <p className='pt-3 pr-4 text-xs font-normal'>UIT@2024</p>
                    </div>
        </div>
  )
}

export default Login