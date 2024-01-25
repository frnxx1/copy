import React from 'react';
import styles from './navlinkbtn.module.css';
import {NavLink} from 'react-router-dom'

function Navlinkbtn({text, icon, to}) {
  return (
    <NavLink to={to} className={styles.navlinkbtn}>
            <img src={icon} alt={icon} className={styles.navicon} />
            <a href='#' className={styles.navLink} >{text}</a>
    </NavLink>
  )
}

export default Navlinkbtn