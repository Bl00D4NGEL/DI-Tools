import React from "react";
import PositionTag from "./PositionTag";
import {PRIORITIES} from "./Positions";

export default function DivisionTag({positions, divisionName}) {
    return <div>
        <h1>Division: {divisionName}</h1>
        {
            Object.keys(positions)
                .sort((a, b) => PRIORITIES[a] - PRIORITIES[b])
                .map(
                    position => <PositionTag key={position} teams={positions[position]} positionName={position}/>
                )
        }
    </div>
};
