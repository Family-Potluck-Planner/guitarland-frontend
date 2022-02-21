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
import styled from 'styled-components';

function App() {
  
  

  return (
    <AppDiv className="App">
      <StyledNavContainer>
        <StyledLink to = '/'> Home </StyledLink>
        <StyledLink to = '/login'> Login </StyledLink>
        <StyledLink to = '/signup'> Signup </StyledLink>
        <StyledLink to = '/guitars'> Guitars </StyledLink>
        <StyledLink to = '/logout'> Logout </StyledLink>
      </StyledNavContainer>

        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {SignUp} />
        <PrivateRoute exact path = '/guitars' component = {GuitarList} />
        <PrivateRoute exact path = '/guitars/add' component = {AddGuitar} />
        <PrivateRoute exact path = '/logout' component = {Logout} />

    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background-color: ${pr => pr.theme.primaryColor};
  height: 100vh;
  color: white;
`

const StyledNavContainer = styled.nav`
  padding: 1rem;
  border-bottom: 1px solid white;
  background-color: black;

`
const StyledLink = styled(Link)`
  color: white;
  padding: 1rem;
  text-decoration: none;
`
