import { useState } from "react";
import "./Seat.css";



const Seat = props => {

   const [clicked, setClick] = useState(false);


    const settingClick = () => {
        console.log(clicked);
        setClick(!clicked);

    }


        let styleState = "";
        clicked ? styleState = "train-seat__seat--free" : styleState = "train-seat__seat--occupied";

    


    return (
      <svg 
        className="train-seat"
        width="100" 
        height="100" 
        viewBox="0 0 100 100"
        onClick={settingClick}
      >
        <g className={`train-seat__seat ${styleState}`}>
         <rect x="10" y="15" width="80" height="70" rx="15" ry="15" />
         <rect x="30" y="10" width="52" height="15" rx="3" ry="3" />
         <rect x="30" y="75" width="52" height="15" rx="3" ry="3" />
         <rect x="70" y="10" width="20" height="80" rx="9.821" ry="10" />
        </g>
    
        <text className="train-seat__number" x="25" y="60">
          {props.seatNumber}
        </text>
      </svg>
    )
}


export default Seat;