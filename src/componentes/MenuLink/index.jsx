import styles from './MenuLink.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {

  return (
    <NavLink  className= {({isActive}) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}`
    } to={to}>

    {/* {`
        ${styles.link}
        ${localizacao.pathname === to 
            ? styles.linkDestacado
            : ""}
        `} to={to}> */}
           {children} 
    </NavLink>
  )
}
