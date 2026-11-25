import { useParams, useNavigate } from 'react-router'
import peliculas from '../data/peliculas'

function DetallePelicula() {
  const { id } = useParams()
  const navigate = useNavigate()

  // el parametro llega como texto, por eso se convierte a numero
  const pelicula = peliculas.find((p) => p.id === Number(id))

  if (!pelicula) {
    return (
      <div className="caja">
        <p>No existe una película con id {id}.</p>
        <button onClick={() => navigate('/peliculas')}>Ir a la lista</button>
      </div>
    )
  }

  return (
    <div className="caja">
      <h1>{pelicula.titulo}</h1>
      <p>
        <strong>Año:</strong> {pelicula.anio}
      </p>
      <p>
        <strong>Director:</strong> {pelicula.director}
      </p>
      <p>{pelicula.sinopsis}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  )
}

export default DetallePelicula
