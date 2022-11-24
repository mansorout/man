import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import TermsandCondition from './Components/TermsandCondition/TermsandCondition';
import { AccountCreatedWithGoogle } from './Components/loginwithgoogle/AccountCreatedWithGoogle';
import { VerifyOtp } from './Components/VerifyOtp/VerifyOtp';
import { OtpSuccess } from './Components/OtpSuccess/OtpSuccess';
import { ChoosePin } from './Components/ChoosePin/ChoosePin';
import { LoginSecond }  from './Components/LoginSecScreen/LoginSecond';

import './app.css';

import { Mpinsuccess } from './Components/Mpinsuccess/Mpinsuccess';
import  {Setpin} from './Components/SetNewPin/Setpin';
import  {VerifySec} from './Components/VerifySecOTP/VerifySec';
import  {OtptwoSuccess} from './Components/OtptwoSuccess/OtptwoSuccess';
import ViewProfile from './Components/ViewProfile/ViewProfile';
import ProfileCompleted from './Components/ProfileCompleted/ProfileCompleted';
import Editprofilescreen from './Components/EditProfile/Editprofilescreen';

import HolderSignature from './Components/AddAccountHolderSign/HolderSignature';
import UploadCheck from './Components/UploadCheckImage/UploadCheck';

import BankAccountDetails from './Components/BankAccountDetails/BankAccountDetails';
import Nominee from './Components/BankAccountDetails/Nominee';
import PanUpdate from './Components/Pan/PanUpdate';

import PortfolioCompanyCard, { PortfolioProp } from './Modules/CustomCard/PortfolioCompanyCard';
import MutualFundCard, { MFProp } from './Modules/CustomCard/MutualFundCard';
import MutualFundsList from './Components/Portfolio/MutualFundsList';
import CustomizeMF from './Components/Portfolio/CustomizeMF';
import SipCard,  { SipProp } from './Modules/CustomCard/SipCard';
import SipList from './Components/Portfolio/SipList';

import SipCard2, { SipProp2 } from './Modules/CustomCard/SipCard2';

function App() {

  //console.log('MiraeLogo', MiraeLogo);

  const data: PortfolioProp = {
      image: '../../Assets/Portfolio/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: ['Large Cap', 'Equity'],
      price: 30000,
      investedValue: 125000,
      currentValue: 146625,
      fiveYearReturn: 21625,
      fiveYearReturnGrowth: 17.36,
  };

  const mfData: MFProp = {
    logo: '/Miraelogo.svg',
    title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
    fundType: ['Large Cap', 'Equity'],
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
  };

  const sipData: SipProp2 = {
    logo: '/Miraelogo.svg',
    title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
    orderNo: 'INF209K01090',
    fundType: ['Large Cap', 'Equity'],
    mandatePending: true,
    sipDate: '9th of every month',
    sipAmount: 5000,
    status: 'Active',
    stopMessage: 'Requested to stop SIP on 25 Nov, 2020',
  };

  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/uploadsignature" element={<HolderSignature/>} />
          <Route path="/uploadCheque" element={<UploadCheck/>} />
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
          <Route path="/pan_update" element={<PanUpdate />} />
          <Route path="/completedview" element={<ProfileCompleted/>} />
          <Route path="/vp" element={<ViewProfile/>} />
          <Route path="/editprofile" element={<Editprofilescreen/>} />
          <Route path="/portfolio" element={ <PortfolioCompanyCard { ...data } /> } />
          <Route path="/mflist" element={ <MutualFundsList />} />
          <Route path="/customizemf" element={ <CustomizeMF /> } />
          <Route path="/sip" element={ <SipList /> } />
          <Route path='/sip2' element={ <SipCard2 { ...sipData }/> } />
          


         
        </Routes>
    </>
  );
}

export default App;
