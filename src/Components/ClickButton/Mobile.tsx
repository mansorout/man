// import { Button, ButtonProps, styled, Typography } from "@mui/material";

// const GreenColorButton = styled(Button)<ButtonProps>(({ theme }) => ({

//   width: '384px',
//   height: '48px',
//   borderRadius: '8px',
//   margin:'auto',
//   marginTop:'16px',
// //   // padding: '133px 338.9px 0 340.6px',
// //   opacity: '0.5',
// // //  mixBlendMode:'overlay',



// }));


// const  ContWithMobile = () => {
//   return (
//     <GreenColorButton variant='contained' >
//         <Typography className='Button-Text'>Continue with Mobile Number</Typography>
//     </GreenColorButton>
//   )
// };

// export default ContWithMobile;





import { Divider, Box, Button, ButtonProps, styled, Typography } from "@mui/material";
import irdaImage from "../../Assets/logo-irda.png"
import amfiImage from "../../Assets/logo-amfi@2x.png"

const ThemeButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: '8px',
    margin: 'auto',
    backgroundColor: '#23db7b',
    // marginLeft: "132px",
    width: "384px",
    height: "48px",
    marginTop: "21px",
    position:"relative",
    top:"-160px"


}));


const ContWithMobile = () => {
    


    return (
        <>
            <div>

                <ThemeButton variant='text'>
                    <Typography sx={{ textDecorationColor: 'white' }} color="White">Verify</Typography>
                </ThemeButton>
                
            
            {/* <p>Not received the code yet?<a>Resend</a> </p>
            <img alt="The house from the offer." src={irdaImage} />
            <a className="Irda_span">IRDA</a>
            <a className="span_s">0777</a>
            <img alt="The house from the offer." src={amfiImage} />
            <a className="amfi_span">AMFI</a>
            <a className="span">150601</a>
            <p className="p_term">By continuing, you're agreeing to SprintMoneyTM
                <a>Terms and conditions and Privacy Policy</a>
            </p> */}

        </div>
          
           



        </>


    )
};

export default ContWithMobile;



// <Box style={style.footer}>
//             <Box style={style.footerLogos}>
//                 <Box style={style.IRDAnAMFI}>
//                   <img src={IRDA} width="32px" alt="IRDA" />
//                   <Box>
//                     <Typography className="caption">IRDA</Typography>
//                     <Typography style={{fontWeight:500}} className="caption">0777</Typography>
//                   </Box>
//                   <Divider style={{marginLeft:"15px"}} orientation="vertical"/>
//                 </Box>
//                 <Box style={style.IRDAnAMFI}>
//                   <img src={AMFI} width="32px" alt="IRDA" />
//                   <Box>
//                     <Typography className="caption">AMFI</Typography>
//                     <Typography style={{fontWeight:500}} className="caption">150601</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box>
//               <Divider style={{margin:"5px 0px"}}/>
//               <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
//               <sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
//               <br/>
//               <Typography component="span" style={{cursor:"pointer"}} className="textLink">Terms and conditions</Typography>
//               <Typography component="span" className="body1"> and </Typography>
//               <Typography component="span" style={{cursor:"pointer"}} className="textLink">Privacy policy</Typography>
//             </Box>

