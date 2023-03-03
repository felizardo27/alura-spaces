import React from 'react'
import styles from './Footer.module.scss'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__icons}>
            <a 
            href="https://www.facebook.com/AluraCursosOnline/"
            target="_blank"
            rel='noreferrer'
            >

            </a>
            <img src={facebook} alt="Icone do Facebook" />
            <a 
            href="https://twitter.com/aluraonline?lang=en"
            target="_blank"
            rel='noreferrer'
            >
            </a>
            <img src={twitter} alt="Icone do Twitter" />
            <a 
            href="https://www.instagram.com/aluraonline/?hl=en"
            target="_blank"
            rel='noreferrer'
            >
            </a>
            <img src={instagram} alt="Icone do Instagram" />
        </div>
        <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Footer
