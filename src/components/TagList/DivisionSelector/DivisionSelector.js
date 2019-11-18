import React, {useState, useEffect} from 'react';
import CustomSelect from "../../BaseElements/Select";
import LoadDivisionsService from "../../../services/LoadDivisionsService/LoadDivisionsService";
import MultipleSelectGetSelectedOptionsHelper
    from "../../../helpers/MultipleSelectGetSelectedOptionsHelper/MultipleSelectGetSelectedOptionsHelper";

export default function DivisionSelector({setSelectedDivisions}) {
    const [selectableDivisions, setSelectableDivisions] = useState([]);
    useEffect(() => {
        LoadDivisionsService({setDivisions: setSelectableDivisions});
    }, []);
    return <div>
        <div style={{paddingBottom: 20 + 'px'}}>
            <span>Select divisions to get taglist for</span>
        </div>
        <div className="division-select">
            <CustomSelect
                data={{multiple: true}}
                options={selectableDivisions}
                onChange={(e) => setSelectedDivisions(MultipleSelectGetSelectedOptionsHelper(e))}
            />
        </div>
    </div>
}
