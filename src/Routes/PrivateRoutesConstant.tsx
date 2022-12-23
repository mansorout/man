import HolderSignature from "../Components/AddAccountHolderSign/HolderSignature"
import BankAccountDetails from "../Components/BankAccountDetails/BankAccountDetails"
import Nominee from "../Components/BankAccountDetails/Nominee"
import PanUpdate from "../Components/BankAccountDetails/PanUpdate"
import ReplaceFunds from "../Components/CommonComponents/replaceFunds"
import Editprofilescreen from "../Components/EditProfile/Editprofilescreen"
import Home from "../Components/Home/Home"
import ChoosedPlanDetail from "../Components/Insurance/ChoosedPlanDetail"
import ExplorePlan from "../Components/Insurance/ExplorePlan"
import StartInvestment from "../Components/Investment/startInvestment"
import InvestNowScreen from "../Components/InvestNowScreen/InvestNowScreen"
import { AccountCreatedWithGoogle } from "../Components/loginwithgoogle/AccountCreatedWithGoogle"
import OneTimeMutualFund from "../Components/OneTimeMutualFund/OneTimeMutualFund"
import { OtptwoSuccess } from "../Components/OtptwoSuccess/OtptwoSuccess"
import AddFunds from "../Components/Portfolio/AddFunds"
import CustomizeMF from "../Components/Portfolio/CustomizeMF"
import MutualFundsList from "../Components/Portfolio/MutualFundsList"
import Portfolio from "../Components/Portfolio/Portfolio"
import Report from "../Components/Portfolio/Report"
import Sip from "../Components/Portfolio/Sip"
import SipList from "../Components/Portfolio/SipList"
import Transaction from "../Components/Portfolio/Transaction"
import ProfileCompleted from "../Components/ProfileCompleted/ProfileCompleted"
import RedeemFunds from "../Components/RedeemFunds/RedeemFunds"
import PaymentOptionCmp from "../Components/SaveTax/PaymentOptionCmp"
import RecommendationsELSS from "../Components/SaveTax/RecommendationsELSS"
import RecommendationsULIP from "../Components/SaveTax/RecommendationsULIP"
import SaveTax from "../Components/SaveTax/SaveTax"
import SaveTaxAmount from "../Components/SaveTax/SaveTaxAmount"
import SaveTaxInvestmentType from "../Components/SaveTax/SaveTaxInvestmentType"
import TaxCanSave from "../Components/SaveTax/TaxCanSave"
import InitiateSip from "../Components/SIPScreen/initiateSip"
import SipSuccessScreen from "../Components/SIPScreen/SipSuccessScreen"
import UploadCheck from "../Components/UploadCheckImage/UploadCheck"
import ViewProfile from "../Components/ViewProfile/ViewProfile"
import NetBanking from "../Modules/NetBanking/NetBanking"
import Insurance from '../Components/Insurance/Insurance'
import HealthInsurance from "../Components/Insurance/HealthInsurance"
import FindInsurance from "../Components/Insurance/FindInsurance"
import FindInsurance2 from "../Components/Insurance/FindInsurance2"
import CancleSIP from "../Components/Portfolio/CancleSIP"
import FundDetails from "../Components/FundDetails/FundDetails"
import ExploreFunds from "../Components/ExploreFunds/ExploreFunds"
import UlipCard from "../Modules/Cards/ULIP/UlipCard"
import UlipPlanPerformanceCard from "../Modules/Cards/ULIP/UlipPlanPerformanceCard"
import UlipBox from "../Components/ULIP/UlipBox"
import ULIPHeader from "../Modules/Cards/ULIP/ULIPHeader"
import ULIPRecommendations from "../Components/ULIP/ULIPRecommendations"
import ULIPOptions from "../Components/ULIP/ULIPOptions"
import TransactionsDone from "../Components/ULIP/TransactionsDone"
import ULIPHome from "../Components/ULIP/ULIPHome"
import ULIPFound from "../Components/Insurance/ULIPFound"
import { ULIPCompare } from "../Store/Duck/ULIPCompare"
import InsuranceDetails from "../Components/Insurance/InsuranceDetails"
import ProposalForm from "../Components/Insurance/ProposalForm"
import ProposalFormStep2 from "../Components/Insurance/ProposalFormStep2"
import ProposalFormStep3 from "../Components/Insurance/ProposalFormStep3"
import ProposalFormStep4 from "../Components/Insurance/ProposalFormStep4"
import Details from "../Components/ExploreFunds/FundDetails"
import SelectedFunds from "../Components/ExploreFunds/SelectedFunds"
import TimerLoader from "../Modules/NetBanking/TimerLoader"
import Loaderwithtime from "../Components/CommonComponents/Circular Loader/Loaderwithtime"
import PaymentRequesting from "../Modules/NetBanking/PaymentRequesting"
import { VerifyonCheckout } from "../Modules/VerifyOtpOnCheckout/VerifyonCheckout"
import { RedemptionDone } from "../Components/RedeemFunds/RedemptionDone"
import SimpleModal from "../Components/CommonModals/SimpleModal"
import SipLastScreen from "../Components/CommonComponents/sipLastscreen"
import UlipDropDownFilter from "../Components/ULIP/UlipDropDownFilter"
import DropDownFilter from "../Components/TxnFilters/DropDownFilter"
import { OtpSuccess } from "../Components/OtpSuccess/OtpSuccess"

