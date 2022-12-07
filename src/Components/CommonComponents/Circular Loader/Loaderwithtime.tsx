// import React, { useEffect, useState,useRef } from 'react'


// const styles = {
//     countdownContainer: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         margin: "auto",
//     },
//     svg: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         transform: "rotateY(-180deg) rotateZ(-90deg)",
//         overflow: "visible",
//     } as React.CSSProperties,
//     button: {
//         fontSize: 16,
//         padding: "15px 40px",
//         margin: "10px auto 30px",
//         display: "block",
//         backgroundColor: "#4d4d4d",
//         color: "lightgray",
//         border: "none",
//         cursor: "pointer",
//         outline: 0,
//     },
// };

// function Loaderwithtime(props: any) {

//     const countdownSizeStyles = {
//         height: props.size,
//         width: props.size,
//     };

//     const textStyles = {
//         color: props.strokeColor,
//         fontSize: props.size * 0.3,
//     };
//     function useInterval(callback:any, delay:any) {
//         const savedCallback = useRef();
      
//         // Remember the latest callback.
//         useEffect(() => {
//           savedCallback.current = callback;
//         }, [callback]);

//         useEffect(() => {
//             let id = setInterval(() => {
//               savedCallback.current();
//             }, delay);
//             return () => clearInterval(id);
//           }, [delay]);
//         }
//     const [countdown, setCountdown] = useState<number>(0)
//     const [isPlaying, SetIsPlaying] = useState<boolean>(true)
  
//     let milliseconds: number;
//     let radius: number;
//     let circumference: number;
  
//         const seconds = (countdown / 1000).toFixed();
  
//         milliseconds = props.seconds * 1000;
//         radius = props.size / 2;
//         circumference = props.size * Math.PI;
//         setCountdown(milliseconds)
//         SetIsPlaying(false)
 

//     const strokeDashoffset = () =>
//         circumference -
//         (countdown / milliseconds) * circumference;
// }

//      const startTimer = () => {
//         SetIsPlaying(true)

//   const interval =   setInterval(() => {
//         setCountdown(countdown - 10);
        
           
       

//         if (countdown === 0) {
//             clearInterval(interval);
//             setState({
//                 countdown: milliseconds,
//                 isPlaying: false,
//             });
//         }
//     }, 10);
// };





// return (
//     <>
//         <div>
//             <div
//                 style={{
//                     pointerEvents: isPlaying ? "none" : "all",
//                     opacity: isPlaying ? 0.4 : 1,
//                 }}
//             >
//                 <button
//                     style={styles.button}
//                     onClick={!isPlaying ? startTimer : () => { }}
//                 >
//                     START
//                 </button>
//             </div>
//             <div
//                 style={Object.assign(
//                     {},
//                     styles.countdownContainer,
//                     countdownSizeStyles
//                 )}
//             >
//                 <p style={textStyles}>{seconds}s</p>
//                 <p>testtt</p>
//                 <svg style={styles.svg}>
//                     <circle
//                         cx={radius}
//                         cy={radius}
//                         r={radius}
//                         fill="none"
//                         stroke={props.strokeBgColor}
//                         strokeWidth={props.strokeWidth}
//                     ></circle>
//                 </svg>
//                 <svg style={styles.svg}>
//                     <circle
//                         strokeDasharray={circumference}
//                         strokeDashoffset={
//                             isPlaying ? strokeDashoffset() : 0
//                         }
//                         r={radius}
//                         cx={radius}
//                         cy={radius}
//                         fill="none"
//                         strokeLinecap="round"
//                         stroke={props.strokeColor}
//                         strokeWidth={props.strokeWidth}
//                     ></circle>
//                 </svg>
//             </div>
//         </div>
//     </>
// )
// }

// export default Loaderwithtime

// function SetIsPlaying(arg0: boolean) {
//     throw new Error('Function not implemented.');
// }
// function setCountdown(arg0: any) {
//     throw new Error('Function not implemented.');
// }


import React from 'react'

function Loaderwithtime() {
  return (
    <div>Loaderwithtime</div>
  )
}

export default Loaderwithtime