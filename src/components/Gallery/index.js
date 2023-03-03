import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import React from 'react'
import Cards from './Cards'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pele galeria</h2>
        <Tags />
        <Cards 
          photos={photos}
          styles={styles}
        />

    </section>
  )
}

export default Gallery
