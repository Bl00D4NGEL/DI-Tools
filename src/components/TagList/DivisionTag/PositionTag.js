import React from "react";
import TeamTag from "./TeamTag";
import {POSITION_LONG_NAMES} from "./Positions";

export default function PositionTag({positionName, teams}) {
    return <div>
        <h2>{POSITION_LONG_NAMES[positionName]}</h2>
        {
            Object.keys(teams)
                .map(
                    teamName => <TeamTag key={teamName} rosters={teams[teamName]} teamName={teamName}/>
                )
        }
    </div>;
}
