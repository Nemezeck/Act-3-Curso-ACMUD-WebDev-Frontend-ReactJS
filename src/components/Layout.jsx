import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <nav className="menu">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/peliculas">Películas</NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
      </nav>
      <main>
        {/* aqui se pinta la pagina de la ruta actual */}
        <Outlet />
      </main>
    </>
  )
}

export default Layout
