import React, { useState, useContext } from 'react'
import AuthService from '../services/AuthService'
import { AuthContext } from '../context/AuthContext'
import Message from './Message'

const Login = props => {
  const [user, setUser] = useState({ username: '', password: '' })
  const [message, setMessage] = useState(null)
  const authContext = useContext(AuthContext)

  const onSubmit = e => {
    e.preventDefault()
    AuthService.login(user).then(({ isAuthenticated, user, message }) => {
      if (isAuthenticated) {
        authContext.setUser(user)
        authContext.setIsAuthenticated(isAuthenticated)
        props.history.push('/todos')
      } else {
        setMessage(message)
      }
    })
  }

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h3>Please sign in..</h3>
        <label htmlFor="username" className="sr-only">
          Username:
        </label>
        <input
          type="text"
          name="username"
          onChange={onChange}
          className="form-control"
          placeholder="Enter username.."
        />
        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter password.."
        />
        <button className="btn btn-large btn-primary btn-block" type="submit">
          Log In
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  )
}

export default Login
