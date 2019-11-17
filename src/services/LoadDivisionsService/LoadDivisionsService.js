import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";

export default function LoadDivisionsService({setDivisions}) {
    CustomRequest(
        Config.mdrDivisionNamesEndpoint(),
        (responseData) => {
            const divisions = [];
            responseData.forEach(div => divisions.push({
                key: div,
                value: div,
                name: div
            }));
            setDivisions(divisions);
        }
    );
}
