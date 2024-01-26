import React from 'react'
import Categorybtn from '../../shared/ui/categorybtn/Categorybtn';
import styles from './Navigation.module.css';
import youtubeicon from '../assets/iconyoutube.png';
import Input from '../../shared/ui/input/Input';


function Navigation() {
  return (
    <div className={styles.navigate}>

        <div className={styles.navigateContainer}>

            <div className={styles.navigateLogo}>
                <img src={youtubeicon} alt={youtubeicon} className={styles.logo} />
                <span className={styles.logotext}>CopyTube</span>
            </div>

            <div className={styles.searhContainer}>
                <Input placeholder="Введите запрос"/>
            </div>

            <div className={styles.kategory}>
                <Categorybtn text="Все" to="/"/>
                <Categorybtn text="Музыка" to="/muzik"/>
                <Categorybtn text="Кино" to="/kino"/>
                <Categorybtn text="еще..." to="/category"/>
            </div>

        </div>

    </div>
  )
}

export default Navigation