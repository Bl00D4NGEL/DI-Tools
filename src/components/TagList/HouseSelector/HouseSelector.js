import React, {useState, useEffect} from 'react';
import MultipleSelectGetSelectedOptionsHelper
    from "../../../helpers/MultipleSelectGetSelectedOptionsHelper/MultipleSelectGetSelectedOptionsHelper";
import LoadHousesService from "../../../services/LoadHousesService/LoadHousesService";
import CustomSelect from "../../BaseElements/Select";

export default function HouseSelector({setSelectedHouses}) {
    const [selectableHouses, setSelectableHouses] = useState([]);
    useEffect(() => {
        LoadHousesService({setHouses: setSelectableHouses});
    }, []);
    return <div>
        <div style={{paddingBottom: 20 + 'px'}}>
            <span>Select houses to tag</span>
        </div>
        <div className="division-select">
            <CustomSelect
                data={{multiple: true}}
                options={selectableHouses}
                onChange={(e) => setSelectedHouses(MultipleSelectGetSelectedOptionsHelper(e))}
            />
        </div>
    </div>
}
