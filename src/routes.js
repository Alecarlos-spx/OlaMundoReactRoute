import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'componentes/Post';
import Rodape from 'componentes/Rodape';
import ScrollToTop from 'componentes/ScrollToTop';
import NaoEncontrada from 'paginas/NaoEncontrada';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim';
/*
console.log(window.location);

const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim/>*/

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Menu/>

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>} />
            <Route path='sobremim' element={<SobreMim/>} />
          </Route>
          <Route path='posts/:id/*' element={<Post/>} />
          <Route path='*' element={<NaoEncontrada/>} />
        </Routes>

        <Rodape/>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
