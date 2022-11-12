import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import TermsandCondition from './Components/TermsandCondition/TermsandCondition';
import { AccountCreatedWithGoogle } from './Components/loginwithgoogle/AccountCreatedWithGoogle';
import './app.css';
import { VerifyOtp } from './Components/VerifyOtp/VerifyOtp';
import { OtpSuccess } from './Components/OtpSuccess/OtpSuccess';
import { ChoosePin } from './Components/ChoosePin/ChoosePin';
import  {LoginSecond}  from './Components/LoginSecScreen/LoginSecond';

import './app.css'
import { Mpinsuccess } from './Components/Mpinsuccess/Mpinsuccess';
import  {Setpin} from './Components/SetNewPin/Setpin';
import  {VerifySec} from './Components/VerifySecOTP/VerifySec';
import  {OtptwoSuccess} from './Components/OtptwoSuccess/OtptwoSuccess';

import BankAccountDetails from './Components/BankAccountDetails/BankAccountDetails';
import Nominee from './Components/BankAccountDetails/Nominee';





function App() {

  
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/TermsandCondition" element={<TermsandCondition />} />
          <Route path="/account_created_with_google" element={<AccountCreatedWithGoogle />} />\
          <Route path="/otpverify" element={<VerifyOtp/>} />
          <Route path="/otpverified" element={<OtpSuccess/>} />
          <Route path="/choosepin" element={<ChoosePin/>} />
          <Route path="/successpin" element={<Mpinsuccess/>} />
          
          <Route path="/loginsecond" element={<LoginSecond/>} />
          <Route path="/setnewpin" element={<Setpin/>} />
          <Route path="/verifysec" element={<VerifySec/>} />
          <Route path="/Otptwosuccess" element={<OtptwoSuccess/>} />
          <Route path="/bad" element={<BankAccountDetails />} />
          <Route path="/nominee" element={<Nominee />} />
        </Routes>
    </>
  );
}

export default App;
