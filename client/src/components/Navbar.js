import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { AuthContext } from '../context/AuthContext'

const Navbar = props => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  )

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data => {
      if (data.success) {
        setUser(data.user)
        setIsAuthenticated(false)
        // TODO: push to Home or Login screen
      }
    })
  }

  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link">Register</li>
        </Link>
        <Link to="/test-page">
          <li className="nav-item nav-link">Test Page</li>
        </Link>
      </>
    )
  }

  const authenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/todos">
          <li className="nav-item nav-link">Todos App</li>
        </Link>
        {user.role === 'admin' ? (
          <Link to="/admin">
            <li className="nav-item nav-link">Admin Page</li>
          </Link>
        ) : null}
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}>
          Logout
        </button>
      </>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        MERN Stack Template
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
