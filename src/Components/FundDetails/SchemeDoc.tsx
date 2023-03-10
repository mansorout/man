import { Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { minInvest, schemeDoc } from '../../Assets'

type IProps = {
  openSchemeDocument: () => void
}

export const SchemeDoc = (props: IProps) => {
  return (
    <>

      <Box

        sx={{
          // backgroundColor:"green",
          // padding: "1rem",
          // fontFamily: "Roboto",
          // borderRadius: "0.5rem",
          // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          // backgroundColor: "white",
          // margin: "1rem",
          height: "84px",

          // margin: "24px 32px",
          padding: " 12px 12px 21px 16px",
          borderRadius: "8px",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >



        <Grid container>

          <ListItemAvatar sx={{
            width: "32px",
            height: "32px",
            marginTop: "6px",

          }}>

            <Avatar
              alt=""
              src={schemeDoc}
              // style={style.ca}
              sx={{
                width: "20px",
                height: "20px",
                padding: "10px",
                opacity: "0.9",
                backgroundColor: "#C1F0FF"

              }}
            />

          </ListItemAvatar>




          <Grid item xs sx={{ paddingTop: "10px" }}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "18px", color: "#3c3e42", fontWeight: "500"
              }}>Scheme Document</Typography>

          </Grid>
          <Grid item xs sx={{ margin: "19px 8px 0px 0px" }} >
            <Typography className='viewtext' onClick={props?.openSchemeDocument}>View</Typography>

          </Grid>
        </Grid>






      </Box>


    </>
  )
}
