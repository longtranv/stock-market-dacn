import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCall';

function SignUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser, isFetching , error, errorMessage} = useSelector((state)=>state.user);

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);

  const inputElement = useRef();
  const handleChange =()=>{
    if(inputElement.current.checked){
      setChecked(true);
    }
    else{
      setChecked(false);
    }
  }
  const handleClick = (e)=>{
    e.preventDefault()
    register(dispatch, {username, email, password});
    if(error){
      setIsError(true)
    }
    else if(currentUser){
      navigate('/home')
    }
  }

  const LoginNavigate = ()=>{
    navigate('/login')
  }
  return (
    <div>
        <div className='flex justify-start w-full h-16 bg-white pt-3 pr-8'>
        </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form>
        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              username
            </label>
            <input
              type="email"
              className="border-2 border-gray-300 p-2 w-full rounded"
              placeholder="Your name"
              required
              onChange={(e)=>{
                setUsername(e.target.value);
                setIsError(false)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="border-2 border-gray-300 p-2 w-full rounded"
              placeholder="Your email"
              required
              onChange={(e)=>{
                setEmail(e.target.value);
                setIsError(false)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="border-2 border-gray-300 p-2 w-full rounded"
              placeholder="Your password"
              required
              onChange={(e)=>{
                setPassword(e.target.value);
                setIsError(false)
              }}
            />
          </div>
          <div className="flex items-center mt-6 mb-6">
      <input
        ref={inputElement}
        onChange={handleChange}
        type="checkbox"
        id="ageVerification"
        className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
      />
      <label htmlFor="ageVerification" className="ml-2 text-gray-700">
        I confirm that I am over 18 years old.
      </label>
    </div>
    <div className='text-red text-sm font-normal'>{isError&&'something went wrong'}</div>
          <button
            type="submit"
            className={`bg-black hover:bg-gray-800 text-white w-full flex items-center gap-2 px-4 py-3 rounded-[8px] textbold-light mt-4 ${!checked||isFetching?'opacity-50 cursor-not-allowed':''}`}
            disabled={!checked || isFetching}
            onClick={handleClick}
          >
            {isFetching?<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>:<p className="mx-auto tracking-wide">Sign up</p>}
          </button>
          <div>Already have an account?
          <button 
          onClick={LoginNavigate}
          className="text-bold text-[#F0B90B] hover:underline underline-offset-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SignUp