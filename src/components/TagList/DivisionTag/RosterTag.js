import React from "react";
import MemberTag from "./MemberTag";

export default function RosterTag({rosterName, members}) {
    console.log(rosterName, members);
    return <div>
        <h4>{rosterName !== 'Not Set' ? rosterName : null}</h4>
        {
            members.map(
                member => <MemberTag id={member.id} name={member.name} key={member.id}/>
            )
        }
    </div>;
}
