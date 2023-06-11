import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [color1, setColor1] = useState({
    color: "white",
    backgroundColor: "#293a28"
  });
  const [color2, setColor2] = useState({
    color: "white",
    backgroundColor: "#0b2669"
  });
  const [color3, setColor3] = useState({
    color: "white",
    backgroundColor: "#bb4adb"
  });
  const [active, setActive] = useState({
    active: 'home'
  })
  const activate = (m) =>{
    setActive({
      active: m
    })
    console.log(m)
  }
    return (
        <nav className={`navbar navbar-expand-lg`} style={props.mode}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode.color}`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${active.active === 'home'?'active':''} text-${props.mode.color}`} aria-current="page" to="/" onClick={()=> activate('home')}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${active.active === 'about'?'active':''} text-${props.mode.color}`} to="/About" onClick={() => activate('about')}>About</Link>
              </li> 
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className='color-input'>
              <div style={color1} onClick={()=> props.changeColor(color1)}></div>
              <div style={color2} onClick={()=> props.changeColor(color2)}></div>
              <div style={color3} onClick={()=> props.changeColor(color3)}></div>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" style={props.mode} htmlFor="flexSwitchCheckDefault">Theam Mode</label>
            </div>
          </div>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: 'this is title'
}