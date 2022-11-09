
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../Store'
import { Box, style } from '@mui/system'
import { Typography } from '@mui/material'
 
function Home() {

  const style = {
    main : {
      backgroundColor : "black"
    }
  }
    //Reading state from redux
    const money = useSelector((state : any) => state.money)

    //Calling Add Funciton from redux
    const dispatch = useDispatch();
    const { addMoney, subMoney } = bindActionCreators(ActionCreators, dispatch)

    console.log(money)
  return (
      <Box style={style.main}>
        <Typography>Hello</Typography>
      </Box>
  )
}

export default Home