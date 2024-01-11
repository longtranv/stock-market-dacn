import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Trade from "./pages/Trade";
import Wallet from "./pages/Wallet";
import AddFund from "./pages/AddFund";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="home" element ={<Home/>}/>
      <Route path="order" element ={<Orders/>}/>
      <Route path="trade" element ={<Trade/>}/>
      <Route path="wallet" element ={<Wallet/>}/>
      <Route path="addfund" element = {<AddFund/>}/>
    </Route>

  )
);

export default router;