import React from 'react';
import styles from './navlinkbtn.module.css';
import {NavLink} from 'react-router-dom'

function Navlinkbtn({text, icon, to}) {
  return (
    <button className={styles.navlinkbtn}>
        
            <img src={icon} alt={icon} className={styles.navicon} />
            <NavLink className={styles.navLink} to={to}>{text}</NavLink>
        
    </button>
  )
}

export default Navlinkbtn