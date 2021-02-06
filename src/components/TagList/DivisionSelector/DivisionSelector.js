import React from 'react';
import CustomSelect from "../../BaseElements/Select/Select";
import MultipleSelectGetSelectedOptionsHelper
    from "../../../helpers/MultipleSelectGetSelectedOptionsHelper/MultipleSelectGetSelectedOptionsHelper";
import './division-selector.scss';
import useDivisions from "../../../hooks/UseDivisions";

export default function DivisionSelector({setSelectedDivisions}) {
    const divisions = useDivisions();

    return <div>
        <div style={{paddingBottom: 20 + 'px'}}>
            <span>Select division(s) to tag</span>
        </div>
        <div className="division-selector">
            <CustomSelect
                data={{multiple: true}}
                options={divisions.map(division => ({
                    name: division,
                    key: division,
                    value: division
                }))}
                onChange={(e) => setSelectedDivisions(MultipleSelectGetSelectedOptionsHelper(e))}
            />
        </div>
    </div>
}
