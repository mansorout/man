
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../Store'
 
function Home() {
    //Reading state from redux
    const money = useSelector((state : any) => state.money)

    //Calling Add Funciton from redux
    const dispatch = useDispatch();
    const { addMoney, subMoney } = bindActionCreators(ActionCreators, dispatch)

    console.log(money)
  return (
      <>
        <button onClick={()=>addMoney(10)}>plus</button>
      </>
  )
}

export default Home