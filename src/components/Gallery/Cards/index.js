import React from 'react'
import favorito  from'../../../assets/favorito.png'
import open  from'../../../assets/open.png'


const Cards = ({photos, styles}) => {
  return (
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
  )
}

export default Cards
