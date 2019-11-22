import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config, {Endpoint} from "../../Config";

export default function GetTagListDataService({divisions, roles, setMembers, houses}) {
    if (Array.isArray(houses) && houses.length > 0) {
        const divisionNamesEndpoint = Config.mdrDivisionNamesEndpoint();
        const endpoint = new Endpoint(divisionNamesEndpoint.url() + '?houseName=' + houses.join(';'));
        new CustomRequest(
            endpoint,
            (data) => {
                new CustomRequest(
                    Config.mdrGetTagListEndpoint(),
                    (data) => {
                        setMembers(data);
                    }, (e) => {
                        console.error(e);
                    }, {divisions: divisions.concat(data), roles}
                )
            }, (e) => {
                console.error(e)
            }
        );
        return;
    }
    new CustomRequest(
        Config.mdrGetTagListEndpoint(),
        (data) => {
            setMembers(data);
        }, (e) => {
            console.error(e);
        }, {divisions, roles}
    )
}
