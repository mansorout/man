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
            // alignItems: "center",
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
        <Box sx={{padding:{xs:"10px !important", sm:"unset"},cursor:"pointer", display:"flex", justifyContent: "space-between",alignItems: "center"}} style={style.container}  onClick={() => iconNavigation(navigationKey)}>
          <Box sx={{display:"flex",alignItems: "center"}}>
          <Box sx={style.imgContainer}>
                <img src={Img} height="62px" />
            </Box>
            <Box className="imGHomeCardLayout" sx={style.imgContainer2}>
                <img src={Img} height="50px" />
            </Box>
          <Box style={{paddingLeft:"20px"}}>
                <Typography className='subTitle4'>
                    {Heading}
                </Typography>
                <Typography className='bodyHomePageText'>
                    {Text}
                </Typography>
            </Box>
          </Box>
           
            
           <Box>
           <IconButton sx={{padding:{xs:"2px", sm:"7px"}}} style={{ backgroundColor: "#23db7b",}} >
                <ArrowForward sx={{fontSize:{xs:"16px", sm:"unset"}}}  style={{ color: "white" }} />
            </IconButton>
           </Box>
        </Box>
    )
}

export default LargeCards