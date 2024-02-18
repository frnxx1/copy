import React, {useState, useEffect} from 'react';
import Postinput from '../../shared/ui/postinput/Postinput';
import Submitbtn from '../../shared/ui/submitbtn/Submitbtn';
import styles from './Login.module.css';
import loginphoto from '../assets/loginsiteicon.jpg';
import Jwtbtn from '../../shared/ui/jwtbtn/Jwtbtn';
import {NavLink} from 'react-router-dom';
// start project
function Login() {
  const [userValue, setUserValue] = useState({
    email: '',
    password: ''
  });

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('email не может быть пустым');
  const [passwordError, setPasswordError] = useState('password не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {

    if(emailError || passwordError) {
      setFormValid(false)
    }else {
      setFormValid(true)
    }

  }, [emailError, passwordError]);

  
  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      }
  }

  const dataHandlerChange = e => {
    
    setUserValue(data => {
      return{
        ...data,
        [e.target.name]: e.target.value
      }
    })

    if(e.target.name === 'email') {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!re.test(String(e.target.value).toLocaleLowerCase())) {

        setEmailError('Некоректный email')
  
      }else {
        setEmailError('')
      }

    }else if(e.target.name === 'password') {
      if(e.target.value.length < 6 ||e.target.value.length > 8 ) {
        setPasswordError('Пароль должен быть больше 6 символов');
  
        if(!e.target.value) {
          setPasswordError('Поле поля password обязателен!!');
        }
      }else {
        setPasswordError('')
      }
    }
  }

  return (
    <form className={styles.login}>

      <div className={styles.formcontainer}>
            <div className={styles.loginBlock}>
              <h2 className="logintitle">Авторизация пользователя</h2>
              <Jwtbtn text="Войти с помощью google"/>
              <Postinput onChange={e => dataHandlerChange(e)} emailDirty={emailDirty} emailError={emailError} Blur={e => blurHandler(e)} value={userValue.email} placeholder="Введите email" name="email" type="email"/>
              <Postinput emailDirty={passwordDirty} emailError={passwordError} onChange={e => dataHandlerChange(e)} value={userValue.password} Blur={e => blurHandler(e)} placeholder="Введите password" name="password" type="password"/>
              <Submitbtn text="отправить"/>

              <NavLink className={styles.text} to="/register">Если у вас пока нету аккаунта, то можете создать новый аккаунт</NavLink>
            </div>

            <img src={loginphoto} alt={loginphoto} className={styles.loginphoto}/>
      </div>
    </form>
  )
}

export default Login