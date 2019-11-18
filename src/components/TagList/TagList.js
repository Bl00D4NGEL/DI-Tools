import React, {useState} from 'react';
import SubmitInput from "../BaseElements/SubmitInput";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import RoleSelector from "./RoleSelector/RoleSelector";
import CustomForm from "../BaseElements/Form";
import GetTagListDataService from "../../services/GetTagListDataService/GetTagListDataService";
import MemberTag from "./MemberTag";

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
            return Object.keys(membersToTag).map(role => membersToTag[role].map(
                member => <MemberTag key={member.id} id={member.id} name={member.name}/>
            ));
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
