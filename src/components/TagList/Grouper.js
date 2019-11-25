import {AWAY, INITIATE, PROBATION} from "./DivisionTag/Positions";

export default function Grouper({members}) {
    const groups = {};
    addGroupedMembersToObject(members, groups, 'division');
    groupByPosition(groups);
    return groups;
}

const groupByPosition = (divisions) => {
    Object.keys(divisions).forEach(divisionName => {
        const groupByPositions = [];
        const groupByRanks = [];
        divisions[divisionName].members.forEach(member => {
            if ([PROBATION, AWAY, INITIATE].includes(member.rank)) {
                groupByRanks.push(member);
            } else {
                groupByPositions.push(member);
            }
        });
        addGroupedMembersToObject(groupByRanks, divisions[divisionName], 'rank');
        addGroupedMembersToObject(groupByPositions, divisions[divisionName], 'position');
        groupByTeam(divisions[divisionName]);
    });
};

const groupByTeam = (positions) => {
    Object.keys(positions).forEach(positionName => {
        addGroupedMembersToObject(positions[positionName].members, positions[positionName], 'team');
        groupByRoster(positions[positionName]);
    });
};

const groupByRoster = (teams) => {
    console.log(teams);
    Object.keys(teams).forEach(teamName => {
        console.log(teams[teamName]);
        addGroupedMembersToObject(teams[teamName].members, teams[teamName], 'roster');
    });
};

const addGroupedMembersToObject = (members, object, groupBy) => {
    const grouped = groupMembersByAttribute(members, groupBy);
    const lengthBefore = Object.keys(object).length;
    Object.keys(grouped).forEach(groupName => {
        if (object[groupName] === undefined) {
            object[groupName] = {};
        }
        object[groupName].members = grouped[groupName];
    });
    if (lengthBefore !== Object.keys(object).length) {
        delete (object.members);
    }
};

const groupMembersByAttribute = (members, attribute) => {
    const groups = {};
    if (Array.isArray(members) && members.length > 0) {
        members.forEach(member => {
            if (member[attribute] !== undefined && groups[member[attribute]] === undefined) {
                groups[member[attribute]] = [];
            }
            groups[member[attribute]].push(member);
        })
    }
    return groups;
};
