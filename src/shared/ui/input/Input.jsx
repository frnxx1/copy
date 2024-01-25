import React from 'react';
import styles from './Input.module.css';
import searhicon from '../../assets/iconsearh.svg';


function Input({placeholder}) {
  return (
    <div className={styles.inputcontainer}>
        <input type="text" placeholder={placeholder} className={styles.searh}/>
        <img src={searhicon} alt={searhicon} className={styles.searhicon} />
    </div>
  )
}

export default Input;