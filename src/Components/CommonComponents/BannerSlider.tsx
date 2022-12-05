import React from 'react'
import Slider from "react-slick";
import Button from '@mui/material/Button';
import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles: any = makeStyles((theme: Theme) => ({
    slideContentWrapper: {
        // backgroundColor: "var(--ui1Color)",
        color: 'var(--uiWhite)',
        width: 'calc(100%) - 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '15px',
        borderRadius: '15px',
        '@media(max-width: 485px)': {
            flexDirection: 'column-reverse',
            alignItems: 'flex-start',
            '& b': {
                marginTop: '15px',
                display: 'inline-block'
            },
            '& p': {
                margin: '10px 0px'
            }
        }
    },
    slideImage: {
        paddingRight: '30px',
        margin: '0px 15px',
        '@media(max-width: 767px)': {
            marginTop: '15px'
        }
    },
    flexCommon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
}));

interface BannerSliderPropTypes {
    sliderDetails: {
        topHeading: string;
        topSubHeading: string;
        heading: string;
        subHeading: string;
        bgColor: string;
        imgUrl: string;
        btnText: string;
    }[];
    sliderSetting: any;
}

const BannerSlider = (props: BannerSliderPropTypes) => {
    const classes = useStyles()
    return (
        <div>

            <Slider {...props.sliderSetting}>
                {
                    props.sliderDetails.map((item) => (
                        <div>
                            <div className={classes.slideContentWrapper} style={{ backgroundColor: item.bgColor }}>
                                <div className="slideContent">
                                    <b style={{ fontSize: '14px', fontWeight: '500' }}>{item.topHeading}</b>
                                    <p style={{ fontSize: '12px', margin: '3px 0px' }}>{item.topSubHeading}</p>
                                    <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>{item.heading}</p>
                                    <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>{item.subHeading}</p>
                                    <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>{item.btnText}</Button>
                                </div>
                                <div className={classes.slideImage} >
                                    <img src={`${process.env.PUBLIC_URL}${item.imgUrl}`} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default BannerSlider