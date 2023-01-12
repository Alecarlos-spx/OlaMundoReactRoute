/*import { Link, useLocation } from 'react-router-dom'*/
import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    /*const localizacao = useLocation();
    console.log(localizacao);
    const menulink = (to) => `
        ${styles.link} 
        ${localizacao.pathname === to 
            ? styles.linkDestacado
            : ""
        }`;*/
  return (
    <header> 
        <nav className={styles.navegacao}>
            <MenuLink to='/'>
                Início
            </MenuLink>
            <MenuLink to='/sobremim'>
                Sobre Mim
            </MenuLink>

            {/* <Link to="/" className={menulink('/')}> Início</Link> */}
            {/* <Link to="/sobremim" className={menulink('/sobremim')} >Sobre Mim</Link> */}
        </nav>
    </header>
  )
}
