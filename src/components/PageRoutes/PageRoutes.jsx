import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Head from '../../pages/Head'
import RequestConnection from '../../pages/RequestConnection'

function PageRoutes() {
  return (
    <Routes>
      <Route path='/authorised' element={<Head/>}/> 
      <Route path='/RequestConnection' element={<RequestConnection/>}/> 
    </Routes>
  )
}

export default PageRoutes
