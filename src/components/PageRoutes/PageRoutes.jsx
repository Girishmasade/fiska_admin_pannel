import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Head from '../../pages/Head'
import RequestConnection from '../../pages/RequestConnection'
import Dashboard from '../../pages/Dashboard'
import RequestConnectionModal from '../../Modal/RequestConnectionModal'
import RequestSentModal from '../../Modal/RequestSentModal'

function PageRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Dashboard/>}/> 
      <Route path='/authorised' element={<Head/>}/> 
      <Route path="/RequestConnection" element={<RequestConnection />} />
      <Route path='/RequestConnectionModal' element={<RequestConnectionModal/>}/>
      <Route path='/RequestSentModal' element={<RequestSentModal/>} />
    </Routes>
  )
}

export default PageRoutes
