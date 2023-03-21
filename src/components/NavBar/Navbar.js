import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="conteneur">
            <div className="flex-menu">
                <a href="index.html">Accueil</a>
                <a href="cv.html">Mon c.v.</a>
                <a href="folio.html">Folio</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar