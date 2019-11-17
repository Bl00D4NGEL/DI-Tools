import React, {useState} from 'react';
import SubmitInput from "../BaseElements/SubmitInput";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import RoleSelector from "./RoleSelector/RoleSelector";

export default function TagList() {
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    console.log(selectedDivisions, selectedRoles);

    return <div className="taglist">
        <div className="flex">
            <DivisionSelector setSelectedDivisions={setSelectedDivisions}/>
            <RoleSelector setSelectedRoles={setSelectedRoles}/>
        </div>
        <div>
            <SubmitInput value="Get Taglist"/>
        </div>
    </div>
}
