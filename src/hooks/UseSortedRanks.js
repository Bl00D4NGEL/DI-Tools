import {useEffect, useState} from "react";
import CustomRequest from "../helpers/CustomRequest/CustomRequest";
import Config from "../Config";
import {SortByPriorityArray} from "../helpers/SortByPriorityArray";

const priority = [
    'L8',
    'L7',
    'L6',
    'L5',
    'L4',
    'Captain',
    'Vanguard',
    'Elite',
    'Specialist',
    'Away',
    'Member',
    'Probation',
    'Associate'
];

export default function useSortedRanks() {
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        CustomRequest(
            Config.mdrRanksEndpoint(),
            response => {
                setRanks(SortByPriorityArray(response, priority));
            }
        );
    }, []);

    return ranks;
}