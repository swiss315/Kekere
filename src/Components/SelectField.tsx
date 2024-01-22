import React from 'react';

function SelectField(props: any) {
    return (
        <div className={`input-container ${props.className}`}>
            <label className="input-custom-label input-focus" data-shrink="true"
                   htmlFor="outlined-required">{props.name}</label>
            <div className="input-custom-input input-custom-input-focus ">
                <select aria-invalid="false" id="outlined-required" required
                       className="custom-input focus-visible:outline-0 md:text-sm text-xs ">
                    { props.option.map((option: {value: any, label: 'string'}, index: number) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    })}
                </select>
                <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-nqlg3w">
                    <legend className="css-14lo706"><span>{props.name}</span></legend>
                </fieldset>
            </div>
        </div>
    )
}

export default SelectField