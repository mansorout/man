import { Box, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material";
import React, { useState } from "react";





interface LinearProgressProps {
    value:number
}

const LinearProgressBar = (props: LinearProgressProps) => {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={3}  >
          <LinearProgress variant="determinate" {...props} />
        </Box>
        {/* <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box> */}
      </Box>
    );
}

export default LinearProgressBar