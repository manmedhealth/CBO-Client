import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../page/HomePage'
import ProductList from '../page/ProductList';
import History from '../page/History'
import Login from '../components/Login'
import Billing from '../page/Billing'
import Dashboard from '../components/Dashboard';
import Analays from '../page/Analays';
// import Listing from '../page/Listing';

const AppRouter = () => {

  // const [token, settoken] = useState("")
  const [token, settoken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token]);


  return (
    <>
      <ToastContainer />
      {
        token === "" ? <Login settoken={settoken} /> :
          <>
            <Routes>
              {/*dash layout wrap all the co te t */}
              <Route path="/" element={<Dashboard settoken={settoken} />} >
                <Route path="" element={<HomePage />} />
                {/* <Route path="listing" element={<Listing token={token} />} /> */}
                <Route path="alllist" element={<ProductList token={token} />} />
                <Route path="billing" element={<Billing />} />
                <Route path="analays" element={<Analays />} />
                <Route path="history" element={<History />} />
              </Route>
            </Routes>

          </>
      }
    </>
  )
}

export default AppRouter