type prConstant = {
  path: string,
  component: React.ReactElement
}

export const privateRoutesConstants: prConstant[] = [
  {
    path: "/home",
    component: <Home />
  },
  {
    path: "/portfolio",
    component: <Portfolio />
  },
  {
    path: "/holdings",
    component: <Portfolio />
  },
  {
    path: "/transactions",
    component: <Transaction />
  },
  {
    path: "/reports",
    component: <Report />
  },
  {
    path: "/sips",
    component: <Sip />
  },
  {
    path: "/uploadsignature",
    component: <HolderSignature />
  },
  {
    path: "/uploadCheque",
    component: <UploadCheck />
  },
  {
    path: "/account_created_with_google",
    component: <AccountCreatedWithGoogle />
  },
  {
    path: "/otpverified",
    component: <OtpSuccess />
  },
  {
    path: "/Otptwosuccess",
    component: <OtptwoSuccess />
  },
  {
    path: "/bad",
    component: <BankAccountDetails />
  },
  {
    path: "/nominee",
    component: <Nominee />
  },
  {
    path: "/completedview",
    component: <ProfileCompleted />
  },
  {
    path: "/viewprofile",
    component: <ViewProfile />
  },
  {
    path: "/editprofile",
    component: <Editprofilescreen />
  },
  {
    path: "/sipInvestment",
    component: <StartInvestment />
  },
  {
    path: "/oneTimeInvestment",
    component: <StartInvestment />
  },
  {
    path: "/startAnSip",
    component: <InitiateSip cardType={''} heading={''} />
  },
  {
    path: "/investNow",
    component: <InvestNowScreen cardType={''} heading={''} />
  },
  {
    path: "/mflist",
    component: <MutualFundsList />
  },
  {
    path: "/onetimemutualfundrecommendation",
    component: <OneTimeMutualFund />
  },
  {
    path: "/customizemf",
    component: <CustomizeMF />
  },
  {
    path: "/addfunds",
    component: <AddFunds />
  },
  {
    path: "/replaceFunds",
    component: <ReplaceFunds />
  },
  {
    path: "/sipsuccessscreen",
    component: <SipSuccessScreen />
  },
  {
    path: "/sip",
    component: <SipList />
  },
  {
    path: "/buildWealth",
    component: <InvestNowScreen cardType={''} heading={''} />
  },
  {
    path: "/getLoan",
    component: <InvestNowScreen cardType={''} heading={''} />
  },
  {
    path: "/redeemfund",
    component: <RedeemFunds />
  },
  {
    path: "/netbanking",
    component: <NetBanking />
  },
  {
    path: "/explorePlan",
    component: <ExplorePlan />
  },
  {
    path: "/saveTax",
    component: <SaveTax />
  },
  {
    path: "/saveTax/saveTaxAmount",
    component: <SaveTaxAmount />
  },
  {
    path: "/saveTax/saveTaxInvestmentType",
    component: <SaveTaxInvestmentType />
  },
  {
    path: "/saveTax/RecommendationsULIP",
    component: < RecommendationsULIP />
  },
  {
    path: "/saveTax/RecommendationsELSS",
    component: <RecommendationsELSS />
  },
  {
    path: "/saveTax/taxCanSave",
    component: <TaxCanSave />
  },
  {
    path: "/saveTax/paymentOptionCmp",
    component: <PaymentOptionCmp />
  },
  {
    path: "/choosedPlanDetail",
    component: <ChoosedPlanDetail />
  },
  {
    path: "/Insurance",
    component: <Insurance />
  },
  {
    path: "/healthInsurance",
    component: <HealthInsurance />
  },
  {
    path: "/healthInsurance/findInsurance",
    component: <FindInsurance />
  },
  {
    path: "/healthInsurance/findInsurance2",
    component: <FindInsurance2 />
  },
  {
    path: "/cancleSip",
    component: <CancleSIP />
  },
  {
    path: "/funddetails",
    component: <FundDetails />
  },
  {
    path: "/explorefunds",
    component: <ExploreFunds />
  },
  {
    path: "/ulipcard",
    component: <UlipCard />
  },
  {
    path: "/ulipppcard",
    component: <UlipPlanPerformanceCard />
  },
  {
    path: "/ulip/investoptions",
    component: <UlipBox />
  },
  {
    path: "/ulipheader",
    component: <ULIPHeader />
  },
  {
    path: "/ulip/recommendations",
    component: <ULIPRecommendations />
  },
  {
    path: "/ulip/options",
    component: <ULIPOptions />
  },

  {
    path: "/ulip/txndone",
    component: <TransactionsDone />
  },
  {
    path: "/ulip/home",
    component: <ULIPHome />
  },
  {
    path: "/healthInsurance/letsfindrightinsurance",
    component: <ULIPFound />
  },
  {
    path: "/healthInsurance/compareULIP",
    component: <ULIPCompare />
  },
  {
    path: "/healthInsurance/letsfindrightinsurance",
    component: <ULIPFound />
  },
  {
    path: "/healthInsurance/knowMore",
    component: <InsuranceDetails />
  },
  {
    path: "/proposalForm",
    component: <ProposalForm />
  },
  {
    path: "/proposalFormStep2",
    component: <ProposalFormStep2 />
  },
  {
    path: "/proposalFormStep3",
    component: <ProposalFormStep3 />
  },
  {
    path: "/proposalFormStep4",
    component: <ProposalFormStep4 />
  },
  {
    path: "/details",
    component: <Details />
  },
  {
    path: "/selectedfunds",
    component: <SelectedFunds />
  },
  {
    path: "/timeLoader",
    component: <TimerLoader />
  },
  {
    path: "/loader",
    component: <TimerLoader />
  },
  {
    path: "/loaderwithtime",
    component: <Loaderwithtime />
  },
  {
    path: "/processingpayments",
    component: <PaymentRequesting />
  },
  {
    path: "/payusingnetbanking",
    component: <NetBanking />
  },
  {
    path: "/verifyoncheckout",
    component: <VerifyonCheckout />
  },
  {
    path: "/redemptiondone",
    component: <RedemptionDone />
  },
  {
    path: "/simplemodal",
    component: <SimpleModal />
  },
  {
    path: "/sipLastScreen",
    component: <SipLastScreen />
  },
  {
    path: "/filters",
    component: <UlipDropDownFilter />
  },
  {
    path: "/ddfilters",
    component: <DropDownFilter />
  },
  {
    path: "/panUpdate",
    component: <PanUpdate />
  },
]