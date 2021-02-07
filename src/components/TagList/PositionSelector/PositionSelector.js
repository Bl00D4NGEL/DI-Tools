import React, {useEffect} from 'react';
import Checkbox from "../../BaseElements/Checkbox/Checkbox";
import useSortedPositions from "../../../hooks/UseSortedPositions";

const nameMap = {
    HG: 'House Leader',
    FC: 'House Vice',
    FL: 'Fraction Leader',
    FV: 'Fraction Vice',
    DC: 'Division Leader',
    DV: 'Division Vice',
    TL: 'Team Leader',
    RL: 'Roster Leader',
    TM: 'Member'
};

export default function PositionSelector({selectedPositions, setSelectedPositions}) {
    const positions = useSortedPositions();

    useEffect(() => {
        if (positions.length !== 0) {
            setSelectedPositions(positions);
        }
    }, [positions]);

    const handleCheckbox = (e) => {
        if (e.currentTarget.checked) {
            setSelectedPositions([
                ...selectedPositions,
                e.currentTarget.value
            ]);
        } else {
            setSelectedPositions(selectedPositions.filter(selectedPosition => selectedPosition !== e.currentTarget.value));
        }
    };

    return <div>
        <div>Select position(s) to tag:</div>
        <div>
            {
                positions.map(rank => (
                        <Checkbox
                            name={rank}
                            value={rank}
                            key={rank}
                            defaultChecked={true}
                            description={nameMap[rank] || rank}
                            onClick={handleCheckbox}
                        />
                    )
                )
            }
        </div>
    </div>
}
