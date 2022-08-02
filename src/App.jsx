import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ProtectedRoutes from './components/ProtectedRoutes'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { Home, Login, Purchases, ProductDetail } from './pages'
import { NavBar, LoadingScreen } from './components'

function App() {
  const loading = useSelector( state => state.loading)

  return (
    <div className="App">
      <NavBar/>
      {
        loading && <LoadingScreen/>
      }
        
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
            
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
          
        </Routes>
    </HashRouter>



    </div>
  )
}

export default App
