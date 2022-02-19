import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import Login from './components/login';
import SignUp from './components/signup';
import GuitarList from './components/guitarlist';
import AddGuitar from './components/add';
import PrivateRoute from './components/privateRoute';
import Logout from './components/logout';

function App() {

  const [ user, setUser ] = useState(null)
  return (
    <div className="App">
      <nav>
        <Link to = '/'> Home </Link>
        <Link to = '/login'> Login </Link>
        <Link to = '/signup'> SignUp </Link>
        <Link to = '/guitars'> Guitars </Link>
        <Link to = '/logout'> Logout </Link>
      </nav>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route exact path = '/login' element = {<Login />} />
        <Route exact path = '/signup' element = {<SignUp />} />
        <Route exact path = '/guitars' element = { <PrivateRoute user= {user}> <GuitarList /> </PrivateRoute>} />
        <Route exact path = '/guitars/add' element = { <AddGuitar /> } />
        <Route path = '/logout' element = {<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
