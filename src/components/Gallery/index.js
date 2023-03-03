import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import React from 'react'
import open from '../../assets/open.png'
import favorito from '../../assets/favorito.png'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pele galeria</h2>
        <Tags />
        <ul className={styles.gallery__cards}>
          {photos.map(photo => {
            return (
              <li key={photo.id} className={styles.gallery__card}>
                <img 
                  className={styles.gallery__imagem} 
                  src={photo.imagem} 
                  alt={photo.titulo}
                />
                <p className={styles.gallery__descricao}>{photo.titulo}</p>
                <div>
                  <p>{photo.creditos}</p>
                  <span>
                    <img src={favorito} alt='Icone de coração de curtir' />
                    <img src={open} alt='Icone de abir modal' />
                  </span>
                </div>
              </li>
            )
          })}
        </ul>

    </section>
  )
}

export default Gallery
