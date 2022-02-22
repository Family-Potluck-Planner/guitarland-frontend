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
        <NavH1>GuitarLandia </NavH1>
        <StyledLink to = '/'> Home </StyledLink>
        <StyledLink to = '/login'> Login </StyledLink>
        <StyledLink to = '/signup'> Sign-Up </StyledLink>
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
  border-bottom: 1px solid ${pr => pr.theme.secondaryColor};
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledLink = styled(Link)`
  color: white;
  padding: 1rem;
  text-decoration: none;
`
const NavH1 = styled.h1`
  margin: 0 5rem 0 0;
  font-size: 1.5rem;
  border: 1px solid white;
  padding: .25rem 1rem;
  border-radius: 99999px;
`
