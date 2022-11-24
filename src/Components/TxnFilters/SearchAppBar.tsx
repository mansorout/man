import * as React from "react";

import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Stack } from '@mui/material';


const Search = styled("div")(({ theme }) => ({
  
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 23,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:"black",
}));
const FilterIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: "30px",
  width: "30px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:"#23db7b",
  color:"white",
  borderRadius:"50%"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius:"4PX",
  border: "solid 1px #dddfe2",
  boxshadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
  color: "#919eb",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{background: 'transparent', boxShadow: 'none'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
           <Stack direction="row" gap={1}>
          <Button variant="outlined" sx={{ background: 'transparent',width:"56px" }}>
            All
          </Button>
          <Button variant="outlined" sx={{ background: 'transparent' }}>
            Pending
          </Button>
          <Button variant="outlined" sx={{ background: 'transparent' }}>
            Successful
          </Button>
          <Button variant="outlined" sx={{ background: 'transparent'}}>
            Rejected
          </Button>
          </Stack>

          <Search>
            

            <SearchIconWrapper>
              <SearchIcon />
               
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search funds…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <FilterIconWrapper>
        <FilterAltOutlinedIcon  />
        </FilterIconWrapper>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}

