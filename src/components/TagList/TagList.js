import React, {useState} from 'react';
import SubmitInput from "../BaseElements/SubmitInput";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import RoleSelector from "./RoleSelector/RoleSelector";
import CustomForm from "../BaseElements/Form";
import GetTagListDataService from "../../services/GetTagListDataService/GetTagListDataService";
import Grouper from "./Grouper";
import DivisionTag from "./DivisionTag/DivisionTag";

export default function TagList() {
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [membersToTag, setMembersToTag] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        new GetTagListDataService({divisions: selectedDivisions, roles: selectedRoles, setMembers: setMembersToTag});
    };

    const generateTagList = () => {
        if (membersToTag !== undefined) {
            const members = [];
            const memberIds = [];
            Object.keys(membersToTag).forEach(
                position => membersToTag[position].forEach( member => {
                        if (!memberIds.includes(member.id)) {
                            members.push(member);
                            memberIds.push(member.id);
                        }
                    }
                )
            );
            return Object.keys(Grouper({members}))
                    .map(
                        division => <DivisionTag key={division} divisionName={division} positions={Grouper({members})[division]}/>
                    );
        }
        return null;
    };


    return <div className="taglist">
        <CustomForm
            formFields={
                <div>
                    <div className="flex">
                        <DivisionSelector setSelectedDivisions={setSelectedDivisions}/>
                        <RoleSelector setSelectedRoles={setSelectedRoles}/>
                    </div>
                    <div>
                        <SubmitInput value="Get Taglist"/>
                    </div>
                </div>
            }
            onSubmit={handleSubmit}
        />
        {generateTagList()}
    </div>
}
