import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../widgets/login/Login';
import Layout from './Layout/Layout';
import './style.css';
function RouterComponent() {
  return (
    <>
        <Layout>
          <Routes>
             <Route path='/login' element={<Login/>}/>
          </Routes>
        </Layout>

    </>
  )
}

export default RouterComponent