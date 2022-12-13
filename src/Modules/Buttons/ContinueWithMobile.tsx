import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { login } from "../../Store/Reducers/action";
import { store } from "../../Store/Store";

type IProps = {
  onClick: (val: string) => void;
  number: string;
};

const style = {
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    marginBottm: "10px",
    width: "90%",
    maxWidth: "400px",
  } as React.CSSProperties,
  text: {
    color: "white",
  },
};
const ContWithMobile = (props: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addError, removeError, addContactNumber } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const validateNumber = (number: string) => {
    props?.onClick(number);
  };

  return (
    <Button
      variant="contained"
      style={style.button}
      fullWidth
      onClick={() => validateNumber(props?.number)}
    >
      <Typography style={style.text} className="largeButtonText">
        Continue with Mobile Number
      </Typography>
    </Button>
  );
};

export default ContWithMobile;
