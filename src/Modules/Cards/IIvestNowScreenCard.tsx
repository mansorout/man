// import { Box, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
// import { emaillogo } from '../../Assets/index'
// import { cakelogo } from '../../Assets/index'
// import { icbirthplacelogo } from '../../Assets/index'
// import { locationlogo } from '../../Assets/index'
// import { ic_income } from '../../Assets/index'
// import { wclogo } from '../../Assets/index'
// import { Editprofilebutton } from '../Buttons/Editprofilebutton'
// import { Mylocationicon } from "../../Assets/index";
// import { girlicon} from '../../Assets/index'
// import {girliconicon} from  '../../Assets/index'
// import { manicon } from '../../Assets/index'












import { makeStyles } from '@mui/styles';
// import { theme } from '@mui/theme'


// import { makeStyles } from "@material-ui/core/styles";

import React from 'react'


function IInvestNowScreenCard() {

    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


        },

        cameraIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#23db7b',
            width: '30px',
            height: '30px',
            marginLeft: "auto",
            marginRight: "auto",
            padding: '15px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
            display: "block",
            marginTop: "20px",
            marginBottom: "30px"
        },

        emailIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#64dbff',
            width: '80px',
            height: '80px',
            margin: '0 54px 22px 34px',
            padding: '20px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
        },
        ca: {
            // borderRadius: "170px 175px 175px 163px",
            backgroundColor: "#64dbff",
            width: "20px",
            height: "20px",
            padding: "18px",
            opacity: "0.9",

            // width: '80px',
            // height: '80px',
            // margin: '0 54px 22px 34px',
            // padding: '20px',
            // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            // border: 'solid 1px rgba(0, 0, 0, 0.08)',
        } as React.CSSProperties,
        // ellipse:{
        //     width:" 40px",
        //     height:" 40px",
        //     margin: "0 16px 0 0",
        //     padding: "10px",
        //     opacity: "0.3",
        //     background-color:" #64dbff",

        // } as React.CSSProperties,

    }
    // const { register, handleSubmit } = useForm();
    const onSubmit = () => alert(JSON.stringify(null));
    const item = (() => ({

    }));
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        // padding: theme.spacing(2),
        textAlign: "center",
        // color: theme.palette.text.secondary,
        
      }
    }));
    const classes = useStyles();

    return (

        <>
        </>


    )
}

export default IInvestNowScreenCard

