import { Box, Breadcrumbs, Button, Grid, Link, makeStyles, Paper, Theme, Toolbar, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { blueCalender, SBICON, SuccessFullOtp } from '../../Assets';
import Navbar from '../../Components/CommonComponents/Navbar';
import Sidebar from '../../Components/CommonComponents/Sidebar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';



import CircularProgress, {
  CircularProgressProps
} from "@mui/material/CircularProgress";



// const CircularStatic=()=> {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 0 : prevProgress + 10
//       );
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }




















// props: CircularProgressProps & { value: "hi" }





function TimerLoader() {

  const [showSuccessScreen, setShowSuccessScreen] = useState<boolean>(true);
  const [processing, setprocessing] = useState<boolean>(false);

  setTimeout(() => {
    setprocessing(true)
  }, 50000)











  const number: string = useSelector((state: any) => state.contact)

  const navigate = useNavigate()

  const refContainer = useRef();






  const error: string[] = useSelector((state: any) => state.error)



  const style = {

    deducted: {

      width: "384px",
      height: "50px",
      margin: " 42px 4px 29px 0,",
      padding: " 13px 44px 13px 42px",
      opacity: " 0.3",
      bordeRadius: " 40px",
      backgroundColor: " #64dbff"
    } as React.CSSProperties,

    deductedtext: {



      fontFamily: " Roboto",
      fontSize: "11px",

      color: "#3c3e42"
    } as React.CSSProperties,


    buttons: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#626468",
      margin: "15px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(0px, -6px)"
    } as React.CSSProperties,
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh"
    } as React.CSSProperties,
    background: {
      backgroundColor: "#f9f9f9",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "flex-end",
      alignItems: "center",
    } as React.CSSProperties,
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width: "90%",
      maxWidth: "400px",
    } as React.CSSProperties,

    buttonfirst: {
      margin: "27px 4px 20px 0",
      padding: "15px",
      borderRadius: "40px",
      fontSize: "11px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#64dbff",

      maxWidth: "80%",
      transform: "translate(0px, -6px)"

    } as React.CSSProperties,




    text: {
      color: "white"
    } as React.CSSProperties,


    container: {
      backgroundColor: "white",
      // width: "50%",
      // height:"50%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
      left: "57%",
      bottom: "8%",
      position: "absolute"
    } as React.CSSProperties,

    logo: {
      width: "72px",
    } as React.CSSProperties,
  }

  return (
    <><Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid
          container
          spacing={0}
          sx={{ height: "100vh" }}
        >

          <Grid
            item
            xs={0}
            sm={1}
            md={2}
          >
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid
            container
            xs={13}
            sm={11}
            md={10}
          >
            <Grid sx={{ padding: 2 }} item xs={12}>
              <Toolbar />

              <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} item xs={12} sm={10} md={10}>
                <Toolbar />
                <Grid container sx={{ display: "flex" }} wrap='nowrap'>



                </Grid>

                <Box
                  textAlign="center"
                  sx={{
                    margin: "auto",
                    width: "304px",
                  }}
                >


                </Box>



                <Box style={style.container}>
                  <Box sx={{height:"50%", display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    


                    <Typography sx={{
                      margin: "0 59px 33px 74px",
                      fontSize: "16px",
                      fontWeight: " 500",
                      color: "#3c3e42"
                    }}>
                      Request Sent for Payment
                    </Typography>

                    <Typography sx={{
                      margin: "0 59px 33px 74px",
                      fontSize: "14px",
                      fontWeight: " 500",
                      color: "#7b7b9d;"
                    }}>
                      Please accept the payment collect request
                      from SprintMoney in your UPI app.
                    </Typography>

                    {/* <Box sx={{ position: "relative", display: "inline-flex" }}>
                      <CircularProgress variant="determinate" {...props} />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="text.secondary"
                        >{`${Math.round(props.value)}%`}</Typography>
                      </Box>
                    </Box> */}

                  </Box>
                </Box>


              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Box>

    </Box>
    </>
  )
}

export default TimerLoader







