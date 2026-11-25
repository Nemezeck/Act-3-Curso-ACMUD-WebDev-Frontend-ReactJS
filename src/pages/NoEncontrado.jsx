import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <div className="caja">
      <h1>404</h1>
      <p>Esta página no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NoEncontrado
