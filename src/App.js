import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
