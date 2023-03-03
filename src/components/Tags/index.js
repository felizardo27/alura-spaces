import styles from './Tags.module.scss'

import React from 'react'

const Tags = () => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        <li>Estrelas</li>
        <li>Galáxias</li>
        <li>Lua</li>
        <li>Planetas</li>
      </ul>
    </div>
  )
}

export default Tags
