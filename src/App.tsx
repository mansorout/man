import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import { Login } from './Components/Login/Login';
import './app.css'
import { FooterBox } from './Components/FooterBox';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
          </Routes>
    </>
  );
}

export default App;
