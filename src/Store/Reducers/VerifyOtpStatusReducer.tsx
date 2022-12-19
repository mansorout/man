import { toast } from "react-toastify"
import { globalConstant } from "../../Utils/globalConstant"

const initialState: any = []

export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return action.payload
    }
    case 'LOGIN_FAILED':{
      // return action.payload
      // toast.warn(globalConstant.ERROR_OCCURRED);
      break
    }
    default:
      return state;
  }
}