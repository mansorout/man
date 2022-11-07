import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login'
import {Mpin} from './Components/Mpin/Mpin'
import './app.css'
import {ChoosePin} from './Components/ChoosePinScreen/ChoosePin';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/mpin" element={<Mpin/>} />
          <Route path="/ChoosePin" element={<ChoosePin/>} />





        </Routes>
    </>
  );
}

export default App;
