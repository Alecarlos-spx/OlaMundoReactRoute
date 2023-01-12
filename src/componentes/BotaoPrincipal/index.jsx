import styles from './BotaoPrincipal.module.css'

import React from 'react'

export default function BotaPrincipal({children , tamanho}) {
  return (
    <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
    
        `}>{children}
    </button>
  )
}
