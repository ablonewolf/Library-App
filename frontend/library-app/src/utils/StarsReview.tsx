import React from "react";
import {FullStar} from "./stars/FullStar";
import {HalfStar} from "./stars/HalfStar";
import {EmptyStar} from "./stars/EmptyStar";

export const StarsReview: React.FC<{ rating: number, size: number }> = (props) => {
    const fullStars = Math.floor(props.rating);
    const halfStars = props.rating - fullStars;
    const emptyStars = 5 - Math.ceil(props.rating);
    return (
        <div>
            {
                Array.from({length: Math.floor(props.rating)}, (_, i) =>
                    <FullStar key={i} size={props.size}/>)
            }
            {
                halfStars > 0 ?
                    <HalfStar size={props.size}/>
                    :
                    <></>
            }
            {
                Array.from({length: emptyStars}, (_, i) =>
                    <EmptyStar key={i} size={props.size}/>)
            }
        </div>
    );
}