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
import SaveTax from './Components/SaveTax/SaveTax'
import SaveTaxAmount from './Components/SaveTax/SaveTaxAmount';
import RecommendationsULIP from './Components/SaveTax/RecommendationsULIP';
import RecommendationsELSS from './Components/SaveTax/RecommendationsELSS';
import SaveTaxInvestmentType from './Components/SaveTax/SaveTaxInvestmentType';
import ChoosedPlanDetail from './Components/Insurance/ChoosedPlanDetail';
// import TxnFilters from './Components/TxnFilters/TxnFilters'
//import RedeemSecScreen from './Components/RedeemSecond/RedeemSecScreen';






import AddFunds from './Components/Portfolio/AddFunds';
import NETbanking from './Components/CardScreen/NETbanking'; 

import FundDetails from './Components/FundDetails/FundDetails';
// import { UnderDevelopment } from './Components/UnderDevelopment/UnderDevelopment';\
//import TxnFilters from './Components/TxnFilters/TxnFilters';
import ExploreFunds from './Components/ExploreFunds/ExploreFunds';
import StartInvestment from './Components/Investment/startInvestment';
import CancleSIP from './Components/Portfolio/CancleSIP';
import Details from './Components/ExploreFunds/FundDetails';
import SelectedFunds from './Components/ExploreFunds/SelectedFunds';
import HealthInsurance from './Components/Insurance/HealthInsurance';
import FindInsurance from './Components/Insurance/FindInsurance';
import FindInsurance2 from './Components/Insurance/FindInsurance2';
import OneTimeMutualFund from './Components/OneTimeMutualFund/OneTimeMutualFund';
import SipCard2, { SipProp2 } from './Modules/CustomCard/SipCard2';



import InitiateSip from './Components/SIPScreen/initiateSip';
import ReplaceFunds from './Components/CommonComponents/replaceFunds';

import ULIPFound from './Components/Insurance/ULIPFound';
import ULIPCompare from './Components/Insurance/ULIPCompare';
import ProposalForm from './Components/Insurance/ProposalForm';
import ProposalFormStep2 from './Components/Insurance/ProposalFormStep2';
import ProposalFormStep3 from './Components/Insurance/ProposalFormStep3';
import ProposalFormStep4 from './Components/Insurance/ProposalFormStep4';
import TimerLoader from './Modules/NetBanking/TimerLoader';
import Loaderwithtime from './Components/CommonComponents/Circular Loader/Loaderwithtime'; 
import PaymentRequesting from './Modules/NetBanking/PaymentRequesting';
import NetBanking from './Modules/NetBanking/NetBanking';
import { VerifyonCheckout } from './Modules/VerifyOtpOnCheckout/VerifyonCheckout';
import { RedemptionDone } from './Components/RedeemFunds/RedemptionDone';
import SimpleModal from './Components/Aa/SimpleModal';
import SipLastScreen from './Components/CommonComponents/sipLastscreen';
import InsuranceDetails from './Components/Insurance/InsuranceDetails';















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

        <Route path="/sipInvestment" element={<StartInvestment />} />
        <Route path="/oneTimeInvestment" element={<StartInvestment />} />

        <Route path="/startAnSip" element={<InitiateSip />} />
        <Route path="/investNow" element={<InvestNowScreen />} />

        <Route path="/buildWealth" element={<InvestNowScreen />} />
        <Route path="/getLoan" element={<InvestNowScreen />} />

        <Route path="/redeemfund" element={<RedeemFunds />} />

        <Route path="/netbanking" element={<NETbanking />} />
        <Route path="/Insurance" element={<Insurance />} />

        <Route path="/replaceFunds" element={<ReplaceFunds />} />

        <Route path="/onetimemutualfundrecommendation" element={<OneTimeMutualFund />} />

        {/* <Route path="/funddetails" element={<FundDetails/>} /> */}

        <Route path="/insurance" element={<Insurance />} />
        <Route path="/explorePlan" element={<ExplorePlan />} />
        <Route path="/saveTax" element={<SaveTax />} />
        <Route path="/saveTax/saveTaxAmount" element={<SaveTaxAmount />} />
        <Route path="/saveTax/saveTaxInvestmentType" element={<SaveTaxInvestmentType />} />
        <Route path="/saveTax/RecommendationsULIP" element={<RecommendationsULIP />} />
        <Route path="/saveTax/RecommendationsELSS" element={<RecommendationsELSS />} />
        <Route path="/choosedPlanDetail" element={<ChoosedPlanDetail />} />

        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/healthInsurance" element={<HealthInsurance />} />
        <Route path="/healthInsurance/findInsurance" element={<FindInsurance />} />
        <Route path="/healthInsurance/findInsurance2" element={<FindInsurance2 />} />
        <Route path="/healthInsurance/letsfindrightinsurance" element={<ULIPFound/>} />
        <Route path="/healthInsurance/knowMore" element={<InsuranceDetails/>} />
        <Route path="/healthInsurance/compareULIP" element={<ULIPCompare/>} />
        <Route path="/proposalForm" element={<ProposalForm />} />
        <Route path="/proposalFormStep2" element={<ProposalFormStep2 />} />
        <Route path="/proposalFormStep3" element={<ProposalFormStep3 />} />

        <Route path="/proposalFormStep4" element={<ProposalFormStep4 />} />
        <Route path='/cancleSip' element={<CancleSIP />} />
        <Route path="/funddetails" element={<FundDetails />} />
        <Route path='/explorefunds' element={<ExploreFunds />} />
        <Route path='/details' element={<Details />} />
        <Route path='/selectedfunds' element={<SelectedFunds />} />
        <Route path='/timeLoader' element={<TimerLoader />} />
        <Route path='/loader' element={<TimerLoader />} />
        <Route path='/loaderwithtime' element={<Loaderwithtime />} />

        <Route path='/processingpayments' element={<PaymentRequesting />} />
        <Route path='/payusingnetbanking' element={<NetBanking />} />
        <Route path='/verifyoncheckout' element={<VerifyonCheckout />} />
        <Route path='/redemptiondone' element={<RedemptionDone />} />
        <Route path='/simplemodal' element={<SimpleModal />} />
        <Route path='/sipLastScreen' element={<SipLastScreen />} />

      </Routes>
    </>
  );
}

export default App;
