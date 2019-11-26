import React, {useState, useEffect} from 'react';
import Checkbox from "../../BaseElements/Checkbox/Checkbox";
import LoadRolesService from "../../../services/LoadRolesService/LoadRolesService";

export default function RoleSelector({setSelectedRoles}) {
    const [possibleRoles, setPossibleRoles] = useState([]);
    const [selectedRoles, _setSelectedRoles] = useState({});

    useEffect(() => {
        LoadRolesService({
            setRoles: (data) => {
                setPossibleRoles(data);
                setRolesAsSelected(data);
            }
        });
    }, []);

    const setRolesAsSelected = (roles) => {
        roles.forEach(role => selectedRoles[role] = true);
        _setSelectedRoles(selectedRoles);
        setSelectedRoles(Object.keys(selectedRoles).filter(role => selectedRoles[role]));
    };

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
            groups.push({
                key: i,
                data: possibleRoles.slice(i * maxValuesPerColumn, i * maxValuesPerColumn + maxValuesPerColumn).map(role => {
                        return <Checkbox
                            name={role}
                            value={role}
                            key={role}
                            defaultChecked={true}
                            description={roleNameMap[role] !== undefined ? roleNameMap[role] : role}
                            onClick={handleCheckbox}
                        />
                    }
                )
            });
        }
        return groups.map(group => <div key={group.key}>{group.data}</div>);
    };

    return <div>
        <div>Select roles to tag:</div>
        <div className="flex">
            {generateRoleDivs(6)}
        </div>
    </div>
}
