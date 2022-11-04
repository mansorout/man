import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import { Login } from './Components/Auth/Login';
import './app.css'
import { FooterBox } from './Components/FooterBox';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/footer" element={<FooterBox />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Header"  element={<Header/>} />
        </Routes>
    </>
  );
}

export default App;
