import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import {Logo} from '../../Assets/index'

const Header = () => {

  const style = {
    appBar : {
      backgroundColor:'white',
      width:'100%',
      height:'64px',
      position:'fixed',
      zIndex:"10000"
    } as React.CSSProperties,
    image : {
      width: '176px',
    } as React.CSSProperties
  }

  return (
    <>
       <AppBar component="nav" style={style.appBar}>
          <Toolbar>
            <img src={Logo} alt="Sprint Money" style={style.image} />
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header


