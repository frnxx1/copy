import React from 'react';
import styles from './postinput.module.css';


function Postinput({type, placeholder, name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} className={styles.postinput}/>
  )
}

export default Postinput;