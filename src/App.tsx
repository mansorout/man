import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import { Login } from './Components/Auth/Login';
import Tac from './Components/tac/Tac';
import LoginWithGoogle from './Components/loginwithgoogle/LoginWithGoogle';
import './app.css';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Header"  element={<Header/>} />
          <Route path="/tac" element={<Tac />} />
          <Route path='/lwg' element={<LoginWithGoogle />} />
        </Routes>
    </>
  );
}

export default App;
