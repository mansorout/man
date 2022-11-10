import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

interface Props {
    Heading: string,
    Text: string,
    Img: string
}

function LargeCards({Heading, Text, Img} : Props) {
    const style = {
        container : {
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            overFlow:"hidden",
            borderRadius:"8px",
            display: "flex",
            padding : "20px",
            alignItems: "center",
            gap:"20px"
        },
        imgContainer : {
            display: { xs : "none", sm:"block"}
        },
        imgContainer2 : {
            display: {xs:"block", sm:"none"}
        }
    }
  return (
    <Box style={style.container}>
        <Box sx={style.imgContainer}>
            <img src={Img} height="62px"/>
        </Box>
        <Box sx={style.imgContainer2}>
            <img src={Img} height="50px"/>
        </Box>
        <Box>
            <Typography className='subTitle4'>
                {Heading}
            </Typography>
            <Typography className='body1'>
                {Text}
            </Typography>
        </Box>
        <IconButton style={{backgroundColor:"#23db7b", marginLeft:"auto"}}>
            <ArrowForward style={{color:"white"}}/>
        </IconButton>
    </Box>
  )
}

export default LargeCards