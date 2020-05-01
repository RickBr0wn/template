import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PublicRoute = ({ component: Component, ...theRestOfTheProps }) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Route
      {...theRestOfTheProps}
      render={props => {
        if (isAuthenticated) {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
        return <Component {...props} />
      }}
    />
  )
}

export default PublicRoute
