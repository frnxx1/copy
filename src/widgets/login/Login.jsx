import React from 'react';
import Postinput from '../../shared/ui/postinput/Postinput';
import styles from './Login.module.css';


function Login() {
  return (
    <form className={styles.login}>
        
        <Postinput placeholder="Введите email" name="email" type="email"/>
        <Postinput placeholder="Введите password" name="password" type="password"/>
    </form>
  )
}

export default Login