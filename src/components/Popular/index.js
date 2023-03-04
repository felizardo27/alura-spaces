import React from 'react'
import photosPopular from './photos-popular.json'
import styles from './Popular.module.scss'

const Popular = () => {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {photosPopular.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
            </li>
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}

export default Popular
