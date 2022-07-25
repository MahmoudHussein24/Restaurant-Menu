import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import design from './Navbar.module.css'


export default class Navbar extends Component {
  render() {
    return (
      <>

<nav className={`${design.nav} navbar navbar-expand-lg bg-dark position-fixed w-100`}>
  <div className="container d-flex">

  <Link className={`${design.Link} navbar-brand `} to="home"> WHAT TO EAT! </Link>
 
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className={`${design.Link} nav-link `}  to="home">Home </Link>
      </li>
      <li className="nav-item">
        <Link className={`${design.Link} nav-link `} to="pizza">Pizza</Link>
      </li>
      <li className="nav-item">
        <Link className={`${design.Link} nav-link `} to="beef">Beef</Link>
      </li>
      <li className="nav-item">
        <Link className={`${design.Link} nav-link `}to="chicken">Chicken</Link>
      </li>
      <li className="nav-item">
        <Link className={`${design.Link} nav-link `} to="salad">Salad</Link>
      </li>
      <li className="nav-item dropdown ps-5">
        <Link className={` ${design.Link} nav-link dropdown-toggle`} to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Language
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="#">English</Link>
          <Link className="dropdown-item" to="#">French</Link>
          <Link className="dropdown-item" to="#">Arabic</Link>
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>





      
      
      
      
      
      
      
      
      
      
      
      </>
    )
  }
}
