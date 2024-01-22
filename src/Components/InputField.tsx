import React, {useEffect, useState} from 'react';

function InputField(props: any) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(props.value);
        setInputValue(props.value || '');
    }, [props.value]);

    const handleChange = (e: any) => {
        const newValue = e.target.value;
        console.log(newValue)
        setInputValue(newValue);

        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    return (
        <div className={`input-container ${props.className}`}>
            <label className="input-custom-label input-focus" data-shrink="true" htmlFor="outlined-required">
                {props.name}
            </label>
            <div className="input-custom-input input-custom-input-focus">
                <input
                    aria-invalid="false"
                    id="outlined-required"
                    readOnly={props.readOnly}
                    type={props.type}
                    className={`custom-input !py-3 !px-4 !text-black  md:text-sm text-xs focus-visible:outline-0 ${props.readOnly ? '!text-custom-darkgreen font-bold !text-lg': ''}`}
                    value={inputValue}
                    onChange={handleChange}
                />
                <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-nqlg3w">
                    <legend className="css-14lo706"><span>{props.name}</span></legend>
                </fieldset>
            </div>
        </div>
    )
}

export default InputField