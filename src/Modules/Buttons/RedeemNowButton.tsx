
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


  const RedeemNowButtom = () => {

    const style = {
        redeembutton : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "15px",
            width:"90%",
            maxWidth:"400px",
             transform:"translate(0px, 1px)"
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }
    // width: 1072px;
    // height: 78px;
    // margin: 254px 0 0;
    // padding: 15px 344px;
    // box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
    // background-color: #fff;

    const navigate = useNavigate()

    return (
        <Button  variant="contained" style={style.redeembutton} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Redeem Now</Typography>
        </Button> 
    
    )
};

export default RedeemNowButtom ;
// onClick={()=>navigate("/choosepin")}