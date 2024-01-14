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
import { useSelector } from "react-redux";

function App(){
  const user = useSelector((state)=>state.user.currentUser);
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element ={<Home/>}/>
      <Route path="trade/:ticker" element ={<Trade/>}/>
      <Route element={<ProtectedRoute isAllowed={!!user}/>}>
        <Route path="order" element ={<Orders/>}/>
        <Route path="wallet" element ={<Wallet/>}/>
        <Route path="addfund" element = {<AddFund/>}/>
        <Route path="enteramount" element={<EnterAmount/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Route>
  ));

  return <RouterProvider router={router}/>
};

export default App;