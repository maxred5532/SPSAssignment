import React, {useState} from 'react';
import {InputNumber} from 'antd';
import {noop} from 'lodash';

const NumericInput = ({ value, defaultValue, onChange=noop, ...rest }) => {

    const [inputValue, setInputValue] = useState(value || defaultValue || '')

    const handleChange = (input) => {
        setInputValue(input)
        onChange(input)
    }

    return (
        <InputNumber {...rest}
                     value={inputValue}
                     onChange={handleChange}
        />
    )
}

export default NumericInput
