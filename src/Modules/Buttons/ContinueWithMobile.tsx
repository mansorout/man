import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisableButtonAction } from "../../Store/Global/actions/global-actions";
import { Navigate, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { login } from "../../Store/Reducers/action";
import { store } from "../../Store/Store";
import { Button, Typography } from "@mui/material";

type IProps = {
  onClick: (val: string) => void;
  number: string;
  shouldButtonDisable: boolean;
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
  const disableButtonDuringApiFetching: boolean = useSelector((state: any) => state?.globalReducer?.disableButtonDuringApiFetching);

  const validateNumber = (number: string) => {
    props?.onClick(number);
  };

  return (
    <Button
      variant="contained"
      style={style.button}
      fullWidth
      onClick={() => validateNumber(props?.number)}
      disabled={props?.shouldButtonDisable}
    >
      <Typography style={style.text} className="largeButtonText">
        Continue with Mobile Number
      </Typography>
    </Button>
  );
};

export default ContWithMobile;
