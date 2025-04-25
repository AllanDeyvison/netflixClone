
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation()

  const linkClass = (path: string) =>
    `px-4 py-2 hover:text-red-500 transition ${
      location.pathname === path ? 'text-red-500 font-semibold' : ''
    }`

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold text-red-600">
      <h1 className="text-3xl font-bold text-red-600 ">Netflix
        <small className="text-red-600 text-sm pl-2 "> Clone</small>
      </h1>
      </Link>
      <nav className="flex space-x-4">
        <Link to="/" className={linkClass('/')}>Início</Link>
        <Link to="/filmes" className={linkClass('/filmes')}>Filmes</Link>
        <Link to="/series" className={linkClass('/series')}>Séries</Link>
      </nav>
    </header>
  )
}

export default Navbar;