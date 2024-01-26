import React from 'react';
import Postinput from '../../shared/ui/postinput/Postinput';
import Submitbtn from '../../shared/ui/submitbtn/Submitbtn';
import styles from './Login.module.css';
import loginphoto from '../assets/loginsiteicon.jpg';
import Jwtbtn from '../../shared/ui/jwtbtn/Jwtbtn';
import {NavLink} from 'react-router-dom'
function Login() {
  return (
    <form className={styles.login}>


      <div className={styles.formcontainer}>
            <div className={styles.loginBlock}>
              <h2 className="logintitle">Авторизация пользователя</h2>
              <Jwtbtn text="Войти с помощью google"/>
              <Postinput placeholder="Введите email" name="email" type="email"/>
              <Postinput placeholder="Введите password" name="password" type="password"/>
              <Submitbtn text="отправить"/>

              <NavLink className={styles.text} to="/register">Если у вас пока нету аккаунта, то можете создать новый аккаунт</NavLink>
            </div>

            <img src={loginphoto} alt={loginphoto} className={styles.loginphoto}/>
      </div>
    </form>
  )
}

export default Login