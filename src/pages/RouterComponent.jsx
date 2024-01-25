import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import './style.css';
function RouterComponent() {
  return (
    <>
        <Layout>
          <Routes>
             {/* <Route path='/navi' element={<Navigation/>}/> */}
          </Routes>
        </Layout>

    </>
  )
}

export default RouterComponent