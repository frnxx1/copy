import React from 'react';
import Navlinkbtn from '../../shared/ui/navlinkbtn/Navlinkbtn';
import styles from './SideBar.module.css';
import homeicon from '../assets/homeicon.svg';
import likeicon from '../assets/like2.png';
import mykanal from '../assets/mykanal.png';
import chasy from '../assets/icomchasy.svg';
import myvideoicon from '../assets/iconmyvideo.png';
import loginicon from '../assets/login.png';


function SideBar() {
  return (
    <div className={styles.sidebar}>

        

        <div className={styles.sidebarContainer}>
            <Navlinkbtn text="Главная" icon={homeicon} to='/' />
            <Navlinkbtn text="Понравившиеся" icon={likeicon} to='/like' />
            <Navlinkbtn text="Мой канал" icon={mykanal} to='/mykanal' />
            <Navlinkbtn text="Смотреть позже" icon={chasy} to='/then' />
            <Navlinkbtn text="Ваши видео" icon={myvideoicon} to='/myvideo' />
            <Navlinkbtn text="Войти" icon={loginicon} to='/login' />
        </div>

    </div>
  )
}

export default SideBar