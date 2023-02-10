
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

// const style = {
//   buttonnetbank: {
//     boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.16)",
//     backgroundColor: "#3c3e42",
//     width: "100%",
//     maxWidth: "400px",
//     height: " 56px",
//     padding: "10.5px 14px 10.5px 16px"
//   } as React.CSSProperties,
//   text: {
//     color: "white"
//   },
//   texttwo: {
//     color: "#ffffff",
//     fontSize: "11px",
//     // width:"100px",
//     // height:"16px"



//   }
// }


const style = {
  buttonnetbank: {

    borderRadius: "15px",
    boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#3c3e42",
    // width: "90%",
    // maxWidth: "400px",

    height: " 100px",
    padding: "10.5px 14px 10.5px 16px"
  } as React.CSSProperties,
  text: {
    color: "white"
  },
  texttwo: {
    color: "#ffffff",
    borderRadius: "11px",
    fontSize: "18px",
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
    <>


      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }} >
        <Grid item xs={12} textAlign="center" sx={{ marginTop: { xs: "0%", md: "14%" }, position: "fixed", bottom: "2%" }}>
          {/* <Grid item xs={12} textAlign="center" > */}
          <Button variant="contained" style={style.buttonnetbank} fullWidth >
            {/* <Button variant="contained" style={style.buttonnetbank} fullWidth onClick={()=>navigate("/sipsuccessscreen")}> */}
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
              <Typography sx={{ fontSize: "18px", width: "151px" }}>Pay ₹{props?.totalAmount}</Typography>
              &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <Typography sx={{
                width: { xs: "100%", sm: "169px" },
                marginLeft: { xs: "0px", sm: "25%" },
                //  padding:" 10px 8px 9px 8px",
                borderRadius: "4px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#23db7b"
              }}
                style={style.texttwo}
                onClick={() => props?.onClick()}
              >
                <p>Make Payment</p>
              </Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
    </>
  )
};

export default NetBankingButton;


// <Grid container spacing={2}>
// <Grid item xs={12} textAlign="center">
//   <Box className="ToastFooter">
//     <Button variant="contained" style={style.buttonnetbank} fullWidth onClick={props?.onClick}>
//       {/* <Button variant="contained" style={style.buttonnetbank} fullWidth onClick={()=>navigate("/sipsuccessscreen")}> */}
//       <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
//         {/* <Typography sx={{ fontSize: "11px", width: "111px" }}>Pay ₹{props?.totalAmount}</Typography> */}
//         <Typography sx={{ fontSize: "18px", width: "151px" }}>Pay ₹{props?.totalAmount}</Typography>
//         &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
//         &nbsp;  &nbsp;  &nbsp;  &nbsp;
//         <Typography sx={{
//           // width:{xs:"123px", sm:"169px"},
//           // marginLeft:{xs:"0px", sm:"25%"},
//           // borderRadius: "4px",
//           // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//           // backgroundColor: "#23db7b"

//           width: { xs: "100%", sm: "169px" },
//           marginLeft: { xs: "0px", sm: "25%" },
//           //  padding:" 10px 8px 9px 8px",
//           borderRadius: "4px",
//           boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//           backgroundColor: "#23db7b"
//         }} style={style.texttwo}><p>Make Payments</p></Typography>
//       </Box>


//     </Button>
//   </Box>
// </Grid>
// </Grid>






