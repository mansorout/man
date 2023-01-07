import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function SimpleSnackbar() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const action = (
        <>
            <Button sx={{
                backgroundColor: "#23db7b", ml: 1,
                "&.MuiButtonBase-root:hover": {
                    bgcolor: "#23db7b"
                }
            }} onClick={() => alert("hiii")}>
                <Typography
                    sx={{
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "500",
                        textTransform: "capitalized"

                    }}
                >

                    Buy Now
                </Typography>
            </Button>
        </>
    );

    return (
        <>
            <Button onClick={handleClick}>Open simple snackbar</Button>
            <Snackbar
                open={open}
                // autoHideDuration={6000}
                onClose={handleClose}
                message="3 Funds Selected"
                action={action}
            />
        </>
    );
}
