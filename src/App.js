import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import Login from './components/login';
import SignUp from './components/signup';
import GuitarList from './components/guitarlist';
import AddGuitar from './components/add';
import PrivateRoute from './components/privateRoute';
import Logout from './components/logout';

function App() {
  
  

  return (
    <div className="App">
      <nav>
        <Link to = '/'> Home </Link>
        <Link to = '/login'> Login </Link>
        <Link to = '/signup'> SignUp </Link>
        <Link to = '/guitars'> Guitars </Link>
        <Link to = '/logout'> Logout </Link>
      </nav>

        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {SignUp} />
        <PrivateRoute exact path = '/guitars' component = {GuitarList} />
        <PrivateRoute exact path = '/guitars/add' component = {AddGuitar} />
        <PrivateRoute exact path = '/logout' component = {Logout} />

    </div>
  );
}

export default App;
