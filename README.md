# Actividad 3 - React Router

Curso ACMUD WebDev Frontend - ReactJS

Catálogo de películas colombianas con varias rutas.

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/peliculas` | Lista de películas |
| `/peliculas/:id` | Detalle (usa `useParams`) |
| `/acerca` | Acerca |
| cualquier otra | 404 |

Lo que se usa:

- `BrowserRouter`, `Routes` y `Route`
- Rutas anidadas con un `Layout` y `Outlet` (el menú se mantiene en todas las páginas)
- `NavLink` para marcar la página activa en el menú
- `Link` para navegar sin recargar
- `useParams` para leer el id de la URL
- `useNavigate` para el botón de volver
- Ruta `*` para páginas que no existen

## Cómo correrlo

```
npm install
npm run dev
```

Hecho con React 19, Vite y React Router.
