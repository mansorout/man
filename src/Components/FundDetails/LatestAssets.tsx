import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, makeStyles, Stack, Typography } from '@mui/material'
import ProgressBars from './ProgressBars'
import CompaniesBars from './CompaniesBars'
import MarketCap from './MarketCap'



// const useStyles = makeStyles((theme:any) => ({
//   button: {
//     "&:hover": {
//       boxShadow: "none",
//       background: "red"
//     },
//     "&:active": {
//       boxShadow: "none",
//       background: "yellow"
//     }
//   }
// }));


export const LatestAssets = () => {

  const [sector, setSectors] = useState<boolean>(false);
  const [compony, setCompany] = useState<boolean>(false);
  const [market, setMarketcap] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1)
  // const classes = useStyles();

  useEffect(() => {

    setSectors(true)

  }, [])


  const handleSector = () => {
    setSelected(1);
    setSectors(true)
    setCompany(false)
    setMarketcap(false)
  }

  const handleCompany = () => {
    setSelected(2);
    setSectors(false)
    setCompany(true)
    setMarketcap(false)
  }

  const handleMarktCap = () => {
    setSelected(3);
    setSectors(false)
    setCompany(false)
    setMarketcap(true)
  }








  return (
    <>
      <Box>
        <Accordion sx={{
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        }} >
          <AccordionSummary
            sx={{
              height: "84px",
              padding: "12px 12px 21px 16px",
              borderRadius: " 8px",
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
                  <Button onClick={handleSector} style={{ cursor: "pointer", border: `1px solid ${selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>
                      Sectors
                    </Typography>
                  </Button>
                  <Button onClick={handleCompany} style={{cursor:"pointer", border:`1px solid ${ selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>
                      Companies
                    </Typography>
                  </Button>
                  <Button onClick={handleMarktCap}style={{cursor:"pointer", border:`1px solid ${ selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px" }}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>
                      MarketCap
                    </Typography>
                  </Button>
                </Stack>
              </AppBar>

            </Typography>
            <br />




            {
              sector === true ? <ProgressBars /> : ""
            }

            {
              compony === true ? <CompaniesBars /> : ""
            }

            {
              market === true ? <MarketCap /> : " "
            }


          </AccordionDetails>
         
        </Accordion>

      </Box>
    </>
  )
}
