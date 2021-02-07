import {useEffect, useState} from "react";
import CustomRequest from "../helpers/CustomRequest/CustomRequest";
import Config from "../Config";

export default function useDivisions() {
    const [divisions, setDivisions] = useState([]);

    useEffect(() => {
        CustomRequest(
            Config.mdrDivisionsEndpoint(),
            setDivisions
        );
    }, []);

    return divisions;
}