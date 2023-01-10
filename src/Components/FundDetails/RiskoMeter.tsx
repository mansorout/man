import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { Riskometer } from '../../Assets'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, animator } from "chart.js";
import ReactSpeedometer from "react-d3-speedometer";

type IProps = {
  holdingInfo: any
}

type customSegmentLabels ={
  text: 'string',
  position: 'string',
  color: 'string',
}

const chartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    },
    tooltip: {
      enabled: false
    }
  },
  layout: {
    padding: {


    }
  },
  rotation: -90,
  circumference: 180,
  cutout: "60%",
  maintainAspectRatio: true,
  responsive: true,
}

const enumChartMessages = {
  LOW_RISK : "low",
  MODERATELY_LOW_RISK_FUND: "Low to Moderate",
  MODERATE_RISK_FUND:"Moderate",
  MODERATELY_HIGH_RISK_FUND: "Moderately High",
  HIGH_RISK_FUND: "High",
  VERY_HIGH_RISK: "Very High"

}

export const RiskoMeter = (props: IProps) => {
  const [riskValue, setRiskValue] = useState<any>("");
  Chart.register(ArcElement);

  useEffect(() => {
    console.log(props?.holdingInfo.riskometer);
    setRiskValue(6)
    // setRiskValue(props?.holdingInfo.riskometer)
  }, [props?.holdingInfo]);

  useEffect(() => { })
  console.log(riskValue)

  const chartData: any = useMemo(() => {
    return {
      type: 'doughnut',
      datasets: [
        {
          data: [20, 20, 20, 20, 20, 20],
          needleValue: 6,
          backgroundColor: [
            "#23db7b",
            "#8ad400",
            "#d2eb00",
            "#ecb004",
            "#ff7800",
            "#ef0200",

          ],
          display: true,
          spacing: 35,
        }
      ]
    }
  }, [props?.holdingInfo]);



  // const data = {
  //   type: 'doughnut',
  //   datasets: [
  //     {
  //       data: [20, 20, 20, 20, 20],
  //       needleValue: 6,
  //       backgroundColor: [
  //         "#8ad400",
  //         "#d2eb00",
  //         "#ecb004",
  //         "#ff7800",
  //         "#ef0200"
  //       ],
  //       display: true,
  //       spacing: 35,
  //     }
  //   ]
  // };

  return (
    <>
      <Box >
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
            <Box sx={{}}>
              <Typography className='risko_meter'>Riskometer</Typography>
              <Typography className='Level-of-Risk-in-the-Scheme'>Level of Risk in the Scheme</Typography>
            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              margin: "1rem",


              padding: " 12px 12px 21px 16px",
              borderRadius: "8px",

              boxSizing: "border-box",
              backgroundColor: "white",
            }}>


              {/* <Doughnut
                data={chartData}
                options={{
                  plugins: {
                    legend: {
                      display: true,
                      position: 'bottom'
                    },
                    tooltip: {
                      enabled: true
                    }
                  },
                  layout: {
                    padding: {


                    }
                  },
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              /> */}
              <ReactSpeedometer
              currentValueText={""}
              needleColor={"black"}
                maxValue={6}
                value={riskValue - (.5)}
                segments={6}
                width={400}
                // gap= {35}
                segmentColors={["#23db7b",
                  "#8ad400",
                  "#d2eb00",
                  "#ecb004",
                  "#ff7800",
                  "#ef0200",]}
                  // needleHeightRatio={1.9}

                  // customSegmentLabels={[
                  //   {
                  //     text: 'Very Bad',
                  //     position: 'INSIDE',
                  //     color: '#555',
                  //   },
                  //   {
                  //     text: 'Bad',
                  //     position: 'INSIDE',
                  //     color: '#555',
                  //   },
                  //   {
                  //     text: 'Ok',
                  //     position: 'INSIDE',
                  //     color: '#555',
                  //     fontSize: '19px',
                  //   },
                  //   {
                  //     text: 'Good',
                  //     position: 'INSIDE',
                  //     color: '#555',
                  //   },
                  //   {
                  //     text: 'Very Good',
                  //     position: 'INSIDE',
                  //     color: '#555',
                  //   },
                  // ]}
             
              />
              <Typography sx={{ textAlign: "center" }} className='This-is-a-moderately-high-risk-fund'>

                This is a <span className='This-is-a-moderately-high-risk-fund .text-style-1'> {riskValue === 6  ? enumChartMessages.VERY_HIGH_RISK : riskValue === 5 ? enumChartMessages.HIGH_RISK_FUND :  riskValue === 4 ? enumChartMessages.MODERATELY_HIGH_RISK_FUND : riskValue === 3 ? enumChartMessages.MODERATE_RISK_FUND : riskValue === 2 ? enumChartMessages.MODERATELY_LOW_RISK_FUND : riskValue === 1 ? enumChartMessages.LOW_RISK : "" } risk  </span> fund
              </Typography>
            </Box>

            

          </AccordionDetails>
        </Accordion>

      </Box>
    </>
  )
}
