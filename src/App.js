import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import Login from './components/login';
import SignUp from './components/signup';
import Events from './components/events';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to = '/'> Home </Link>
        <Link to = '/login'> Login </Link>
        <Link to = '/signup'> SignUp </Link>
        <Link to = '/events'> Events </Link>
      </nav>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route exact path = '/login' element = {<Login />} />
        <Route exact path = '/signup' element = {<SignUp />} />
        <Route exact path = '/events' element = { <Events /> } />
      </Routes>
    </div>
  );
}

export default App;
