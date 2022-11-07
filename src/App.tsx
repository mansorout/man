import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import Header from './Modules/NavigationBar/NavigationBar';
import Tac from './Components/tac/Tac';
import LoginWithGoogle from './Components/loginwithgoogle/LoginWithGoogle';
import { AccountCreatedWithGoogle } from './Components/loginwithgoogle/AccountCreatedWithGoogle';
import './app.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Header"  element={<Header/>} />
          <Route path="/tac" element={<Tac />} />
          <Route path="/account_created_with_google" element={<AccountCreatedWithGoogle />} />
        </Routes>
    </>
  );
}

export default App;
