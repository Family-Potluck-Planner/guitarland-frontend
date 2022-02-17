import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to = '/'> Home </Link>
        <Link to = '/login'> Login </Link>
        <Link to = '/register'> Register </Link>
      </nav>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route exact path = '/login' element = {<Login />} />
        <Route exact path = '/register' element = {<Register />} />
      </Routes>
    </div>
  );
}

export default App;
