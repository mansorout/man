import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { bgcolor } from '@mui/system'

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
      <Box style={style.textContainer}>
        <Typography className='subTitle4'>
          {Heading}
        </Typography>
        <Typography className='body1'>
          {Text}
        </Typography>
      </Box>
    </Box>
  )
}

export default StartInvestingCard