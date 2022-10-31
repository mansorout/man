
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

  return (
      <>
        <h1>{money}</h1>
        <button data-testid="home-button" onClick={ ()=>addMoney(50) }>Add</button>
        <button data-testid="subtract-money" onClick={()=>subMoney(10)}>SubMoney</button>
      </>
  )
}

export default Home