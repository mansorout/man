import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { VerifyOtp } from './Components/VerifyOtp/VerifyOtp';
import { OtpSuccess } from './Components/OtpSuccess/OtpSuccess';
import { ChoosePin } from './Components/ChoosePin/ChoosePin';



import './app.css'
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/otpverify" element={<VerifyOtp/>} />
          <Route path="/otpverified" element={<OtpSuccess/>} />
          <Route path="/choosepin" element={<ChoosePin/>} />


        </Routes>


    </>
  );
}

export default App;
