import React from 'react';
import styles from './Submitbtn.module.css';


function Submitbtn({text}) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default Submitbtn