import classNames from 'classnames';
import React, { memo } from 'react';
import ReactSelect from 'react-select';

import './select.css';

export const Select = ({ value, options, onChange, className }) => {
    return (
        <ReactSelect
            options={options}
            value={value}
            isSearchable={false}
            onChange={onChange}
            className={classNames('select-container', className)}
            classNamePrefix="select"
        />
    );
};

export default memo(Select);
