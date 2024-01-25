import React from 'react';
import Navigation from '../../widgets/navigation/Navigation';
import SideBar from '../../widgets/sidebar/SideBar';
import  '../style.css';

function Layout({children}) {
  return (
    <div className="layout">
        <Navigation/>
        {children}
        <SideBar/>
    </div>
  )
}

export default Layout