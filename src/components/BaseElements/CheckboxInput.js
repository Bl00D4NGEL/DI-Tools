import React from 'react';

export default function CheckboxInput({defaultChecked, description, value, name, isDisabled, onClick}) {
    return <div className="div-checkbox flex">
        <div>
            <label className="vertical-center" onClick={(e) => e.currentTarget.parentNode.childNodes[1].click()}>{description}</label>
            <input type="checkbox" defaultChecked={defaultChecked} name={name} value={value} onClick={onClick} disabled={isDisabled ? 'disabled' : ''}/>
            <span className="checkmark" onClick={(e) => e.currentTarget.parentNode.childNodes[1].click()}/>
        </div>
    </div>;
}
