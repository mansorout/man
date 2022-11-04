
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../Store'
import { Typography } from '@mui/material'
 
function Home() {
    //Reading state from redux
    const money = useSelector((state : any) => state.money)

    //Calling Add Funciton from redux
    const dispatch = useDispatch();
    const { addMoney, subMoney } = bindActionCreators(ActionCreators, dispatch)

  return (
      <>
      </>
  )
}

export default Home