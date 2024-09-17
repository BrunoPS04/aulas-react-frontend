import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function NavBar() {

  return (

    <nav>
        <Link to="/">Home</Link>

        <Link to="/musicas">Musicas</Link>

        <Link to="/filmes">Filmes</Link>

        <Link to="/seriados">Seriados</Link>
    </nav>

  )
  

}

export default NavBar
