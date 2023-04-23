import './App.css';
import Header from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
