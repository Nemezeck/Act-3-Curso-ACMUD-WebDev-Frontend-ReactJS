import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'
import DetallePelicula from './pages/DetallePelicula'
import Acerca from './pages/Acerca'
import NoEncontrado from './pages/NoEncontrado'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="peliculas/:id" element={<DetallePelicula />} />
        <Route path="acerca" element={<Acerca />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default App
