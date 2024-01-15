import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Trade from "./pages/Trade";
import Wallet from "./pages/Wallet";
import AddFund from "./pages/AddFund";
import './index.css'
import EnterAmount from "./pages/EnterAmount";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import SuccessPage from "./pages/SuccessPage";
import { logout } from "./redux/apiCall";
import { useEffect } from "react";
import {persistor} from './redux/store'

function App(){
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user?.currentUser);

  // useEffect(()=>{
  //   const handleBeforeUnload = (e)=>{
  //     localStorage.clear();
  //   }
  //   window.addEventListener('beforeunload', handleBeforeUnload)
  // },[])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element ={<Home/>}/>
      <Route path="trade/:ticker" element ={<Trade/>}/>
      <Route element={<ProtectedRoute isAllowed={!!user}/>}>
        <Route path="order" element ={<Orders/>}/>
        <Route path="wallet" element ={<Wallet/>}/>
        <Route path="addfund" element = {<AddFund/>}/>
        <Route path="enteramount" element={<EnterAmount/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Route>
  ));

  return <RouterProvider router={router}/>
};

export default App;