import {useEffect, useState} from "react";
import CustomRequest from "../helpers/CustomRequest/CustomRequest";
import Config from "../Config";
import {SortByPriorityArray} from "../helpers/SortByPriorityArray";

const priority = [
    'HG',
    'FC',
    'FL',
    'FV',
    'DC',
    'DV',
    'TL',
    'RL',
    'TM'
];

export default function useSortedPositions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        CustomRequest(
            Config.mdrPositionsEndpoint(),
            response => {
                setPositions(SortByPriorityArray(response, priority));
            }
        );
    }, []);

    return positions;
}