import CustomRequest from "../../helpers/CustomRequest/CustomRequest";
import Config from "../../Config";

export default function LoadDivisionsService({setRoles}) {
    CustomRequest(
        Config.mdrRoleNamesEndpoint(),
        (responseData) => {
            setRoles(responseData);
        }
    );
}
