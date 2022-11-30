import { Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { minInvest, schemeDoc } from '../../Assets'

export const SchemeDoc = () => {
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
          margin: "1rem",
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

  
}}>

  <Avatar
    alt=""
    src={schemeDoc}
    // style={style.ca}
    sx={{width:"20px",
    height:"20px",
    padding:"10px",
    opacity:"0.9",
    backgroundColor: "#64dbff"

    }}
  />

</ListItemAvatar>
                   


        
                      <Grid item xs >
                        <Typography className='risko_meter'>Scheme Document</Typography>

                      </Grid>
                      <Grid item xs  >
                        <Typography className='viewtext'>View</Typography>

                      </Grid>
                      </Grid>


      



      </Box>


    </>
  )
}
