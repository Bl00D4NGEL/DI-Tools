import React from "react";
import RosterTag from "./RosterTag";

export default function TeamTag({teamName, rosters}) {
    return <div>
        <h3>{teamName !== 'Unassigned' ? teamName : null}</h3>
        {
            Object.keys(rosters)
                .map(
                    rosterName => <RosterTag key={rosterName} members={rosters[rosterName].members} rosterName={rosterName}/>
                )
        }
    </div>;
}
