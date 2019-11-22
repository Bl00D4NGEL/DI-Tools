import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";

export default function LoadDivisionsService({setHouses}) {
    CustomRequest(
        Config.mdrHouseNamesEndpoint(),
        (responseData) => {
            const houses = [];
            responseData.forEach(div => houses.push({
                key: div,
                value: div,
                name: div
            }));
            setHouses(houses);
        }
    );
}
