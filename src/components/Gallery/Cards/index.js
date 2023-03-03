import React from 'react'
import Card from './Card'



const Cards = ({photos, styles}) => {
  return (
    <ul className={styles.gallery__cards}>
          {photos.map(photo => {
            return (
              <Card 
                photo={photo}
                styles={styles}
              />
            )
          })}
        </ul>
  )
}

export default Cards
