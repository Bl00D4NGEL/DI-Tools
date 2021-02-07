import React, {useState} from 'react';
import SubmitButton from "../BaseElements/SubmitButton/SubmitButton";
import DivisionSelector from "./DivisionSelector/DivisionSelector";
import CustomForm from "../BaseElements/Form/Form";
import RankSelector from "./RankSelector/RankSelector";
import PositionSelector from "./PositionSelector/PositionSelector";
import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";
import TagList from "./TagList";

export default function TagListForm() {
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [selectedRanks, setSelectedRanks] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState([]);

    const [membersToTag, setMembersToTag] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        CustomRequest(
            Config.mdrGetTagListEndpoint(),
            setMembersToTag,
            console.error,
            {divisions: selectedDivisions, ranks: selectedRanks, positions: selectedPositions}
        );
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
        {membersToTag.length > 0 ? <TagList membersToTag={membersToTag} /> : null}
    </div>
}
