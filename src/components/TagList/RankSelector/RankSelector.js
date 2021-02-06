import React, {useEffect} from 'react';
import Checkbox from "../../BaseElements/Checkbox/Checkbox";
import useSortedRanks from "../../../hooks/UseSortedRanks";

export default function RankSelector({selectedRanks, setSelectedRanks}) {
    const ranks = useSortedRanks();
    useEffect(() => {
        if (ranks.length !== 0) {
            setSelectedRanks(ranks);
        }
    }, [ranks]);

    const handleCheckbox = (e) => {
        if (e.currentTarget.checked) {
            setSelectedRanks([
                ...selectedRanks,
                e.currentTarget.value
            ]);
        } else {
            setSelectedRanks(selectedRanks.filter(selectedRank => selectedRank !== e.currentTarget.value));
        }
    };

    return <div>
        <div>Select rank(s) to tag:</div>
        <div>
            {
                ranks.map(rank => (
                        <Checkbox
                            name={rank}
                            value={rank}
                            key={rank}
                            defaultChecked={true}
                            description={rank}
                            onClick={handleCheckbox}
                        />
                    )
                )
            }
        </div>
    </div>
}
