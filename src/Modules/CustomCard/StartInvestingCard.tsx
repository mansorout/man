import React, { useEffect } from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { bgcolor } from '@mui/system'
import ArrowForward from '@mui/icons-material/ArrowForward'

interface Props {
  BgColor: string,
  Heading: string,
  Text: string,
  Img: string
}


const StartInvestingCard = ({ BgColor, Heading, Text, Img }: Props) => {
  const style = {
    container: {
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
      overFlow: "hidden",
      borderRadius: "8px"
    },
    imgContainer: {
      height: { xs: "60px", sm: "100px" },
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: BgColor,
      display: { xs: "none", sm: "flex" }
    },
    imgContainer1: {
      height: { xs: "60px", sm: "100px" },
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: BgColor,
      display: { xs: "flex", sm: "none" }
    },
    textContainer: {
      padding: "20px"
    }
  }
 
  return (
    <Box style={style.container}>
      <Box sx={style.imgContainer}>
        <img src={Img} height="80px" />
      </Box>
      <Box sx={style.imgContainer1}>
        <img src={Img} height="55px" />
      </Box>
      <Box sx={{padding:{xs:"9px !important", sm:"20px", display:"flex", justifyContent: "flex-start",
    alignItems: "center"}}} className='subTitleText' style={style.textContainer}>
        <Box>
        <Typography className='subTitle4'>
          {Heading}
        </Typography>
        <Typography className='body1 homeBgImageSip LineHeightText'>
          {Text}
        </Typography>
        </Box>
        <Box>
        <IconButton style={{ backgroundColor: "#23db7b",}} >
                <ArrowForward style={{ color: "white" }} />
            </IconButton>
        </Box>
        {/* <Grid container>
          <Grid xs={8} sm={8} md={8} lg={9}>
          
          </Grid>
          <Grid xs={4} sm={4} md={4} lg={3}>
         
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  )
}

export default StartInvestingCard