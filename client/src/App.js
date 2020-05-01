import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Todos from './components/Todos'
import Admin from './components/Admin'
import PrivateRoute from './hoc/PrivateRoute'
import PublicRoute from './hoc/PublicRoute'
import TestPage from './components/TestPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/test-page" component={TestPage} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/todos" roles={['admin', 'user']} component={Todos} />
      <PrivateRoute path="/admin" roles={['admin']} component={Admin} />
    </Router>
  )
}

export default App
