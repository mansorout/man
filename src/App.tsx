import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import TermsandCondition from './Components/TermsandCondition/TermsandCondition';
import { AccountCreatedWithGoogle } from './Components/loginwithgoogle/AccountCreatedWithGoogle';
import './app.css';
import { VerifyOtp } from './Components/VerifyOtp/VerifyOtp';
import { OtpSuccess } from './Components/OtpSuccess/OtpSuccess';


import './app.css'
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/TermsandCondition" element={<TermsandCondition />} />
          <Route path="/account_created_with_google" element={<AccountCreatedWithGoogle />} />
          <Route path="/otpverify" element={<VerifyOtp/>} />
          <Route path="/otpverified" element={<OtpSuccess/>} />
        </Routes>
    </>
  );
}

export default App;
