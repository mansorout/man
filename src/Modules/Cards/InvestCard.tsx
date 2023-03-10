import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InvestButton } from "../Buttons/InvestButton";
import Stack from "@mui/material/Stack";
import { Grid, TextField } from "@mui/material";
import List from "@mui/material/List";
import { globalConstant } from "../../Utils/globalConstant";
import './style.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const style = {
  containertwo: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
    borderRadius: "8px",
    padding: "21px 40px",
  },
  dividerBox: {
    width: "470px",
    height: "1px",
    margin: "13.5% 0 17.5%",
    opacity: "0.2",
    backgroundColor: "#acb4bf",
  },

  cameraIcon: {
    width: "448px",
    height: " 67px",
    margin: "0 0 14px",
    objectFit: "contain",
  },

  emailIcon: {
    borderRadius: "170px 175px 175px 163px",
    backgroundColor: "#64dbff",
    width: "80px",
    height: "80px",
    margin: "0 54px 22px 34px",
    padding: "20px",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 8%)",
    border: "solid 1px rgba(0, 0, 0, 0.08)",
  },
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    margin: "16px",
    width: "90%",
    maxWidth: "400px",
    transform: "translate(8px, -23px)",
  },
  Axisstyle: {
    width: "14px",
    height: "14px",
    // margin: "8px 67px 0 0",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#7b7b9d",
  },
  ca: {
    backgroundColor: "#64dbff",
    width: "20px",
    height: "20px",
    padding: "10px",

  } as React.CSSProperties,
  text: {
    color: "white",
  },
};

type IProps = {
  cardType: string;
  heading: string;
};

export default function InvestCard(props: IProps) {
  return (
    <>

 

    </>
  );
}
