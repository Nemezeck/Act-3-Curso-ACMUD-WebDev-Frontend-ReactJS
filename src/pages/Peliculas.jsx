import { Link } from 'react-router'
import peliculas from '../data/peliculas'

function Peliculas() {
  return (
    <div className="caja">
      <h1>Películas</h1>
      <ul>
        {peliculas.map((p) => (
          <li key={p.id}>
            <Link to={`/peliculas/${p.id}`}>{p.titulo}</Link> ({p.anio})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Peliculas
