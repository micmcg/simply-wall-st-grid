import React, { memo, useMemo, useCallback } from 'react';

import Select from '_/components/select';

import { ASC, DESC } from '_/utils/sort-directions';

const sortOptions = [
    { value: DESC, label: 'Market Cap High to Low' },
    { value: ASC, label: 'Market Cap Low to High' },
];

const GridSortSelector = ({ sortDirection, setSortDirection }) => {
    const value = useMemo(
        () => sortOptions.find(({ value }) => value === sortDirection),
        [sortDirection]
    );

    const onChange = useCallback(
        ({ value }) => setSortDirection(value),
        [setSortDirection]
    );

    return (
        <Select
            options={sortOptions}
            value={value}
            onChange={onChange}
            className="grid-sort-selector"
        />
    );
};

export default memo(GridSortSelector);
