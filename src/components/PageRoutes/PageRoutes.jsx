import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Head from '../../pages/Head'
import RequestConnection from '../../pages/RequestConnection'
import Dashboard from '../../pages/Dashboard'

function PageRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Dashboard/>}/> 
      <Route path='/authorised' element={<Head/>}/> 
      <Route path='/RequestConnection' element={<RequestConnection/>}/> 
    </Routes>
  )
}

export default PageRoutes
