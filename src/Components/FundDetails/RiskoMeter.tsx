import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import { Riskometer } from '../../Assets'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const RiskoMeter = () => {
  return (
    <>
    <Box sx={{margin:"1rem"}}>
      <Accordion sx={{
         borderRadius: "8px",
         backgroundColor:"white",
         boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
         }} >
        <AccordionSummary
        sx={{height: "84px",
            padding: "12px 12px 21px 16px",
            borderRadius:" 8px",
            margin: "0px 16px 0px 16px",
            backgroundColor: "#fff"
          }}
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel2a-content"
    id="panel2a-header"
  >
    <Box sx={{}}>
      <Typography className='risko_meter'>Riskometer</Typography>
      <Typography className='Level-of-Risk-in-the-Scheme'>Level of Risk in the Scheme</Typography>
    </Box>

  </AccordionSummary>
  <AccordionDetails>
    <Box sx={{
      margin: "1rem",

      // margin: "24px 32px",
      padding: " 12px 12px 21px 16px",
      borderRadius: "8px",

      boxSizing: "border-box",
      backgroundColor: "white",
    }}>
      <img style={{
        paddingTop: "20px",
        paddingBottom: "100px",
        maxWidth: "-webkit-fill-available"
      }} src={Riskometer} />

    </Box>
    <Typography sx={{ textAlign: "center" }} className='This-is-a-moderately-high-risk-fund'>
      This is a <span className='This-is-a-moderately-high-risk-fund .text-style-1'>moderately high risk</span> fund
    </Typography>
  </AccordionDetails>
</Accordion>

</Box>
    </>
  )
}
