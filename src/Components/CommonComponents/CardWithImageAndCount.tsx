import { Typography } from '@mui/joy';
import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import './commonComponents.css'




interface CardWithImageAndCountProps {
    text: string;
    headIcon: string;
    isSelected: boolean;
    isCount?: boolean;
    count?: number;
    inc?: () => void;
    dec?: () => void;
    btnClick: () => void
}
const CardWithImageAndCount = (props: CardWithImageAndCountProps) => {

    return (
        <div className={props.isSelected ? 'countCardSelected' : 'countCard'} onClick={props.btnClick}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
                <img src={props.headIcon} alt="" style={{ height: '28px', width: '23px', margin: '0 10px' }} />
                <span style={{ fontSize: '12px' }}>{props.text} </span>
            </div>
            <div style={{ flex: 1 }}></div>
            {props.isCount &&
                <div style={{ display: 'flex', zIndex: 100 }}>
                    <span className='roundBtn' onClick={(e) => { e.stopPropagation(); props.dec?.() }}>-</span><span>{props.count}</span><span className='roundBtn' onClick={(e) => { e.stopPropagation(); props.inc?.() }}>+</span>
                </div>}

        </div>
    )
}

export default CardWithImageAndCount