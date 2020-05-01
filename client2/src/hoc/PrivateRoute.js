import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({
  component: Component,
  roles,
  ...theRestOfTheProps
}) => {
  const { isAuthenticated, user } = useContext(AuthContext)

  return (
    <Route
      {...theRestOfTheProps}
      render={props => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
        if (!roles.includes(user.role)) {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
        return <Component {...props} />
      }}
    />
  )
}

export default PrivateRoute
