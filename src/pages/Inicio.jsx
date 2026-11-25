import { Link } from 'react-router'

function Inicio() {
  return (
    <div className="caja">
      <h1>Cine colombiano</h1>
      <p>Un catálogo pequeño para practicar rutas con React Router.</p>
      <Link to="/peliculas">Ver películas</Link>
    </div>
  )
}

export default Inicio
