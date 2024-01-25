import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './categorybtn.module.css';


function Categorybtn({ text, to }) {
  return (
    <NavLink to={to} className={styles.categorybtn}>
        {text}
    </NavLink>
  )
}

export default Categorybtn