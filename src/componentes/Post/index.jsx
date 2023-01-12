import './Post.css';
import styles from './Post.module.css';
import posts from "json/posts.json"

import React from 'react'
import { useParams } from 'react-router-dom';
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams();
    const post = posts.find(item => item.id === Number(parametros.id));

    if (!post) {
        return <NaoEncontrada/>
    }

    const postsRecomendados = posts
        .filter(item => item.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0, 4);

  return (
    <PaginaPadrao>
        <PostModelo 
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}>
            <div className='post-markdown-container'>
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>
            <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map(post => {
                  return (  <li key={post.id}>
                        <PostCard post={post}/>
                    </li>)
                })}
            </ul>
        </PostModelo>
    </PaginaPadrao>
    )
}
