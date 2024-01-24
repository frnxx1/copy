import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from '../widgets/sidebar/SideBar'
function RouterComponent() {
  return (
    <>
        <Routes>
            <Route path='/' element={<SideBar/>}/>
        </Routes>
    </>
  )
}

export default RouterComponent