import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes, Route, useParams } from 'react-router-dom'
import HomePage from '../page/HomePage'
import List from '../page/List'
import ProductList from '../page/ProductList';
import History from '../page/History'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Billing from '../page/Billing'
import Dashboard from '../components/Dashboard';

const AppRouter = () => {
  const [token, settoken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token]);
    const {param} = useParams();
    console.log("param=>",param)

  return (  
    

    <div>
      <ToastContainer />
      {
        token === ""? <Login settoken={settoken}/>:
        <>
        {/* <Navbar settoken={settoken}/> */}
        <Dashboard/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<List token={token}/>}/>
        <Route path="/alllist" element={<ProductList token={token}/>} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/history" element={<History />} />
        <Route path="/:param" element={<History />} />
      </Routes>
        </>
      }
    </div>
  )
}

export default AppRouter