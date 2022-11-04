import { Typography,Box } from "@mui/material";
import { FC } from "react";

const Tac: FC<Props> = (props: Props) => {

    return (
        <Box>
            <Typography variant="h2" style={{
                width: '177px',
                height: '21px',
                margin: '0 511px 10px 0',
                font-family: 'Roboto',
                font-size: '18px',
                font-weight: 500,
                font-stretch: 'normal',
                font-style: 'normal',
                line-height: 'normal',
                letter-spacing: 'normal',
                text-align: 'left',
                color: '#3c3e42'
            }}>
                Terms and Conditions
            </Typography>
        </Box>
    )
};

export default Tac;
