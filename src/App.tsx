import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import './app.css'
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
