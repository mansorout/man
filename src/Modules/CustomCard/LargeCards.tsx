import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import fi from 'date-fns/esm/locale/fi/index.js'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'react-loader-spinner'

interface Props {
    Heading: string,
    Text: string,
    Img: string,
    navigationKey: string,
    iconNavigation: (e: string) => void
}

function LargeCards({ Heading, Text, Img, navigationKey, iconNavigation }: Props) {
    const navigate = useNavigate()
    const style = {
        container: {
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            overFlow: "hidden",
            borderRadius: "8px",
            display: "flex",
            padding: "20px",
            alignItems: "center",
            gap: "20px"
        },
        imgContainer: {
            display: { xs: "none", sm: "block" }
        },
        imgContainer2: {
            display: { xs: "block", sm: "none" }
        }
    }


    return (
        <Box style={style.container}  onClick={() => iconNavigation(navigationKey)} sx={{cursor:"pointer"}}>
          
            <Box sx={style.imgContainer}>
                <img src={Img} height="62px" />
            </Box>
            <Box className="imGHomeCardLayout" sx={style.imgContainer2}>
                <img src={Img} height="50px" />
            </Box>
            <Box>
                <Typography className='subTitle4'>
                    {Heading}
                </Typography>
                <Typography className='body1 homeBgImageSip'>
                    {Text}
                </Typography>
            </Box>
            <IconButton style={{ backgroundColor: "#23db7b", marginLeft: "auto" }}>
                <ArrowForward style={{ color: "white" }} />
            </IconButton>
        </Box>
    )
}

export default LargeCards