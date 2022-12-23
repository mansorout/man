import { Box, Divider, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AMFI, IRDA } from "../../Assets";

function Footer() {

    const navigate = useNavigate()

    const style = {
        footer : {
            marginTop : "80px",
        },
        
        footerLogos : {
            display : "flex",
            gap : "15px"
        },
        
        IRDAnAMFI : {
            display: "flex",
            alignItem : "center"
        },
    }

  return (
    <>
    <Box style={style.footer}>
        <Box style={style.footerLogos}>
            <Box style={style.IRDAnAMFI}>
                <img src={IRDA} width="32px" alt="IRDA" />
                <Box>
                <Typography className="caption">IRDA</Typography>
                <Typography style={{fontWeight:500}} className="caption">0777</Typography>
                </Box>
                <Divider style={{marginLeft:"15px"}} orientation="vertical"/>
            </Box>
            <Box style={style.IRDAnAMFI}>
                <img src={AMFI} width="32px" alt="IRDA" />
                <Box>
                <Typography className="caption">AMFI</Typography>
                <Typography style={{fontWeight:500}} className="caption">150601</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
    <Box>
        <Divider style={{margin:"5px 0px"}}/>
        <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
        <sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
        <br/>
        <Typography component="span" onClick={()=>navigate("/TermsandCondition")} style={{cursor:"pointer",textDecoration:"underline"}} className="textLink">Terms and conditions</Typography>
        <Typography component="span" className="body1"> and </Typography>
        <Typography component="span" style={{cursor:"pointer",textDecoration:"underline"}} className="textLink">Privacy Policy</Typography>
    </Box>
    </>
  )
}

export default Footer