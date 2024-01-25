import React from 'react';
import Navigation from '../../widgets/navigation/Navigation';
import SideBar from '../../widgets/sidebar/SideBar';
import styles from './Layout.module.css';

function Layout({children}) {
  return (
    <div className={styles.layout}>
        <Navigation/>
        {children}
        <SideBar/>
    </div>
  )
}

export default Layout