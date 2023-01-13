
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const style = {
  buttonnetbank: {
    boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#3c3e42",
    width: "100%",
    maxWidth: "400px",
    height: " 56px",
    padding: "10.5px 14px 10.5px 16px"
  } as React.CSSProperties,
  text: {
    color: "white"
  },
  texttwo: {
    color: "#ffffff",
    fontSize: "11px",
    // width:"100px",
    // height:"16px"



  }
}

type IProps = {
  totalAmount: string,
  onClick: () => void
}

const NetBankingButton = (props: IProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Box className="ToastFooter">
          <Button variant="contained" style={style.buttonnetbank} fullWidth onClick={props?.onClick}>
            {/* <Button variant="contained" style={style.buttonnetbank} fullWidth onClick={()=>navigate("/sipsuccessscreen")}> */}
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
              <Typography sx={{ fontSize: "11px", width: "111px" }}>Pay ₹{props?.totalAmount}</Typography>
              &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <Typography sx={{
                width: "169px",
                marginLeft: "25%",
                borderRadius: "4px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#23db7b"
              }} style={style.texttwo}><p>Make Payments</p></Typography>
            </Box>


          </Button>
        </Box>
      </Grid>
    </Grid>

  )
};

export default NetBankingButton;







