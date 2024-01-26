import React from 'react';
import styles from './jwtbtn.module.css';
import googleicon from '../../assets/googleicon.svg';


function Jwtbtn({text}) {
  return (
    <button className={styles.jwtbtn}>
        <span className="jwtbtntext">{text}</span>
        <img src={googleicon} alt={googleicon} className={styles.jwtbtnicon}/>
    </button>
  )
}

export default Jwtbtn