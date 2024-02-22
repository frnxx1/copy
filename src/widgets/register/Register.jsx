import React, {useEffect, useState} from 'react';
import Jwtbtn from '../../shared/ui/jwtbtn/Jwtbtn';
import Postinput from '../../shared/ui/postinput/Postinput';
import Submitbtn from '../../shared/ui/submitbtn/Submitbtn';
import styles from './register.module.css';
import registerphoto from '../assets/registerphoto.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createNewUser } from '../../hooks/reducers/register.reducer';

function Register() {

    const [userValue, setUserValue] = useState({
        name: '',
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

      const navigate = useNavigate();
      const dispatch = useDispatch();

      const userSubmit = e => {
        navigate('/login');
        dispatch(createNewUser(userValue));

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
          if(e.target.value.length < 6 || e.target.value.length > 8 ) {
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
    <form onSubmit={userSubmit} className={styles.register}>
        <div className={styles.registercontainer}>
        <div className={styles.registerBlock}>
              <h2 className="registertitle">Регистрация пользователя</h2>
              <Jwtbtn text="Войти с помощью google"/>
              <input type="text" onChange={e => dataHandlerChange(e)} value={userValue.name} name="name" className={styles.nameinput} placeholder="Введите name"/>
              <Postinput onChange={e => dataHandlerChange(e)} emailDirty={emailDirty} emailError={emailError} Blur={e => blurHandler(e)} value={userValue.email} placeholder="Введите email" name="email" type="email"/>
              <Postinput emailDirty={passwordDirty} emailError={passwordError} onChange={e => dataHandlerChange(e)} value={userValue.password} Blur={e => blurHandler(e)} placeholder="Введите password" name="password" type="password"/>
              <Submitbtn text="отправить"/>

              <NavLink className={styles.text} to="/login">Если у вас есть аккаунт, то можете войти</NavLink>
            </div>

            <img src={registerphoto} alt={registerphoto} className={styles.registerphoto}/>
        </div>
    </form>
  )
}

export default Register;