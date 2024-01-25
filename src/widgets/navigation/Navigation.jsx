import React from 'react'
import Categorybtn from '../../shared/ui/categorybtn/Categorybtn';
import styles from './Navigation.module.css';


function Navigation() {
  return (
    <div className={styles.navigate}>

        <div className={styles.navigateContainer}>

            <div className={styles.navigateLogo}>

            </div>

            <div className={styles.searhContainer}>
                
            </div>

            <div className={styles.kategory}>
                <Categorybtn text="Все" to="/"/>
            </div>

        </div>

    </div>
  )
}

export default Navigation