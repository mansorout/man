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





import { Button, ButtonProps, styled, Typography } from "@mui/material";

const ThemeButton = styled(Button)<ButtonProps>(({ theme }) => ({
    // color: "red",
    // boxShadow: "0px 0px 0px 0px",
    // background : "#EFEFEF",
    // borderRadius: "8px",
    // textTransform: 'capitalize',
    // height: "56px",
    // padding: "25px",
    // width: "98%",

    width: '384px',
    height: '48px',
    borderRadius: '8px',
    margin:'auto',
    marginTop:'16px',
    backgroundColor:'#23db7b',
  
  
   
}));


const ContWithMobile = () => {
    return (
        <ThemeButton variant='text'>
            <Typography sx={{textDecorationColor:'white'}}>Continue with Mobile Number</Typography>
        </ThemeButton>            
    )
};

export default ContWithMobile;

