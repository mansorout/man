import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import { Riskometer } from '../../Assets'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, animator } from "chart.js";

export const RiskoMeter = () => {
  Chart.register(ArcElement);
  const data = {
    type: 'doughnut',
    datasets: [
      {
        data: [20, 20, 20, 20, 20],
        backgroundColor: [
          "#8ad400",
          "#d2eb00",
          "#ecb004",
          "#ff7800",
          "#ef0200"
        ],
        display: true,
        spacing: 35,
      }
    ]
  };
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

              // margin: "24px 32px",
              padding: " 12px 12px 21px 16px",
              borderRadius: "8px",

              boxSizing: "border-box",
              backgroundColor: "white",
            }}>


              <Doughnut
                data={data}
                options={{
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
                }}
              />
              <Typography sx={{ textAlign: "center" }} className='This-is-a-moderately-high-risk-fund'>
                This is a <span className='This-is-a-moderately-high-risk-fund .text-style-1'>moderately high risk</span> fund
              </Typography>
            </Box>

          </AccordionDetails>
        </Accordion>

      </Box>
    </>
  )
}
