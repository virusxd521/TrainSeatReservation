import { Children } from "react";
import Seat from "../seat/Seat";




const Row = () => {
    const items = [];
    let i = 0;
    while(i < 95){
        items.push(<Seat key={i} seatNumber={i + 1} />);
        i++;
    }
    return (
        <div className="carriage-row">
            {items}
            
        </div>
    )
}

export default Row;