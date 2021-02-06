import React, {useState} from 'react';
import SubmitButton from "../BaseElements/SubmitButton/SubmitButton";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import CustomForm from "../BaseElements/Form/Form";
import GetTagListDataService from "../../services/GetTagListDataService/GetTagListDataService";
import Grouper from "./Grouper/Grouper";
import DivisionTag from "./DivisionTag/DivisionTag";
import './tag-list.scss';
import RankSelector from "./RankSelector/RankSelector";
import PositionSelector from "./PositionSelector/PositionSelector";
import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";

const fetchTagList = (divisions, ranks, positions) => {
    CustomRequest(
        Config.mdrGetTagListEndpoint(),
        console.log,
        console.error,
        {divisions, ranks, positions}
    );
};
export default function TagList() {
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [selectedRanks, setSelectedRanks] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState([]);

    const [membersToTag, setMembersToTag] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchTagList(selectedDivisions, selectedRanks, selectedPositions);
        new GetTagListDataService({
            divisions: selectedDivisions,
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
                        <DivisionSelector
                            setSelectedDivisions={setSelectedDivisions}
                        />
                        <PositionSelector
                            selectedPositions={selectedPositions}
                            setSelectedPositions={setSelectedPositions}
                        />
                        <RankSelector
                            selectedRanks={selectedRanks}
                            setSelectedRanks={setSelectedRanks}
                        />
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
