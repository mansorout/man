import { Box, Typography } from '@mui/material'
import React from 'react'
import { homeConnect } from '../../Assets'

function FinancialFreedom() {

    const style={
        container:{
            backgroundImage: "linear-gradient(109deg, #6c63ff 7%, #23db7b 107%)",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius : { xs: "0px", sm: "16px"},
            
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"space-between"
        }
    }
  return (
    <Box sx={style.container}>
        <Box style={{padding:"60px 30px",}}>
            <Typography style={{color:"white", fontSize:"18px"}}>Powering your</Typography>
            <Typography style={{color:"white", fontSize:"32px", fontWeight:"500"}}>Financial Freedom</Typography>
            <Typography style={{color:"white", fontSize:"16px"}}>Enhance the effectiveness of your financial planning with SprintMoney</Typography>
        </Box>
        <Box sx={{ display:{xs:"none", sm:"none", md : "block"} }}>
            <img  style={{padding:"0px 30px",}} src={homeConnect} alt='home' width="auto" height="170px" />
        </Box>
    </Box>
  )
}

export default FinancialFreedom