import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import {Mpin} from "./Components/MpinVarify/Mpin"
import './app.css'
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/mpin" element={<Mpin/>} />
        </Routes>
    </>
  );
}

export default App;
