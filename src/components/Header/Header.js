import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className="conteneur">
        <div className="normal-flex">
        <div className="haut-gauche">
            <h1>Nom Prénom</h1>
            <strong><span>C</span>ommunication</strong> 
            <strong><span>M</span>arketing</strong> 
            <strong><span>D</span>igital</strong>
        </div>
        <div className="haut-droit">
            <a href="/">Télécharger mon c.v.</a>
        </div>
        </div>
  </div> 
  )
}

export default Header