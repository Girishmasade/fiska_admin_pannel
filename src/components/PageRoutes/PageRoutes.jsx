import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Head from '../../pages/Head'
import UserDetails from '../../pages/UserDetails'

function PageRoutes() {
  return (
    <Routes>
      <Route path='/authorised' element={<Head/>}/> 
    </Routes>
  )
}

export default PageRoutes
