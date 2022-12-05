import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import TermsandCondition from './Components/TermsandCondition/TermsandCondition';
import { AccountCreatedWithGoogle } from './Components/loginwithgoogle/AccountCreatedWithGoogle';
import { VerifyOtp } from './Components/VerifyOtp/VerifyOtp';
import { OtpSuccess } from './Components/OtpSuccess/OtpSuccess';
import { ChoosePin } from './Components/ChoosePin/ChoosePin';
import { LoginSecond } from './Components/LoginSecScreen/LoginSecond';

import './app.css';

import { Mpinsuccess } from './Components/Mpinsuccess/Mpinsuccess';
import { Setpin } from './Components/SetNewPin/Setpin';
import { VerifySec } from './Components/VerifySecOTP/VerifySec';
import { OtptwoSuccess } from './Components/OtptwoSuccess/OtptwoSuccess';
import ViewProfile from './Components/ViewProfile/ViewProfile';
import ProfileCompleted from './Components/ProfileCompleted/ProfileCompleted';
import Editprofilescreen from './Components/EditProfile/Editprofilescreen';

import HolderSignature from './Components/AddAccountHolderSign/HolderSignature';
import UploadCheck from './Components/UploadCheckImage/UploadCheck';

import BankAccountDetails from './Components/BankAccountDetails/BankAccountDetails';
import Nominee from './Components/BankAccountDetails/Nominee';
import PanUpdate from './Components/BankAccountDetails/PanUpdate';
import Portfolio from './Components/Portfolio/Portfolio';
import Transaction from './Components/Portfolio/Transaction';
import Report from './Components/Portfolio/Report';
import Sip from './Components/Portfolio/Sip';

import PortfolioCompanyCard, { PortfolioProp } from './Modules/CustomCard/PortfolioCompanyCard';
import MutualFundCard, { MFProp } from './Modules/CustomCard/MutualFundCard';
import MutualFundCard2 from './Modules/CustomCard/MutualFundCard2';
import MutualFundsList from './Components/Portfolio/MutualFundsList';
import CustomizeMF from './Components/Portfolio/CustomizeMF';
import SipCard, { SipProp } from './Modules/CustomCard/SipCard';
import SipList from './Components/Portfolio/SipList';
import InvestNowScreen from './Components/InvestNowScreen/InvestNowScreen';
import SipSuccessScreen from './Components/SIPScreen/SipSuccessScreen';
import RedeemFunds from './Components/RedeemFunds/RedeemFunds';
import Insurance from './Components/Insurance/Insurance'
import ExplorePlan from './Components/Insurance/ExplorePlan';
import ChoosedPlanDetail from './Components/Insurance/ChoosedPlanDetail';
import TxnFilters from './Components/TxnFilters/TxnFilters'
//import RedeemSecScreen from './Components/RedeemSecond/RedeemSecScreen';

import SipCard2, { SipProp2 } from './Modules/CustomCard/SipCard2';

import NETbanking from './Components/CardScreen/NETbanking';



import AddFunds from './Components/Portfolio/AddFunds';
import FundDetails from './Components/FundDetails/FundDetails';
import { UnderDevelopment } from './Components/UnderDevelopment/UnderDevelopment';
//import TxnFilters from './Components/TxnFilters/TxnFilters';
import ExploreFunds from './Components/ExploreFunds/ExploreFunds';
import CancleSIP from './Components/Portfolio/CancleSIP';
import OneTimeMutualFund from './Components/OneTimeMutualFund/OneTimeMutualFund';












function App() {


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

  /*
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
  */

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/holdings" element={<Portfolio />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/sips" element={<Sip />} />
        <Route path="/uploadsignature" element={<HolderSignature />} />
        <Route path="/uploadCheque" element={<UploadCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termsandcondition" element={<TermsandCondition />} />
        <Route path="/account_created_with_google" element={<AccountCreatedWithGoogle />} />\
        <Route path="/otpverify" element={<VerifyOtp />} />
        <Route path="/otpverified" element={<OtpSuccess />} />
        <Route path="/choosepin" element={<ChoosePin />} />
        <Route path="/successpin" element={<Mpinsuccess />} />

        <Route path="/loginsecond" element={<LoginSecond />} />
        <Route path="/setnewpin" element={<Setpin />} />
        <Route path="/verifysec" element={<VerifySec />} />
        <Route path="/Otptwosuccess" element={<OtptwoSuccess />} />
        <Route path="/bad" element={<BankAccountDetails />} />
        <Route path="/nominee" element={<Nominee />} />
        <Route path="/pan_update" element={<PanUpdate />} />
        <Route path="/completedview" element={<ProfileCompleted />} />
        <Route path="/vp" element={<ViewProfile />} />
        <Route path="/editprofile" element={<Editprofilescreen />} />
        <Route path="/portfolio" element={<PortfolioCompanyCard {...data} />} />
        <Route path="/mflist" element={<MutualFundsList />} />
        <Route path="/customizemf" element={<CustomizeMF />} />
        <Route path="/sip" element={<SipList />} />
        <Route path="/addfunds" element={<AddFunds />} />

        {/*  <Route path='/sip2' element={ <SipCard2 { ...sipData }/> } /> */}
        <Route path="/sipsuccessscreen" element={<SipSuccessScreen />} />
        <Route path="/investnowscreen" element={<InvestNowScreen />} />
        <Route path="/redeemfund" element={<RedeemFunds />} />

        <Route path="/netbanking" element={<NETbanking />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/onetimemutualfundrecommendation" element={<OneTimeMutualFund />} />

        
       
        


        {/* <Route path="/funddetails" element={<FundDetails/>} /> */}


        <Route path="/insurance" element={<Insurance />} />
        <Route path="/explorePlan" element={<ExplorePlan />} />
        <Route path="/choosedPlanDetail" element={<ChoosedPlanDetail />} />

        <Route path="/Insurance" element={<Insurance />} />
        <Route path='/cancleSip' element={<CancleSIP />} />





        <Route path="/funddetails" element={<FundDetails />} />







        <Route path='/explorefunds' element={<ExploreFunds />} />



      </Routes>
    </>
  );
}

export default App;
