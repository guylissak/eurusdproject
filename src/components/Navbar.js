import React from 'react';
import { Link } from 'react-router-dom';

// navbar dumb component to navigate between the chart time stamps
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark nav-purple mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        0.25 Hour
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/min-1">
            <i className="far fa-clock"></i>
              {' '}
              1 Min
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/min-5">
            <i className="far fa-clock"></i>
              {' '}
              5 Mins
            </Link>
          </li>
        </ul>        
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/week-1">
            <i className="far fa-clock"></i>
              {' '}
              1 week
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>   
  )
}

export default Navbar;
