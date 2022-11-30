import { Box } from '@mui/material'
import React from 'react'

import { fundChart } from '../../Assets/index'

export const FundChart = () => {
    return (
        <>
            <Box sx={{
                margin: "1rem", borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
            }}>

              
                
                <img src={fundChart} alt="box Chart" style={{
                    width: "100%",
                    height: "297px", maxWidth: "-webkit-fill-available"
                }} />
                
            </Box>
        </>
    )
}
