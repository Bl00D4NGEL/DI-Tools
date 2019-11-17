import React, {useState, useEffect} from 'react';
import CheckboxInput from "../../BaseElements/CheckboxInput";
import LoadRolesService from "../../../services/LoadRolesService/LoadRolesService";

export default function RoleSelector({setSelectedRoles}) {
    const [possibleRoles, setPossibleRoles] = useState([]);
    const [selectedRoles, _setSelectedRoles] = useState({});

    useEffect(() => {
        LoadRolesService({setRoles: setPossibleRoles});
    }, []);

    const handleCheckbox = (e) => {
        selectedRoles[e.currentTarget.value] = e.currentTarget.checked;
        _setSelectedRoles(selectedRoles);
        setSelectedRoles(Object.keys(selectedRoles).filter(role => selectedRoles[role]));
    };

    const roleNameMap = {
        'HG': 'House General',
        'FC': 'First Commander',
        'DC': 'Commander',
        'DV': 'Vice',
        'TL': 'Team Leader',
        '2IC': 'Second in charge',
        'RL': 'Roster Leader',
        'TM': 'Member'
    };

    const generateRoleDivs = (maxValuesPerColumn) => {
        const groups = [];
        for (let i = 0; i <= Math.floor(possibleRoles.length / maxValuesPerColumn); i++) {
            groups.push(possibleRoles.slice(i * maxValuesPerColumn, i * maxValuesPerColumn + maxValuesPerColumn).map(role => {
                selectedRoles[role] = true;
                return <CheckboxInput
                    name={role}
                    value={role}
                    defaultChecked={true}
                    description={roleNameMap[role] !== undefined ? roleNameMap[role] : role}
                    onClick={handleCheckbox}
                />
            }));
        }
        return groups.map(group => <div>{group}</div>);
    };

    return <div>
        <div>Select roles to tag:</div>
        <div className="flex">
            {generateRoleDivs(6)}
        </div>
    </div>
}
