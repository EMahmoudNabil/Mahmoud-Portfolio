import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.styles.scss'


const Navbar = () => {
  return (

    <div className="navbar-sec container">
            <ul className="navbarList">             
            <NavLink exact activeClassName="active" to="/">  <li className="home"><i className="fas fa-home"></i></li> </NavLink>
            <NavLink exact activeClassName="active" to="/about">  <li className="about"><i className="fas fa-user"></i></li></NavLink>
            <NavLink exact activeClassName="active" to="/projects">  <li className="projects"><i className="fas fa-laptop-code"></i></li></NavLink>
            <NavLink exact activeClassName="active" to="/contact"> <li className="contact"><i className="far fa-envelope-open"></i></li></NavLink>  
            </ul>
        </div>
  )
}
export default  Navbar