import React from 'react'
import styles from './Banner.module.scss'
import banner from ".././../assets/banner.png"

const Banner = () => {
  return (
    <div className={styles.banner} >
        <h1>A galeria mais completa de fotos do espaço!</h1>
        <img 
            src={banner} 
            alt="A imagem da terra vista do espaço" 
        />
    </div>
)
}

export default Banner
