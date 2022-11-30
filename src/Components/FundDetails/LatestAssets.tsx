import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Stack, Typography } from '@mui/material'
import ProgressBars from './ProgressBars'

export const LatestAssets = () => {
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
    <Box sx={{



    }}>
      <Typography className='risko_meter'>Latest Asset & Portfolio Allocation</Typography>
      <Typography className='Level-of-Risk-in-the-Scheme'>as on Aug 31, 2020</Typography>
    </Box>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      <AppBar sx={{ background: 'transparent', boxShadow: 'none' }} position="static">


        <Stack direction="row" gap={1}>
          <Button sx={{ background: '#dff7ea', border: "solid 1px rgba(123, 123, 157, 0.3)" }}>
            <Typography sx={{ color: "#23db7b" }} className='button_text'>
              Sectors
            </Typography>
          </Button>
          <Button sx={{ background: 'transparent', border: "solid 1px rgba(123, 123, 157, 0.3)" }}>
            <Typography className='button_text'>
              Companies
            </Typography>
          </Button>
          <Button sx={{ background: 'transparent', border: "solid 1px rgba(123, 123, 157, 0.3)" }}>
            <Typography className='button_text'>
              MarketCap
            </Typography>
          </Button>
        </Stack>
      </AppBar>

    </Typography>
    <br />
    <ProgressBars />
  </AccordionDetails>
</Accordion>

</Box>
    </>
  )
}
