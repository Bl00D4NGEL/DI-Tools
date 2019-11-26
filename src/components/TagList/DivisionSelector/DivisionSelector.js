import React, {useState, useEffect} from 'react';
import CustomSelect from "../../BaseElements/Select/Select";
import LoadDivisionsService from "../../../services/LoadDivisionsService/LoadDivisionsService";
import MultipleSelectGetSelectedOptionsHelper
    from "../../../helpers/MultipleSelectGetSelectedOptionsHelper/MultipleSelectGetSelectedOptionsHelper";
import './division-selector.scss';

export default function DivisionSelector({setSelectedDivisions}) {
    const [selectableDivisions, setSelectableDivisions] = useState([]);
    useEffect(() => {
        LoadDivisionsService({setDivisions: setSelectableDivisions});
    }, []);
    return <div>
        <div style={{paddingBottom: 20 + 'px'}}>
            <span>Select divisions to tag</span>
        </div>
        <div className="division-selector">
            <CustomSelect
                data={{multiple: true}}
                options={selectableDivisions}
                onChange={(e) => setSelectedDivisions(MultipleSelectGetSelectedOptionsHelper(e))}
            />
        </div>
    </div>
}
