import { Switch } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import './commonComponents.css'




interface TextWithSwitchProps {
    text: string;
    // headIcon: string;
    // isSelected: boolean;
    // isCount?: boolean;
    // count?: number;
    // inc?: () => void;
    // dec?: () => void;
    // btnClick: () => void
}
const TextWithSwitch = (props: TextWithSwitchProps) => {

    return (
        <div className='switchContainer' >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '15px' }}>{props.text} </span>
            </div>
            <div style={{ flex: 1 }}></div>
         
                <div style={{ display: 'flex' ,alignItems:'center'}}>
                    <span  onClick={(e) => {  }}>No</span><span><Switch  color="primary" /></span><span  onClick={(e) => { }}>Yes</span>
                </div>

        </div>
    )
}

export default TextWithSwitch