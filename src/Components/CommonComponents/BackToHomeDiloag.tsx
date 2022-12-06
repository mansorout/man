import React from 'react'
import { makeStyles } from '@mui/styles';
import { Theme, } from '@mui/material'
import { Box } from '@mui/system'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Button from '@mui/material/Button';

const useStyles: any = makeStyles((theme: Theme) => ({
    contentWrapper: {
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: 'var(--uiWhite)',
        padding: '30px 80px',
        maxWidth: '600px',
        boxSizing: 'border-box',
        textAlign: 'center',
        borderRadius: '8px',
        margin: '30px auto',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--headingMediumFontSize)',
            fontWeight: 500,
            marginBottom: '8px',
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        },
        '@media(max-width: 600px)': {
            padding: '15px 30px',
        }
    },
    iconWrapper: {
        color: 'var(--primaryColor)',
        backgroundColor: 'var(--lightGreenColor)',
        width: '100px',
        height: '100px',
        boxSizing: 'border-box',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        '& svg': {
            fontSize: '70px !important',
            '@media(max-width: 600px)': {
                fontSize: '30px !important',
            }
        },
        '@media(max-width: 600px)': {
            width: '50px',
            height: '50px',
        }
    },
    greenBtn: {
        boxShadow: '0 4px 8px 0 rgba(35, 219, 123, 0.4)',
        backgroundColor: 'var(--primaryColor)',
    },
    grayBtn: {
        marginTop: '20px !important',
        boxShadow: '0 4px 8px 0 rgba(35, 219, 123, 0.4)',
        backgroundColor: '#626468',
    },
    btnGroup: {
        marginTop: "30px",
    }
}))

interface BackToHomeDiloagPropsType {
    icon: React.ReactElement<any>;
    heading: string;
    paragraph: string;
    greenBtnText: string;
    grayBtnText: string;
    greenBtnAction: () => void;
    grayBtnAction: () => void;
}

const BackToHomeDiloag = (props: BackToHomeDiloagPropsType) => {
    const classes = useStyles()
    return (
        <Box className={classes.contentWrapper}>
            <Box>
                <Box className={classes.iconWrapper}>
                    {props.icon}
                </Box>
                <p>{props.heading}</p>
                <span>{props.paragraph}</span>
                <Box className={classes.btnGroup}>
                    <Button sx={{ width: '100%' }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} className={classes.greenBtn} onClick={props.greenBtnAction} >{props.greenBtnText}</Button>

                    <Button sx={{ width: '100%' }} variant="contained" style={{ backgroundColor: '#626468', color: 'var(--uiWhite)', fontWeight: '500', }} className={classes.grayBtn} onClick={props.grayBtnAction}>{props.grayBtnText}</Button>

                </Box>
            </Box>
        </Box>
    )
}

export default BackToHomeDiloag