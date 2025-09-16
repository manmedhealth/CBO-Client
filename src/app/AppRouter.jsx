import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../page/HomePage'
import List from '../page/List'
// import ProductList from '../page/ProductList'
import ProductList from '../page/productList'
import History from '../page/History'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Billing from '../page/Billing'

const AppRouter = () => {
  const [token, settoken] = useState("hello");
  console.log(token)
  return (  
    <div>
      {
        token === ""? <Login settoken={settoken}/>:
        <>
        <Navbar settoken={settoken}/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<List />} />
        <Route path="/alllist" element={<ProductList />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/history" element={<History />} />
      </Routes>
        </>
      }
      
        
        
        
    
    </div>
  )
}

export default AppRouter