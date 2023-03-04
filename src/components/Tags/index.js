import styles from './Tags.module.scss'

import React from 'react'

const Tags = ({tags, filterPhotos, allPhotos}) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => 
          <li 
          key={tag}
          onClick={() => filterPhotos(tag)}
          >{tag}</li>
        )}
        <li onClick={() => allPhotos()}>Todas</li>
      </ul>
    </div>
  )
}

export default Tags
