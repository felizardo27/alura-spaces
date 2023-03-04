import React from 'react'
import styles from './Menu.module.scss'
import home from 'assets/icones/home-ativo.png'
import views from 'assets/icones/mais-vistas-inativo.png'
import likes from 'assets/icones/mais-curtidas-inativo.png'
import news from 'assets/icones/novas-inativo.png'
import suprise from 'assets/icones/surpreenda-me-inativo.png'

const Menu = () => {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt=''/>
                <a href='/'>Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={views} alt=''/>
                <a href='/'>Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={likes} alt=''/>
                <a href='/'>Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={news} alt=''/>
                <a href='/'>Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={suprise} alt=''/>
                <a href='/'>Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu
