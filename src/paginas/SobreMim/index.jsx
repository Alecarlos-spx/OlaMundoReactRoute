import PostModelo from 'componentes/PostModelo';
import React from 'react';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';
import styles from './SobreMim.module.css';
import { loremIpsum } from 'react-lorem-ipsum';


export default function SobreMim() {
  return (
    <PostModelo 
      fotoCapa={fotoCapa}
      titulo="Sobre mim">
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Avatar!
      </h3>
      <img src={fotoSobreMim} alt="Foto do Avatar" 
        className={styles.fotoSobreMim}/>
      {loremIpsum({ p: 4 }).map(text => (
      <div className={styles.paragrafo} key={text}>
        {text}
      </div>
    ))}

    </PostModelo>
  )
}
