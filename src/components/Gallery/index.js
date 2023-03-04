import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import React, { useState } from 'react'
import Cards from './Cards'

const Gallery = () => {

  const [itens, setItens] = useState(photos)
  const tags = [...new Set(photos.map(value => value.tag))]

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter(photo => (
      photo.tag === tag
    ))

    setItens(newPhotos)
  }

  const allPhotos = () => {
    setItens(photos)
  }

  return (
    <section className={styles.gallery}>
        <h2>Navegue pele galeria</h2>
        <Tags 
          tags={tags}
          filterPhotos={filterPhotos}
          allPhotos={allPhotos}
        />
        <Cards 
          photos={itens}
          styles={styles}
        />

    </section>
  )
}

export default Gallery
