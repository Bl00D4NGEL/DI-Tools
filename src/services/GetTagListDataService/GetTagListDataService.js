import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";

export default function GetTagListDataService({divisions, roles, setMembers}) {
    new CustomRequest(
        Config.mdrGetTagListEndpoint(),
        (data) => {
            setMembers(data);
        }, (e) => {
            console.error(e);
        }, {divisions, roles}
    )
}
