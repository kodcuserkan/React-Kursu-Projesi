import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


function Navbar1({title}) {
    return (

        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
          <a href="/" className="navbar-brand">{title}</a>
    
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to = "/" className = "nav-link">Anasayfa</Link>
            </li>
            <li className="nav-item active">
              <Link to = "/add" className = "nav-link">Çalışan Ekle</Link>
           </li>
           <li className="nav-item active">
           <Link to = "/github" className = "nav-link">Proje Dosyaları / Katkıda Bulunun</Link>
        </li>
    
          </ul>
    
        </nav>
    
      )
       
}
Navbar1.propTypes ={
    title : PropTypes.string.isRequired
}

Navbar1.defaultProps = {
    title : "Default App"
}
export default Navbar1;