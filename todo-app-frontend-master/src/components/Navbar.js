import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Úlohy
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Pridať 
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
