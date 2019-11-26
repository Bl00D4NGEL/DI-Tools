import React, {useState} from 'react';
import SubmitButton from "../BaseElements/SubmitButton/SubmitButton";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import RoleSelector from "./RoleSelector/RoleSelector";
import CustomForm from "../BaseElements/Form/Form";
import GetTagListDataService from "../../services/GetTagListDataService/GetTagListDataService";
import Grouper from "./Grouper/Grouper";
import DivisionTag from "./DivisionTag/DivisionTag";
import HouseSelector from "./HouseSelector/HouseSelector";
import './tag-list.scss';

export default function TagList() {
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [selectedHouses, setSelectedHouses] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [membersToTag, setMembersToTag] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        new GetTagListDataService({
            divisions: selectedDivisions,
            houses: selectedHouses,
            roles: selectedRoles,
            setMembers: setMembersToTag
        });
    };

    const generateTagList = () => {
        if (membersToTag !== undefined) {
            const members = [];
            const memberIds = [];
            Object.keys(membersToTag).forEach(
                position => membersToTag[position].forEach(member => {
                        if (!memberIds.includes(member.id)) {
                            members.push(member);
                            memberIds.push(member.id);
                        }
                    }
                )
            );
            return Object.keys(Grouper({members}))
                .map(
                    division => <DivisionTag key={division} divisionName={division}
                                             positions={Grouper({members})[division]}/>
                );
        }
        return null;
    };


    return <div className="tag-list">
        <CustomForm
            formFields={
                <div>
                    <div className="flex" style={{justifyContent: 'space-between', maxWidth: 80 + '%'}}>
                        <div>
                            <DivisionSelector setSelectedDivisions={setSelectedDivisions}/>
                        </div>
                        <div>
                            <HouseSelector setSelectedHouses={setSelectedHouses}/>
                        </div>
                        <div>
                            <RoleSelector setSelectedRoles={setSelectedRoles}/>
                        </div>
                    </div>
                    <div>
                        <SubmitButton value="Get Taglist"/>
                    </div>
                </div>
            }
            onSubmit={handleSubmit}
        />
        {generateTagList()}
    </div>
}
