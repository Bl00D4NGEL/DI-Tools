import MemberTag from "./MemberTag";
import React from "react";

export default function TagList({membersToTag}) {
    const divisions = {};
    membersToTag.forEach(member => {
        if (!divisions[member.division]) {
            divisions[member.division] = [];
        }

        divisions[member.division].push(member);
    });
    return Object.keys(divisions).map(division => {
        return <div>
            <h1>Division {division}</h1>
            {
                divisions[division].map(member => <MemberTag id={member.id} name={member.name}/>)
            }
        </div>
    });
}