import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="container-fluid bg-warning">
        <div className="row">
            <div className="col-md-4">
            <b><i><h1>Packup Package</h1></i></b>

            </div><br /><br />
            <div className="col-md-8">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <b><i><Link class="navbar-brand" to={'/'}>Home</Link></i></b>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <b><i><Link class="nav-link active" aria-current="page" to={'About'}>About</Link></i></b>
        </li>
        <li class="nav-item">
        <b><i><Link class="nav-link" to={'Services'}>Services</Link></i></b>
        </li>
        <li class="nav-item">
        <b><i><Link class="nav-link" to={'Contact'}>Contact</Link></i></b>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Tourpackages
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <b><i><li><Link class="dropdown-item" to={'International'}>International Package</Link></li></i></b>
          <b><i><li><Link class="dropdown-item" to={'National'}>National Package</Link></li></i></b>
           <li><hr class="dropdown-divider" /></li>
          <b><i><li><Link class="dropdown-item" to={'Domestic'}>Domestic</Link></li></i></b>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Contact</button>
      </form>
    </div>
  </div>
</nav>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Header
