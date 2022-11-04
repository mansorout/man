
import AppBar from '@mui/material/AppBar';
import logo from '../../src/Assets/Sprint_money_logo.svg'
const Header = () => {
  return (
    < >
       <AppBar sx={{
          backgroundColor:'white',
           width:'100%',
           height:'64px',
           position:'static',
            }}>
           <img src={logo} alt="Will Back Soon" style={{
            width: '176px',
            height: '32.9px',
            marginTop:'15.5px',
            marginLeft:'32px',
            marginRight:''
  }} />
          </AppBar>
      

      </>
  )
}

export default Header


