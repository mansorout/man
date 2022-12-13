// import React from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./styles.css";

// const renderTime:any = (remainingTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too lale...</div>;
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   );
// };

// function TimerLoad() {
//   return (
//     <div className="App">
//       <h1>
//         CountdownCircleTimer
//         <br />
//         React Component
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying
//           duration={10}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <p className="info">
//         Change component properties in the code filed on the right to try
//         difference functionalities
//       </p>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<TimerLoad />, rootElement);

// export default TimerLoad

import React from 'react'

function TimerLoad() {
  return (
    <div>TimerLoad</div>
  )
}

export default TimerLoad
