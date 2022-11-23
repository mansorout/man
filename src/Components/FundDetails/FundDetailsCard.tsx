import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

function FundDetailsCard() {

    const style={
        containerfundcard:{
            backgroundColor:"#6c63ff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius : { xs: "0px", sm: "16px"},
            padding:"60px 30px",
        }
    }
  return (
    <Box sx={style.containerfundcard}>
        <Box>

            <Typography style={{color:"white", fontSize:"32px",fontFamily:"Roboto"}}>Axis Small Cap Fund Regular Growth</Typography>
            <Box>
                <Chip sx={{backgroundColor:"red",width:"76px",height:"19px",}}></Chip>
                <Chip sx={{backgroundColor:"red"}}></Chip>
            </Box>
            <Typography style={{color:"white", fontSize:"18px", fontWeight:"500"}}>Financial Freedom</Typography>
            <Typography style={{color:"white", fontSize:"16px"}}>Enhance the effectiveness of your financial planning with SprintMoney</Typography>
        </Box>
    </Box>
  )
}

export default FundDetailsCard