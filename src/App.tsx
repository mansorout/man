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
import ViewProfile from './Components/ViewProfile/ViewProfile';
import ProfileCompleted from './Components/ProfileCompleted/ProfileCompleted';

import HolderSignature from './Components/AddAccountHolderSign/HolderSignature';
import UploadCheck from './Components/UploadCheckImage/UploadCheck';





function App() {

  
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/accountholder" element={<HolderSignature/>} />
          <Route path="/uploadCheck" element={<UploadCheck/>} />
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
          <Route path="/Otptwosuccess" element={<OtptwoSuccess/>}/>
          
          <Route path="/completedview" element={<ProfileCompleted/>} />
          <Route path="/vp" element={<ViewProfile/>} />

         
        </Routes>
    </>
  );
}

export default App;
