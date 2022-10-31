
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../Store'
 
function Home() {
    //Reading state from redux
    const state = useSelector((state : any) => state.money)

    //Calling Add Funciton from redux
    const dispatch = useDispatch();
    const {addMoney} = bindActionCreators(ActionCreators, dispatch)
    
  return (
      <>
        <button data-testid="home-button" onClick={()=>addMoney(50)}>Add</button>
      </>
  )
}

export default Home