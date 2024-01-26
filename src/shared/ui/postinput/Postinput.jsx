import React from 'react';
import styles from './postinput.module.css';

  function Postinput({type, placeholder, name, onChange, value, Blur, emailDirty, emailError}) {


  return (
    <>
      <input value={value} onChange={onChange} type={type} onBlur={Blur} placeholder={placeholder} name={name} className={styles.postinput}/>
      {(emailDirty && emailError) && <span className={styles.emailError}>{emailError}</span>}
    </>
  )
}

export default Postinput;