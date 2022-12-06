import React from 'react'
import './commonComponents.css'




interface CardWithImageProps {
    text: string;
    headIcon: string;
    isSelected: boolean;
   
    btnClick: () => void
}
const CardWithImage = (props: CardWithImageProps) => {
   
    return (
        <div className={props.isSelected ?'cardWithImageSelected':'cardWithImage'} onClick={props.btnClick}>
             <img src={props.headIcon} alt="" style={{height:'28px',width:'23px'}}/>
           <span style={{fontSize:'12px'}}>{props.text} </span>
        </div>
    )
}

export default CardWithImage