import React, { useEffect, useMemo, useState } from 'react'
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

type IProps = {
  holdingInfo: any
}

export const LatestAssets = (props: IProps) => {

  const holdingInfo = useMemo(() => { return props?.holdingInfo ? props?.holdingInfo : {} }, [props?.holdingInfo]);
  const headingKeys = useMemo(() => { return Object.keys(holdingInfo ? holdingInfo : {}) }, [holdingInfo]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeTabData, setActiveTabData] = useState<any>();

  useEffect(() => {
    if (!activeTab) {
      setActiveTab(headingKeys[0]);
    }
  }, [headingKeys])

  useEffect(() => {
    if (holdingInfo[activeTab]) {
      console.log(holdingInfo[activeTab], "holdingInfo?.activeTab")
      setActiveTabData(holdingInfo[activeTab]);
    }
  }, [activeTab])

  const handleTabToggling = (item: string) => {
    setActiveTab(item);
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
            <Box >
              <Typography className='risko_meter'>Latest Asset & Portfolio Allocation</Typography>
              <Typography className='Level-of-Risk-in-the-Scheme'>as on Aug 31, 2020</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AppBar sx={{ background: 'transparent', boxShadow: 'none' }} position="static">
                <Stack direction="row" gap={1}>
                  {
                    headingKeys && headingKeys.length && headingKeys.map((item: string, index: number) => {
                      return (
                        <Button
                          key={index}
                          onClick={() => handleTabToggling(item)}
                          style={{
                            cursor: "pointer",
                            border: `1px solid ${item === activeTab ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                            borderRadius: "8px",
                            backgroundColor: `${item === activeTab ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                            textAlign: "center",
                            padding: "12px 14px"
                          }}
                        >
                          <Typography style={{ fontWeight: "500", color: `${item === activeTab ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>
                            {item}
                          </Typography>
                        </Button>
                      )
                    })
                  }
                </Stack>
              </AppBar>
            </Typography>
            <br />

            {
              activeTabData &&
                Object.keys(activeTabData).length ?
                activeTab === "marketcap" ?
                  <MarketCap
                    progressData={holdingInfo}
                    activeTab={activeTab}
                  /> :

                  // <ProgressBars
                  //   progressData={activeTabData}
                  //   activeTab={activeTab}
                  // />
                  "fgfgfg"
                : null
            }


            {/* {
              sector === true ? <ProgressBars /> : ""
            }

            {
              compony === true ? <CompaniesBars /> : ""
            }

            {
              market === true ? <MarketCap /> : " "
            } */}


          </AccordionDetails>

        </Accordion>

      </Box>
    </>
  )
}
